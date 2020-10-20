import React, { useState, useContext } from "react";
import {fetchSeriesByIdApi, fetchEpisodesByIdApi, fetchStaffByIdApi} from "../api/ApiCalls";
import { IdProviderContext } from "../contexts/IdProviderContext";

export const DetailContext = React.createContext();

export function DetailProvider(props) {
  const { showId } = useContext(IdProviderContext);
  
  const [main, setMain] = useState([]);
  const [episodes, setEpisodes] = useState([]);
  const [cast, setCast] = useState([]);
  
    function fetchSeriesById() {
    fetchSeriesByIdApi(showId).then((data) => setMain(data.data));
  }

  const fetchEpisodesById = (id) => {
    fetchEpisodesByIdApi(id).then((data2) => setEpisodes(data2.data));
  };

  const fetchStaffById = (id) => {
    fetchStaffByIdApi(id).then((data) => setCast(data.data));
  };


    return (
    <DetailContext.Provider
      value={{
        main,
        fetchSeriesById,
        episodes,
        fetchEpisodesById,
        cast,
        fetchStaffById

        }}
    >
      {props.children}
    </DetailContext.Provider>
  );
}