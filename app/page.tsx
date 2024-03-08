import { Button } from '@nextui-org/button';
import { Link } from '@nextui-org/link';

import { title, subtitle } from '@/components/primitives';
import '@/styles/globals.css';

export default function Home() {
	return (
		<>
			<section className='block md:flex w-full md:h-screen'>
				<section className='w-full md:w-2/3 md:flex md:flex-col md:columns-1 md:flex-center text-center md:text-left h-full p-6 md:pl-24 md:pr-20'>
					<h1 className='text-3xl font-semibold md:text-5xl md:font-bold'>
						Welcome to
						<span
							className={`title() block text-4xl md:text-6xl`}
							color='primary'
						>
							TealBit Tech Solutions
						</span>
					</h1>
					<p className='w-full block text-sm md:text-xl font-normal py-3'>
						Providing innovative solutions for your tech needs. Let us help you
						succeed in the digital world.
					</p>
					<div className='grid grid-cols-1 sm:grid-cols-2 md:flex md:justify-start gap-2 sm:gap-4'>
						<Button
							className='max-sm:w-full mb-3 col-span-1'
							color='primary'
							as={Link}
							href='/services'
							variant='flat'
							size='md'
						>
							Explore Services
						</Button>
						<Button
							className='max-sm:w-full col-span-1'
							color='primary'
							as={Link}
							href='/contact'
							variant='ghost'
							size='md'
						>
							Contact Us
						</Button>
					</div>
				</section>
				<section className='w-full md:w-1/3 bg-primary font-bold text-lg h-80 md:h-full'></section>
			</section>

			<section className='w-full block md:flex px-6 py-4 md:px-20 md:py-12'>
				<h1 className='text-lg font-semibold block w-full mb-4'>
					Our Services
				</h1>
				<div className='grid grid-cols-1 md:grid-cols-3'>
					<section className='py-3 md:px-6'>
						<h3 className='text-lg px-3 font-semibold'>Web Dev</h3>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus
						dolorem quos ratione minima earum voluptatum
					</section>
					<section className='py-3 md:px-6'>
						<h3 className='text-lg px-3 font-semibold'>Web Dev</h3>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus
						dolorem quos ratione minima earum voluptatum
					</section>
					<section className='py-3 md:px-6'>
						<h3 className='text-lg px-3 font-semibold'>Web Dev</h3>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus
						dolorem quos ratione minima earum voluptatum
					</section>
				</div>
			</section>
		</>
	);
}
