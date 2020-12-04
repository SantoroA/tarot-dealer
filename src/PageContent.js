import React, { useContext } from 'react';
import { ThemeContext } from './context/ThemeContext';

export default function PageContent(props) {
	const { isDarkMode } = useContext(ThemeContext);
	const styles = {
		backgroundColor: isDarkMode ? '#45046a' : '#f1ebbb',
		color: isDarkMode ? '#f1ebbb' : '#45046a',
		minHeight: '100vh',
		minWidth: '100vw',
		textAlign: 'center'
	};
	return <div style={styles}>{props.children}</div>;
}
