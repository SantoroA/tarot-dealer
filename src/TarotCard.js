import React from 'react';
import './TarotCard.css';
import useToggle from './hooks/useToggle';

export default function TarotCard(props) {
	// const [ isBig, toggleIsBig ] = useToggle(false);
	return (
		<div className="TarotCard col col-sm-6 col-lg-3 col-12">
			<img
				// onClick={toggleIsBig}
				src={props.card.riderWaiteUrl}
				alt={props.card.name}
				// className={isBig ? 'big' : 'regular'}
			/>
			<p>{props.card.name}</p>
		</div>
	);
}
