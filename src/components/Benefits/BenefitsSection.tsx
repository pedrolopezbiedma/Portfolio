import Section from '../shared/Section';
import Heading from '../shared/Heading';

const BenefitsSection = () => {
	return (
		<Section
			id='benefits'
			className=''
			crosses={false}
			crossesOffset=''
			customPaddings={false}>
			<div className='container relative z-2'>
				<Heading
					className='md:max-w-md lg:max-w-2xl'
					title='Chat Smarter, Not Harder with Brainwave'
				/>
			</div>
			<div></div>
		</Section>
	);
};

export default BenefitsSection;
