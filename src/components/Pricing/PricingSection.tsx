import { smallSphere, stars } from '../../assets';
import Heading from '../shared/Heading';
import Section from '../shared/Section';
import { LeftLine, RightLine } from './Pricing';
import PricingList from './PricingList';

const PricingSection = () => {
	return (
		<Section
			id='pricing'
			crosses={false}
			crossesOffset=''
			customPaddings={false}
			className='overflow-hidden'>
			<div className='container relative z-2'>
				<div className='hidden relative justify-center mb-[6.5rem] lg:flex'>
					<img
						className='relateive z-1'
						src={smallSphere}
						width={255}
						height={255}
						alt='small sphere'
					/>
					<div className='absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none'>
						<img
							className='w-full'
							src={stars}
							width={950}
							height={400}
							alt='stars'
						/>
					</div>
				</div>

				<Heading
					tag='Get started with Brainwave'
					title='Pay once, use forever'
				/>

				<div className='relative'>
					<LeftLine />
					<PricingList />
					<RightLine />
				</div>

				<div className='flex justify-center mt-10'>
					<a
						className='text-xs font-code font-bold tracking-wider uppercase border-b'
						href='/pricing'>
						See the full details
					</a>
				</div>
			</div>
		</Section>
	);
};

export default PricingSection;
