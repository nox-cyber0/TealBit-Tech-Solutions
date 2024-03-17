import { Button } from '@nextui-org/button';
import { Link } from '@nextui-org/link';

const Hero = () => {
	return (
		<section className='w-full block md:flex md:h-screen'>
			<div className='w-full md:w-2/3 h-full block md:flex flex-center'>
				<div className='px-8 md:px-12'>
					<h1
						className='title-md text-center md:text-left'
						color='foreground'
					>
						Welcome to
						<p className='title-lg text-primary'>TealBit Inc.</p>
					</h1>
					<p className='subtitle-sm py-4'>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum
						adipisci dolorem praesentium molestiae fuga corporis nemo
					</p>
					<div className='flex flex-wrap sm:flex-nowrap w-full flex-center md:justify-start font-semibold gap-1 sm:gap-4 my-4'>
						<Button
							as={Link}
							className='max-sm:w-full'
							color='primary'
							variant='solid'
							href='/services'
						>
							Explore Services
						</Button>
						<Button
							as={Link}
							className='max-sm:w-full'
							color='primary'
							variant='flat'
							href='/contact'
						>
							Contact Us
						</Button>
					</div>
				</div>
			</div>
			<div className='w-full md:w-1/3 h-80 md:h-full block md:flex bg-primary'></div>
		</section>
	);
};

export default Hero;
