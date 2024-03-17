import { Button } from '@nextui-org/button';
import { Link } from '@nextui-org/link';
import Hero from './components/Hero';

export default function Home() {
	return (
		<>
			<Hero />

			<section className='w-full block px-8 py-6 md:px-20 md:py-12'>
				<h1 className='block w-full subtitle-lg mb-4'>What We Do</h1>
				<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
					<section className='col-span-1'>
						<h3 className='subtitle text-secondary'>Website Development</h3>
						<p className='text-primary-500'>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus
							dolorem quos ratione minima earum voluptatum
						</p>
					</section>
					<section className='col-span-1'>
						<h3 className='subtitle text-secondary'>Graphic Design</h3>
						<p className='text-primary-500'>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus
							dolorem quos ratione minima earum voluptatum
						</p>
					</section>
					<section className='col-span-1'>
						<h3 className='subtitle text-secondaryy'>Digital Marketing</h3>
						<p className='text-primary-500'>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus
							dolorem quos ratione minima earum voluptatum
						</p>
					</section>
				</div>
			</section>
		</>
	);
}
