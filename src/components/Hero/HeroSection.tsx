import Section from '../shared/Section';
import { curve } from '../../assets';
import Button from '../shared/Button';

const HeroSection = () => {
	return (
		<Section
			id='hero'
			className='pt-[12rem] -mt-[5.25]'
			crosses={false}
			crossesOffset='lg:translate-y-[5.25rem]'
			customPaddings>
			<div className='container relative'>
				<div className='relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]'>
					<h1 className='h1 mb-6'>
						Explore the Possibilities of AI Chatting with {''}
						<span className='inline-block relative'>
							Brainwave{' '}
							<img
								src={curve}
								className='absolute top-full left-0 w-full xl:-mt-2'
								width={624}
								height={28}
								alt='Curve'
							/>
						</span>
					</h1>
					<p className='body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8'>
						Unleash the power of AI within Brainwave. Upgrade your productivity with Brainwave, the open AI chat app.
					</p>
					<Button
						className=''
						href='/pricing'
						white>
						Get Started
					</Button>
				</div>
				<div className='relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24'></div>
			</div>
		</Section>
	);
};

export default HeroSection;
