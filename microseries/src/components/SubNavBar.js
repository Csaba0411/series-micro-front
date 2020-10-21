import React, { useContext, useState } from "react";
import { IdProviderContext } from "../contexts/IdProviderContext";
import { DetailContext } from "../contexts/DetailProvider";
import { Link } from "react-router-dom";
import ModalVideo from "react-modal-video";
import "react-modal-video/scss/modal-video.scss";
import "../style/Style.css";

const SubNavBar = () => {
  const { showId } = useContext(IdProviderContext);
  const {
    fetchSeriesById,
    fetchEpisodesById,
    fetchStaffById,
    trailer
  } = useContext(DetailContext);
  // delegate these fetch calls to Context level and export functions
  const [isOpen, setOpen] = useState(false);
  return (
    <div>
      
      <nav className="sub-nav">
      
        <Link
          onClick={() => fetchSeriesById(showId)}
          key={showId + "main"}
          to={"/shows/" + showId}
        >
          Main
        </Link>{" "}
        |
        <Link
          onClick={() => fetchEpisodesById(showId)}
          key={showId + "episodes"}
          to={"/shows/" + showId + "/episodes"}
        >
          Episodes
        </Link>{" "}
        |
        <Link
          onClick={() => fetchStaffById(showId)}
          key={showId + "staff"}
          to={"/shows/" + showId + "/staff"}
        >
          Staff
        </Link>{" "}
        <React.Fragment>
        <ModalVideo
          channel="youtube"
          autoplay
          isOpen={isOpen}
          videoId={trailer}
          onClose={() => setOpen(false)}
        />

        <button className="btn" onClick={() => setOpen(true)}>
          Trailer
        </button>
      </React.Fragment>
      </nav>
    </div>
  );
};
export default SubNavBar;