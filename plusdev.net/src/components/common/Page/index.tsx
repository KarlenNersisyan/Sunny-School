import React, { ReactNode } from 'react';

interface PageProps {
	className?: string;
	children: ReactNode;
}

const Page: React.FC<PageProps> = ({ className, children }) => {
	return <main className={className || ''}>{children}</main>;
};

export default Page;
