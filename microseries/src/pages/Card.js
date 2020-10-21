import React, {useContext} from 'react';
import { Link } from "react-router-dom";
import "../style/Style.css";
import { IdProviderContext } from "../contexts/IdProviderContext";
import { DetailContext } from "../contexts/DetailProvider";

export default function Card(props) {
    const { setshowId } = useContext(IdProviderContext);
    const {setshowName} = useContext(DetailContext)


    function setShowDetails() {
      
      setshowId(props.show.id)
      setshowName(props.show.name)
    }
    
    return (
        <section className="main-container">
        
      <div className="location" id="home">
        <div className="mbox">
          <Link
           onClick={setShowDetails}
           to={"/shows/" + props.show.id}
          >
            <img src={props.show.image.medium} alt={props.show.name} />
          </Link>
        </div>
      </div>
    </section>
    )
}