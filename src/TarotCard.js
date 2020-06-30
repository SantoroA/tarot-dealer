import React from "react";
import "./TarotCard.css";
import useToggle from "./hooks/useToggle";

export default function TarotCard(props) {
  const [isBig, toggleIsBig] = useToggle(false);
  return (
    <div className={isBig ? "TarotCard col-12" : "TarotCard col-3"}>
      <img
        onClick={toggleIsBig}
        src={props.card.illuminatiUrl}
        alt={props.card.name}
        className={isBig ? "big" : "regular"}
      />
      <p>{props.card.name}</p>
    </div>
  );
}
