import React from "react";
import Card from "./Card";
import styled from "styled-components";

const ListContainer = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0 auto;
`;

export default function CardList({ characters }) {
  return (
    <ListContainer>
      {characters.map((person, i) => {
        return <Card key={i} person={person} />;
      })}
    </ListContainer>
  );
}
