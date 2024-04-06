import React, { Suspense, useEffect, useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';

//* Components
import AboutPageAsync from '@/pages/AboutPage/AboutPage.async';
import MainPageAsync from '@/pages/MainPage/MainPage.async';
import { Button } from '@/components/ui/button';

const App: React.FC = () => {
	const [theme, setTheme] = useState<'light' | 'dark'>('light');

	useEffect(() => {
		const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

		const handleChange = (e: MediaQueryListEvent) => {
			setTheme(e.matches ? 'dark' : 'light');
		};

		darkModeMediaQuery.addEventListener('change', handleChange);

		setTheme(darkModeMediaQuery.matches ? 'dark' : 'light');

		return () => {
			darkModeMediaQuery.removeEventListener('change', handleChange);
		};
	}, []);

	useEffect(() => {
		document.body.classList.remove('light', 'dark');
		document.body.classList.add(theme);
	}, [theme]);

	const toggleTheme = () => {
		setTheme(theme === 'light' ? 'dark' : 'light');
	};

	return (
		<div className={`flex flex-col h-screen`}>
			<nav className='bg-slate-200'>
				<div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8'>
					<div className='flex items-center justify-between h-16'>
						<div className='flex'>
							<Link
								to='/'
								className='text-zinc-600 px-3 py-2 rounded-md text-md font-semibold'>
								Main
							</Link>
							<Link
								to='/about'
								className='text-zinc-600 px-3 py-2 rounded-md text-md font-semibold'>
								About
							</Link>
						</div>
					</div>
				</div>
			</nav>

			<div>
				<Button
					onClick={toggleTheme}
					className='absolute top-0 right-0 m-5 p-2'>
					Change them mode
				</Button>
			</div>

			<div className='flex-grow p-5'>
				<Suspense fallback={<div>Loading...</div>}>
					<Routes>
						<Route
							path='/'
							element={<MainPageAsync />}
						/>
						<Route
							path='/about'
							element={<AboutPageAsync />}
						/>
					</Routes>
				</Suspense>
			</div>
		</div>
	);
};

export default App;
