import axios from "axios";

export const getGithubData = async () => {
  return await axios.get("https://api.github.com/repos/facebook/react");
};
