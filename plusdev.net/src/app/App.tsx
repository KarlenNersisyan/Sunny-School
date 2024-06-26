import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import Navbar from '@/components/shared/Navbar/Navbar';
import PostPageAsync from '@/pages/PostPage/PostPage.async';
import MainPageAsync from '@/pages/MainPage/MainPage.async';
import AboutPageAsync from '@/pages/AboutPage/AboutPage.async';
import LeftSidebar from '@/components/shared/LeftSidebar/LeftSidebar';
import RightSidebar from '@/components/shared/RightSidebar/RightSidebar';
import BurgerMenu from '@/components/shared/BurgerMenu/BurgerMenu';

const App = () => {
	return (
		<>
			<BurgerMenu />

			<main className='relative'>
				<Navbar />

				<div className='flex'>
					<LeftSidebar />

					<section className='flex min-h-screen flex-1 flex-colpx-6 pb-6 pt-28 xs:px-2 sm:px-10 md:px-6 md:pb-10 bg-zinc-100 dark:bg-zinc-800'>
						<div className='mx-autho w-full max-w-5xl'>
							<Suspense fallback={<div>Loading...</div>}>
								<Routes>
									<Route
										path='/'
										element={<MainPageAsync />}
									/>
									<Route
										path='/posts'
										element={<PostPageAsync />}
									/>
									<Route
										path='/about'
										element={<AboutPageAsync />}
									/>
								</Routes>
							</Suspense>
						</div>
					</section>
					<RightSidebar />
				</div>
			</main>
		</>
	);
};
export default App;
