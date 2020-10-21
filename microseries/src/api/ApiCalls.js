import axios from "axios";

export const fetchSeriesByIdApi = async (id) => {
    return await axios.get(`http://localhost:8762/shows/${id}`,{
      credentials: "same-origin"
    });
  };


  export const fetchEpisodesByIdApi = async (id) => {
    return await axios.get(`http://localhost:8762/shows/${id}/episodes`,{
      credentials: "same-origin"
    });
  };

  export const fetchStaffByIdApi = async (id) => {
    return await axios.get(`http://localhost:8762/shows/${id}/staff`,{
      credentials: "same-origin"
    });
  };
  