import axios from "configs/axios";

export default {
  login: (credential) => axios.post("/users/login", credential),
};
