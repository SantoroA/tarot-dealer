import React, { useState, useContext } from "react";
import TarotCard from "./TarotCard";
import { decks } from "./TarotDecks/decks";
import { choice } from "./helpers";
import { ThemeContext } from "./contexts/ThemeContext";
import "./Dealer.css";

export default function Dealer() {
  const [initialDeck, setInitialDeck] = useState(decks);
  const [dealtCards, setDealtCards] = useState([]);
  const [currCard, setCurrCard] = useState(null);
  const { isDarkMode } = useContext(ThemeContext);

  function dealCard() {
    const newCard = choice(initialDeck);
    console.log(newCard);
    setCurrCard(newCard);
    setInitialDeck(initialDeck.filter((x) => x !== newCard));
    setDealtCards([...dealtCards, newCard]);
  }
  return (
    <div className="Dealer pt-5 container">
      <div className="row mt-5">
        {currCard && dealtCards.map((card) => <TarotCard card={card} />)}
      </div>
      <button
        className={isDarkMode ? "btn dark mt-5" : "btn mt-5 light"}
        onClick={dealCard}
      >
        Deal
      </button>
    </div>
  );
}
