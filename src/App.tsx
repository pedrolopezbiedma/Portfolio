import Header from './components/Header/Header';
import HeroSection from './components/Hero/HeroSection';
import BenefitsSection from './components/Benefits/BenefitsSection';
import CollaborationSection from './components/Collaboration/CollaborationSection';
import ServicesSection from './components/Services/ServicesSection';

const App = () => {
	return (
		<>
			<div className='pt-[4.75rem] lg:pt-[5.25] overflow-hidden'>
				<Header />
				<HeroSection />
				<BenefitsSection />
				<CollaborationSection />
				<ServicesSection />
			</div>
		</>
	);
};

export default App;

// TODO: Fix the background images squares
// TODO: Sort includes
// TODO: Align navigation with sections & wording
