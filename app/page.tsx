export default function Home() {
	return (
		<>
			<section className='block w-full md:flex md:h-screen justify-center items-center'>
				<section className='w-full md:w-2/3 text-center md:text-left h-full'>
					<h1 className='text-5xl md:text-8xl font-bold'>
						Welcome to TealBit Tech Solutions
					</h1>
					<p className='text-sm md:text-base font-semibold'>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus
						dolorem quos ratione minima earum voluptatum
					</p>
				</section>
				<section className='w-full md:w-1/3 bg-blue-700 font-bold text-lg h-80 md:h-full'></section>
			</section>
		</>
	);
}
