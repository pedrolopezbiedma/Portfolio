import ButtonGradient from './assets/svg/ButtonGradient';
import Header from './components/Header/Header';
import HeroSection from './components/Hero/HeroSection';

const App = () => {
	return (
		<>
			<div className='pt-[4.75rem] lg:pt-[5.25] overflow-hidden'>
				<Header />
				<HeroSection />
			</div>
			<ButtonGradient />
		</>
	);
};

export default App;
