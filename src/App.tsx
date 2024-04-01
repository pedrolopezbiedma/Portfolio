import BenefitsSection from './components/Benefits/BenefitsSection';
import Header from './components/Header/Header';
import HeroSection from './components/Hero/HeroSection';

const App = () => {
	return (
		<>
			<div className='pt-[4.75rem] lg:pt-[5.25] overflow-hidden'>
				<Header />
				<HeroSection />
				<BenefitsSection />
			</div>
		</>
	);
};

export default App;
