import { useContext } from 'react';

//* Context
import { ThemeContext } from '@/context/ThemeProvider';

export default function useTheme() {
	const context = useContext(ThemeContext);

	if (!context) {
		throw new Error('useTheme must be used within a ThemeProvider');
	}

	return context;
}
