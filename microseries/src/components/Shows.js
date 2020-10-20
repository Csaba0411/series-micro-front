import React, {useState, useEffect} from 'react'
import axios from "axios";
import Card from "../pages/Card";

export default function Shows() {

    const [series, setSeries] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8762/shows").then((response) => {
          setSeries(response.data);
        });
      }, []);
    
    return (
        <div>
            
            <div className="box">
        {series.map((show, index) => (
          <Card key={show.id} index={index} show={show} />
        ))}
      </div>
        </div>
    )
}