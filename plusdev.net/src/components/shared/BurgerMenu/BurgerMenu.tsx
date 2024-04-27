import { Button } from '@/components/ui/button';
import { LucideFileQuestion, LucideHome, LucideNewspaper, LucideTags, LucideUserCircle, LucideUserX2, LucideUsers2 } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import logo from '@/assets/logo.webp';

const BurgerMenu = () => {
	const location = useLocation();

	const isActive = (route: string): boolean => {
		return location.pathname === route;
	};

	return (
		<div className='fixed z-100 gap-4 p-6 transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out inset-y-0 left-0 w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm custom-scrollbar h-screen overflow-y-auto border-none bg-zinc-50 dark:bg-zinc-900'>
			<Link
				to='/'
				className='flex items-center gap-1'>
				<img
					src={logo}
					alt='PlusDev.NET'
					className='w-9'
				/>

				<h3 className='h2-bold ml-1 font-spaceGrotesk text-slate-900 dark:text-slate-100'>
					PlusDev<span className='text-red-500'>.NET</span>
				</h3>
			</Link>

			<div>
				<section className='flex h-full flex-col gap-6 pt-16'>
					<Link
						to='/'
						className={`flex items-center justify-start gap-4  p-4  rounded-lg  ${isActive('/') ? 'primary-gradient base-bold text-zinc-50' : 'base-medium text-zinc-900 dark:text-zinc-100 hover:bg-slate-200 dark:hover:bg-slate-800'}`}>
						<LucideHome className='h-5 w-5' />
						Home
					</Link>

					<Link
						to='/posts'
						className={`flex items-center justify-start gap-4  p-4  rounded-lg  ${isActive('/posts') ? 'primary-gradient base-bold text-zinc-50' : 'base-medium text-zinc-900 dark:text-zinc-100 hover:bg-slate-200 dark:hover:bg-slate-800'}`}>
						<LucideNewspaper className='h-5 w-5' />
						Posts
					</Link>

					<Link
						to='/questions'
						className={`flex items-center justify-start gap-4  p-4  rounded-lg  ${isActive('/questions') ? 'primary-gradient base-bold text-zinc-50' : 'base-medium text-zinc-900 dark:text-zinc-100 hover:bg-slate-200 dark:hover:bg-slate-800'}`}>
						<LucideFileQuestion className='h-5 w-5' />
						Questions
					</Link>

					<Link
						to='/community'
						className={`flex items-center justify-start gap-4  p-4  rounded-lg  ${isActive('/community') ? 'primary-gradient base-bold text-zinc-50' : 'base-medium text-zinc-900 dark:text-zinc-100 hover:bg-slate-200 dark:hover:bg-slate-800'}`}>
						<LucideUsers2 className='h-5 w-5' />
						Community
					</Link>

					<Link
						to='/tags'
						className={`flex items-center justify-start gap-4  p-4  rounded-lg  ${isActive('/tags') ? 'primary-gradient base-bold text-zinc-50' : 'base-medium text-zinc-900 dark:text-zinc-100 hover:bg-slate-200 dark:hover:bg-slate-800'}`}>
						<LucideTags className='h-5 w-5' />
						Tags
					</Link>
				</section>

				<div className='mt-5 flex flex-col gap-3'>
					<Link to='/sign-in'>
						<Button className='inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 body-semibold small-medium btn-secondary min-h-[41px] w-full rounded-lg px-4 py-3 text-zinc-50 outline-none'>Sign In</Button>
					</Link>

					<Link to='/sign-up'>
						<Button className='inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 body-semibold small-medium btn-tertiary min-h-[41px] w-full rounded-lg px-4 py-3 text-zinc-50 outline-none'>Sign Up</Button>
					</Link>
				</div>
			</div>
		</div>
	);
};
export default BurgerMenu;
