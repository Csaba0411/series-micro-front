import React from 'react';
import { Link } from "react-router-dom";
import "../style/Style.css";

export default function Card(props) {
    return (
        <section className="main-container">
        
      <div className="location" id="home">
        <div className="mbox">
          <Link
            // onClick={() => setshowId(props.show.id)}
            // to={"/shows/" + props.show.id}
          >
            <img src={props.show.image.medium} alt={props.show.name} />
          </Link>
        </div>
      </div>
    </section>
    )
}