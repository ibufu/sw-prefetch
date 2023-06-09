let preFetchResponses = new Map();

const apiUrl = "https://api.github.com/repos/facebook/react";

self.addEventListener("fetch", (event) => {
  const url = event.request.url;
  console.log("Fetch event url: ", url);
  if (url === `${location.origin}/`) {
    console.log("Matched", url);

    preFetchResponses.clear();
    let start = Date.now();
    // 预先发起一个请求，并且将请求的 Promise 保存起来
    const fetchPromise = fetch(apiUrl)
      .then((response) => {
        let end = Date.now();
        console.log("Request API Duration: ", end - start);
        return response.clone();
      }) // 确保原始响应可以被其他地方使用
      .catch((error) => {
        console.error("Error:", error);
      });
    preFetchResponses.set(apiUrl, fetchPromise);

    event.respondWith(fetch(event.request));
  }
  // 检查是否有匹配的预先发起的请求
  if (preFetchResponses.has(url)) {
    // 使用保存的响应来处理 fetch 事件
    event.respondWith(preFetchResponses.get(url));
    console.log("Hit Cache ", url);
    preFetchResponses.clear();
  } else {
    // 如果没有匹配的预先发起的请求，就正常处理 fetch 事件
    event.respondWith(fetch(event.request));
    console.log("Miss cache ", url);
  }
});
