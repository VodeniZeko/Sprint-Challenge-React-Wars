import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Axios from "axios";

const CardContainer = styled.div`
  font-family: "Open Sans", Arial, sans-serif;
  padding: 10px;
  width: 20%;
  line-height: 1.4em;
  font-size: 14px;
  display: inline-block;
  min-width: 150px;
  margin: 10px;

  img {
    max-width: 100%;
    vertical-align: top;
  }
  .profile-image {
    width: 80%;
    z-index: 1;
    position: relative;
    padding: 10px;
    border: 2px solid #000;
    margin: 0 auto;
  }
  .caption {
    width: 100%;
    background-color: #f2f2f2;
    color: #555;
    padding: 125px 25px 25px;
    margin-top: -100px;
  }
  h3 {
    font-weight: 600;
    font-size: 1.3em;
    font-family: "Playfair Display", Arial, sans-serif;
  }
  h4 {
    color: #8c8c8c;
    font-weight: 400;
    letter-spacing: 2px;
  }
  p {
    font-size: 0.9em;
    letter-spacing: 1.1px;
    opacity: 0.9;
  }
`;

export default function Card({ person }) {
  const [clas, setClas] = useState([]);
  useEffect(() => {
    Axios.get(person.species).then(res => {
      setClas(res.data);
    });
  }, []);
  return (
    <CardContainer>
      <div className="container">
        <div className="profile-image">
          <h3>{person.name}</h3>
        </div>
        <div className="caption">
          <h4>{person.gender}</h4>
          <h4>{clas.classification}</h4>
          <p>appeared in: {person.films.length} films</p>
        </div>
      </div>
    </CardContainer>
  );
}
