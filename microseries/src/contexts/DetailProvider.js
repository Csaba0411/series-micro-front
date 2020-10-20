import React, { useState, useContext } from "react";
import {fetchSeriesByIdApi} from "../api/ApiCalls";
import { IdProviderContext } from "../contexts/IdProviderContext";

export const DetailContext = React.createContext();

export function DetailProvider(props) {
  const { showId } = useContext(IdProviderContext);
  
  const [main, setMain] = useState([]);
  
    function fetchSeriesById() {
    fetchSeriesByIdApi(showId).then((data) => setMain(data.data));
  }

    return (
    <DetailContext.Provider
      value={{
        main,
        fetchSeriesById,
        }}
    >
      {props.children}
    </DetailContext.Provider>
  );
}