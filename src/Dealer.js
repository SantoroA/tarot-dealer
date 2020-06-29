import React, { useState } from "react";
import TarotCard from "./TarotCard";
import { decks } from "./TarotDecks/decks";
import { choice } from "./helpers";

export default function Dealer() {
  const [initialDeck, setInitialDeck] = useState(decks);
  const [dealtCards, setDealtCards] = useState([]);
  const [currCard, setCurrCard] = useState(null);

  function dealCard() {
    const newCard = choice(initialDeck);
    console.log(newCard);
    setCurrCard(newCard);
    setInitialDeck(initialDeck.filter((x) => x !== newCard));
    setDealtCards([...dealtCards, newCard]);
  }
  return (
    <div className="container">
      <h1>Hi</h1>
      <div className="row">
        {currCard && dealtCards.map((card) => <TarotCard card={card} />)}
      </div>
      <button onClick={dealCard}>Deal</button>
    </div>
  );
}
