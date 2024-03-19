import { Button } from '@nextui-org/button';
import { Link } from '@nextui-org/link';

const Hero = () => {
	return (
		<section className='w-full block md:flex md:h-screen'>
			<div className='w-full md:w-2/3 h-full block md:flex flex-center'>
				<div className='pt-12 px-6 md:px-12'>
					<h1 className='text-5xl md:text-7xl lg:text-8xl font-bold text-center md:text-left text-secondary-foreground'>
						Welcome to
						<p className='text-6xl md:text-8xl lg:text-9xl font-bold text-center md:text-left text-primary'>
							TealBit Inc.
						</p>
					</h1>
					<p className='text-sm sm:text-base font-normal py-4 text-foreground text-center md:text-left'>
						Providing innovative solutions for your tech needs.
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
