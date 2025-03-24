import axios from "axios";

/*const api = axios.create({
  url: "https://jsonplaceholder.typicode.com",
});*/
const url = "https://jsonplaceholder.typicode.com";

export const fetchData = () => {
  return axios.get(url + "/posts");
};
