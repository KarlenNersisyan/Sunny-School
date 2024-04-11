import { Computer, LogIn, Moon, Newspaper, PlusSquare, ShieldQuestion, SquareUser, Sun, User } from 'lucide-react';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '@/components/ui/dropdown-menu';

//* Hooks
import useTheme from '@/hooks/useTheme';

//* Components
import CustomLink from '../CustomLink';
import Image from '../Image';
import CustomSearch from '../CustomSearch';

const AppHeader = () => {
	//! State
	const { mode, setMode } = useTheme();

	return (
		<nav className='fixed z-50 flex w-full items-center justify-between gap-3 bg-zinc-50 p-5 shadow-light-300 sm:px-12 dark:bg-zinc-900 dark:shadow-dark-200'>
			<CustomLink
				url={'/'}
				className='flex items-center gap-1'>
				<Image
					src={'/logo.webp'}
					alt={'PlusDev.Net'}
				/>

				<h3 className='h3-bold ml-1 hidden font-spaceGrotesk text-slate-900 sm:block dark:text-slate-100'>
					PlusDev<span className='text-red-500'>.NET</span>
				</h3>
			</CustomLink>

			<CustomSearch />

			<div className={'flex items-center justify-between gap-5'}>
				<DropdownMenu>
					<DropdownMenuTrigger className='p-1'>
						<PlusSquare className='h-6 w-6 text-red-500' />
					</DropdownMenuTrigger>

					<DropdownMenuContent>
						<DropdownMenuItem>
							<CustomLink
								url={'/create-post'}
								className='flex gap-3 rounded-sm p-4 hover:text-red-500 dark:text-zinc-100 dark:hover:text-red-500'>
								<Newspaper />
								Create a Post
							</CustomLink>
						</DropdownMenuItem>

						<DropdownMenuItem>
							<CustomLink
								url={'/ask-question'}
								className='flex gap-3 rounded-sm p-4 hover:text-red-500 dark:text-zinc-100 dark:hover:text-red-500'>
								<ShieldQuestion />
								Ask a Question
							</CustomLink>
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>

				<DropdownMenu>
					<DropdownMenuTrigger className='p-1'>{mode === 'light' ? <Sun className='h-6 w-6 text-red-500' /> : <Moon className='h-6 w-6 text-red-500' />}</DropdownMenuTrigger>

					<DropdownMenuContent>
						<DropdownMenuItem
							onClick={() => setMode('light')}
							className='relative cursor-default select-none rounded-sm text-sm outline-none focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 flex items-center gap-4 px-2.5 py-2 hover:cursor-pointer focus:bg-zinc-100 dark:focus:bg-zinc-600'>
							<Sun className='h-6 w-6 dark:text-zinc-300' />

							<span className={`body-semibold ${mode === 'light' ? 'text-red-500' : 'text-zinc-900'} dark:text-zinc-100`}>Light</span>
						</DropdownMenuItem>

						<DropdownMenuItem onClick={() => setMode('dark')}>
							<DropdownMenuItem className='relative cursor-default select-none rounded-sm text-sm outline-none focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 flex items-center gap-4 px-2.5 py-2 hover:cursor-pointer focus:bg-zinc-100 dark:focus:bg-zinc-600'>
								<Moon className='h-6 w-6 dark:text-zinc-300' />

								<span className={`body-semibold text-zinc-900 ${mode === 'dark' ? 'dark:text-red-500' : 'dark:text-zinc-100'}`}>Dark</span>
							</DropdownMenuItem>
						</DropdownMenuItem>

						<DropdownMenuItem onClick={() => setMode('system')}>
							<DropdownMenuItem className='relative cursor-default select-none rounded-sm text-sm outline-none focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 flex items-center gap-4 px-2.5 py-2 hover:cursor-pointer focus:bg-zinc-100 dark:focus:bg-zinc-600'>
								<Computer className='h-6 w-6 dark:text-zinc-300' />

								<span className={`body-semibold ${mode === 'system' ? 'text-red-500' : 'text-zinc-900'} ${mode === 'system' ? 'dark:text-red-500' : 'dark:text-zinc-100'}`}>System</span>
							</DropdownMenuItem>
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>

				<DropdownMenu>
					<DropdownMenuTrigger className='p-1'>
						<User className='h-6 w-6 text-red-500' />
					</DropdownMenuTrigger>

					<DropdownMenuContent>
						<DropdownMenuItem>
							<CustomLink
								url={'/sign-in'}
								className='flex gap-3 rounded-sm p-4 hover:text-red-500 dark:text-zinc-100 dark:hover:text-red-500'>
								<LogIn />
								Log In
							</CustomLink>
						</DropdownMenuItem>

						<DropdownMenuItem>
							<CustomLink
								url={'/sign-up'}
								className='flex gap-3 rounded-sm p-4 hover:text-red-500 dark:text-zinc-100 dark:hover:text-red-500'>
								<SquareUser />
								Sign Up
							</CustomLink>
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</div>
		</nav>
	);
};

export default AppHeader;
