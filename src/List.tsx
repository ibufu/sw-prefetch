import { useEffect, useState } from "react";
import { getGithubData } from "./api";

function List() {
  const [data, setData] = useState<{
    name: string;
    id: number;
    stargazers_count: number;
    watchers_count: number;
    forks_count: number;
  }>();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getGithubData();
      setData(data.data);
    };
    fetchData();
  }, []);

  if (!data) {
    return null;
  }

  return (
    <div>
      <p>name: {data.name}</p>
      <p>star: {data.stargazers_count}</p>
      <p>watchers: {data.watchers_count}</p>
      <p>forks: {data.forks_count}</p>
    </div>
  );
}

export default List;
