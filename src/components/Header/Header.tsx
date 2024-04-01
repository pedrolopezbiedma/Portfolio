import ButtonGradient from '../../assets/svg/ButtonGradient';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { brainwave } from '../../assets/index';
import { navigation } from '../../content/index';
import Button from '../shared/Button';
import MenuSvg from '../../assets/svg/MenuSvg';
import { HamburgerMenu } from './HeaderMobile';
import { disablePageScroll, enablePageScroll } from 'scroll-lock';

const Header = () => {
	const { hash } = useLocation();
	const [openMobileNavigation, setOpenMobileNavigation] = useState(false);

	const toggleNavigation = () => {
		setOpenMobileNavigation(!openMobileNavigation);
		openMobileNavigation ? disablePageScroll() : enablePageScroll();
	};

	return (
		<div
			className={`fixed top-0 left-0 w-full z-50 
            border-b border-n-6 
            lg:bg-n-8/90 lg:backdrop-blur-sm ${openMobileNavigation ? 'bg-n-8' : 'bg-n-8/90 backdrop-blur-sm'}`}>
			<div
				className='flex items-center px-5
                lg:px-7.5
                xl:px-10
                max-lg:py-4'>
				<a
					className='block w-[12rem]
                    xl:mr-8'
					href='#hero'>
					<img
						src={brainwave}
						width={190}
						height={40}
						alt='Header img'
					/>
				</a>
				<nav
					className={`${openMobileNavigation ? 'flex' : 'hidden'} fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8
                    lg:static lg:flex lg:mx-auto lg:bg-transparent`}>
					<div
						className='relative z-2 flex flex-col items-center justify-center m-auto
                        lg:flex-row'>
						{navigation.map((item) => (
							<a
								className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 px-6 py-6
                                    md:py-8
                                    lg:-mr-0.25 lg:text-xs lg:font-semibold lg:leading-5 lg:hover:text-n-1
                                    xl:px-12
                                    ${item.onlyMobile ? 'lg:hidden' : ''}
                                    ${item.url === hash ? 'z-2 lg:text-n-1' : 'lg:text-n-1/50'} `}
								key={item.id}
								href={item.url}
								onClick={() => setOpenMobileNavigation(false)}>
								{item.title}
							</a>
						))}
					</div>
					<HamburgerMenu />
				</nav>
				<a
					href='#signup'
					className='button hidden mr-8 text-n-1/50 transition-colors hover:text-n-1
                    lg:block'>
					New Account
				</a>
				<Button
					className='hidden lg:flex'
					href='#login'>
					Sign In
				</Button>
				<Button
					className='ml-auto lg:hidden'
					onClick={toggleNavigation}>
					<MenuSvg openNavigation={openMobileNavigation} />
				</Button>
			</div>
			<ButtonGradient />
		</div>
	);
};

export default Header;
