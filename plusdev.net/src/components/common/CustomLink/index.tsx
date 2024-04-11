import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

type CustomLinkProps = {
	url: string;
	className?: string;
	children: ReactNode;
};

const CustomLink = (props: CustomLinkProps) => {
	return (
		<Link
			to={props.url}
			className={`custom-link ${props.className || ''}`}>
			{props.children}
		</Link>
	);
};

export default CustomLink;
