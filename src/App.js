import React from 'react';
import Nav from './Nav';
import Dealer from './Dealer';
import PageContent from './PageContent';
import { ThemeProvider } from './context/ThemeContext';

function App() {
	return (
		<ThemeProvider>
			<PageContent>
				<Nav />
				<Dealer />
			</PageContent>
		</ThemeProvider>
	);
}

export default App;
