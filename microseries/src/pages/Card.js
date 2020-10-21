import React, {useContext} from 'react';
import { Link } from "react-router-dom";
import "../style/Style.css";
import { IdProviderContext } from "../contexts/IdProviderContext";

export default function Card(props) {
    const { setshowId } = useContext(IdProviderContext);
    return (
        <section className="main-container">
        
      <div className="location" id="home">
        <div className="mbox">
          <Link
           onClick={() => setshowId(props.show.id)}
           to={"/shows/" + props.show.id}
          >
            <img src={props.show.image.medium} alt={props.show.name} />
          </Link>
        </div>
      </div>
    </section>
    )
}