import axios from "axios";

export const fetchSeriesByIdApi = async (id) => {
    return await axios.get(`http://localhost:8762/shows/${id}`);
  };


  export const fetchEpisodesByIdApi = async (id) => {
    return await axios.get(`http://localhost:8762/shows/${id}/episodes`);
  };

  export const fetchStaffByIdApi = async (id) => {
    return await axios.get(`http://localhost:8762/shows/${id}/staff`);
  };
  