import ButtonSvg from '../../assets/svg/ButtonSvg';

interface ButtonProps {
	className: string;
	href?: string;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	children?: any;
	px?: string;
	py?: string;
	white?: boolean;
	onClick?: () => void;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Button = ({ className, href, children, px, white, onClick }: ButtonProps) => {
	const classes = `button relative inline-flex items-center justify-center h-11 transition-colors hover:text-color-1
		${px || 'px-7'}
		${white ? 'text-n-8' : 'text-n-1'}
		${className || ''}`;

	const spanClasses = 'relative z-10';

	return (
		<>
			{href && (
				<a
					href={href}
					className={classes}>
					<span className={spanClasses}> {children}</span>
					{ButtonSvg(white)}
				</a>
			)}
			{!href && (
				<button
					onClick={onClick}
					className={classes}>
					<span className={spanClasses}> {children}</span>
					{ButtonSvg(white)}
				</button>
			)}
		</>
	);
};

export default Button;
