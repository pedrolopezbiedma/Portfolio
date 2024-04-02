import { socials } from '../../content';
import Section from '../shared/Section';

const Footer = () => {
	return (
		<Section
			id='footer'
			className='!px-0 !py-10'
			crosses={true}
			crossesOffset=''
			customPaddings={false}>
			<div className='container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col'>
				<p className='caption text-n-4 lg:block'> © {new Date().getFullYear()}. All rights reserved</p>
				<ul className='flex gap-5 flex-wrap'>
					{socials.map((social) => (
						<a
							key={social.id}
							className='flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6'
							href={social.url}
							target='_blank'
							rel='noreferrer'>
							<img
								src={social.iconUrl}
								width={16}
								height={16}
								alt='social'
							/>
						</a>
					))}
				</ul>
			</div>
		</Section>
	);
};

export default Footer;
