import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

//* Style
import './index.css';

//* Context
import { ThemProvider } from './context/ThemeProvider';

//* Components
import App from './app/App';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<ThemProvider>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</ThemProvider>
	</React.StrictMode>
);
