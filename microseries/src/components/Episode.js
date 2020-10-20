import React from "react";
import "../style/Style.css";
import styled from "styled-components";

const CardStyle = styled.div`
  background-color: black;
  width: 55%;
  display: flex;
  vertical-align: baseline;
  
  text-align: left;
  font-size: 40%;
`;

const CardStyle2 = styled.div`
  background-color: black;
  width: 60%;
  display: flex;
  vertical-align: baseline;
  margin-left: 25%;
  text-align: left;
`;

const Episode = (props) => {
  const summary = props.episode.summary.replace("<p>", "").replace("</p>", "");

  return (
    <div >
      <h2>{props.episode.name}</h2>
    <div style={{ marginTop: "50px" }} className="details">
      <CardStyle>
        <div style={{ height: "100%", width: "400px" }} >
        <img
          style={{ height: "100%", width: "100%" }}
          alt={props.episode.name}
          src={props.episode.image.medium}
        />
        </div>
        <div style={{ height: "auto", width: "600px", paddingLeft: "20px" }}>{summary}</div>
      </CardStyle>
      </div>
    </div>
  );
};

export default React.memo(Episode);