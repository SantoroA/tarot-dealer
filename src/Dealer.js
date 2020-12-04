import React, { useState, useContext } from 'react';
import TarotCard from './TarotCard';
import { decks } from './TarotDecks/decks';
import { choice } from './helpers';
import { ThemeContext } from './context/ThemeContext';
import { animateScroll } from 'react-scroll';
import './Dealer.css';

export default function Dealer() {
	const [ initialDeck, setInitialDeck ] = useState(decks);
	const [ dealtCards, setDealtCards ] = useState([]);
	const [ currCard, setCurrCard ] = useState(null);
	const { isDarkMode } = useContext(ThemeContext);

	function dealCard() {
		const newCard = choice(initialDeck);
		setCurrCard(newCard);
		setInitialDeck(initialDeck.filter((x) => x !== newCard));
		setDealtCards([ ...dealtCards, newCard ]);
	}
	function shuffleDeck() {
		setInitialDeck(decks);
		setDealtCards([]);
	}

	return (
		<div id="dealer" className="Dealer py-5 container">
			<div className="row mt-5">
				{currCard && dealtCards.map((card) => <TarotCard key={card.id} card={card} />)}
			</div>
			{initialDeck.length === 0 ? (
				<button className={isDarkMode ? 'btn dark' : 'btn  light'} onClick={shuffleDeck}>
					Shuffle
				</button>
			) : (
				<button
					className={isDarkMode ? 'btn dark' : 'btn  light'}
					onClick={() => {
						dealCard();
						animateScroll.scrollToBottom();
					}}
				>
					Deal
				</button>
			)}
		</div>
	);
}
