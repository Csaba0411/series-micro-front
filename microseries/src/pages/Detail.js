import React, { useContext, useEffect } from "react";
import { IdProviderContext } from "../contexts/IdProviderContext";
import { DetailContext } from "../contexts/DetailProvider";
import SubNavBar from "../components/SubNavBar";
import axios from "axios";

import "../style/Style.css";
import "../style/Card.css";

const Detail = () => {
  const { main, fetchSeriesById, showName, setTrailer } = useContext(DetailContext);
  const { showId } = useContext(IdProviderContext);
  
  const concatedShowName = showName.replace(/\s/g, '').toLowerCase();

  useEffect(() => {
    fetchSeriesById();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showId]);

  useEffect(() => {
    axios
      .get(`https://www.googleapis.com/youtube/v3/search?q=${concatedShowName}+official&type=video&key=AIzaSyC-ut0yCrQyyd8SGy-1buMA1_DHpb9cgq4`)
      .then((response) => {
        setTrailer(response.data.items[0].id.videoId);
      });
  }, [concatedShowName, setTrailer]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  

  const pic = main.image ? main.image : [];

  return (
    <div className="mainCont">
      <SubNavBar />
    
      <div className="details">
        <div className="picbox">
          <img alt={main.name} src={pic.original} />
        </div>
        </div>
    </div>
  );
};

export default Detail;