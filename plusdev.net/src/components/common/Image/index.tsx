import React from 'react';

interface PageProps {
	className?: string;
	src: string;
	alt: string;
}

const Image: React.FC<PageProps> = ({ className, src, alt }) => {
	return (
		<div className={`image-wrapper ${className || ''}`}>
			<img
				src={src}
				alt={alt}
			/>
		</div>
	);
};

export default Image;
