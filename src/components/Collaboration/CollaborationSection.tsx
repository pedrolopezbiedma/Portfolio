import { check } from '../../assets';
import { collabContent } from '../../content';
import Button from '../shared/Button';
import Section from '../shared/Section';

const CollaborationSection = () => {
	return (
		<Section
			id='collaboration'
			className=''
			crosses
			crossesOffset=''
			customPaddings={false}>
			<div className='container lg:flex'>
				<div className='max-w-[25rem]'>
					<h2 className='h2 mb-4 md:mb-8'>AI Chat App for seamless collaboration</h2>
					<ul className='max-w-[22rem] mb-10 md:mb-14'>
						{collabContent.map((collaboration) => (
							<li
								className='mb-3 py-3'
								key={collaboration.id}>
								<div className='flex items-center'>
									<img
										src={check}
										width={24}
										height={24}
										alt='check'
									/>
									<h6 className='body-2 ml-5'>{collaboration.title}</h6>
								</div>
								{collaboration.text && <p className='body-2 mt-3 text-n-4'>{collaboration.text}</p>}
							</li>
						))}
					</ul>
					<Button>Try it now</Button>
				</div>
			</div>
		</Section>
	);
};

export default CollaborationSection;
