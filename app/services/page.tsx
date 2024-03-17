import { Button } from '@nextui-org/button';
import { Card, CardHeader, CardBody, CardFooter } from '@nextui-org/card';

const Services = () => {
	return (
		<div className='px-20'>
			<h1 className='title-md'>Our Services</h1>

			<section>
				<Card>
					<CardHeader>Website Development</CardHeader>
					<CardBody>
						We provide various web development services. Lorem ipsum dolor sit
						amet consectetur adipisicing elit. Id voluptates assumenda impedit?
						Quam sint, incidunt laboriosam, ipsam sapiente quas facere aut
						inventore vel voluptatem repudiandae maiores dicta? Quis,
						consequatur ipsam?
					</CardBody>
					<CardFooter>
						<Button
							variant='solid'
							color='primary'
						>
							Learn More
						</Button>
					</CardFooter>
				</Card>
			</section>

			<section>
				<Card>
					<CardHeader>Website Development</CardHeader>
					<CardBody>
						We provide various web development services. Lorem ipsum dolor sit
						amet consectetur adipisicing elit. Id voluptates assumenda impedit?
						Quam sint, incidunt laboriosam, ipsam sapiente quas facere aut
						inventore vel voluptatem repudiandae maiores dicta? Quis,
						consequatur ipsam?
					</CardBody>
				</Card>
			</section>

			<section>
				<Card>
					<CardHeader>Website Development</CardHeader>
					<CardBody>
						We provide various web development services. Lorem ipsum dolor sit
						amet consectetur adipisicing elit. Id voluptates assumenda impedit?
						Quam sint, incidunt laboriosam, ipsam sapiente quas facere aut
						inventore vel voluptatem repudiandae maiores dicta? Quis,
						consequatur ipsam?
					</CardBody>
				</Card>
			</section>
		</div>
	);
};

export default Services;
