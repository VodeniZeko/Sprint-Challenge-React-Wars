import React from "react";
import Card from "./Card";

export default function CardList({ characters }) {
  return (
    <div>
      {characters.map((person, i) => {
        return <Card key={i} person={person} />;
      })}
    </div>
  );
}
