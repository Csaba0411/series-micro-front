import axios from "axios";

export const fetchSeriesByIdApi = async (id) => {
    return await axios.get(`http://localhost:8762/shows/${id}`);
  };