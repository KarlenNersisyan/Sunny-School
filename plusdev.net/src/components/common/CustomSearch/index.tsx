import React from 'react';
import { Search } from 'lucide-react';

interface CustomSearchProps {
	className?: string;
}

const CustomSearch: React.FC<CustomSearchProps> = ({ className }) => {
	return (
		<div className={`relative w-full max-w-[600px] max-lg:ml-4 max-md:hidden ${className || ''}`}>
			<div className='relative flex min-h-[46px] items-center gap-1 rounded-xl bg-slate-200 px-4 dark:bg-slate-800"'>
				<Search className='h-6 w-6 cursor-pointer text-slate-400' />

				<input
					className='flex h-10 w-full rounded-md border border-input px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 paragraph-regular placeholder no-focus border-none bg-slate-200 outline-none placeholder:text-gray-400 dark:bg-slate-800 dark:text-zinc-100 dark:placeholder:text-gray-400'
					placeholder='Search globally'
					type='text'
					value=''
				/>
			</div>
		</div>
	);
};

export default CustomSearch;
