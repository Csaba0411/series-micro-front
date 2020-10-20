import React, { useContext, useEffect } from "react";
import { IdProviderContext } from "../contexts/IdProviderContext";
import { DetailContext } from "../contexts/DetailProvider";
// import SubNavBar from "../components/SubNavBar";

import "../style/Style.css";
import "../style/Card.css";

const Detail = () => {
  const { main, fetchSeriesById } = useContext(DetailContext);
  const { showId } = useContext(IdProviderContext);

  useEffect(() => {
    fetchSeriesById();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showId]);

  const pic = main.image ? main.image : [];

  return (
    <div className="mainCont">
      {/* <SubNavBar /> */}
      <br />
      <h1 style={{ textAlign: "center" }}>{main.name}</h1>
      <div className="details">
        <div>
          <img alt={main.name} src={pic.medium} />
        </div>
        </div>
    </div>
  );
};

export default Detail;