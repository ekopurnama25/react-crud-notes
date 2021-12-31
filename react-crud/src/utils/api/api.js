import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:8080/api/notes",
  headers: {
    "Content-type": "application/json",
  },
});
