import axios from "axios";

export const getData1 = async () => {
  return await axios.get("https://api.thecatapi.com/v1/images/search?t=1");
};

export const getData2 = async () => {
  return await axios.get("https://api.thecatapi.com/v1/images/search?t=2");
};