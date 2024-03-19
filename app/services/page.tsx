import { Button } from '@nextui-org/button';
import { Link } from '@nextui-org/link';
import { Card, CardHeader, CardBody, CardFooter } from '@nextui-org/card';

import { serviceConfig } from '@/config/services';

const Services = () => {
	return (
		<div className='px-4 sm:px-12 md:px-20'>
			<h1 className='header-title'>Our Services</h1>
			<p>
				We offer a range of services to help our business grow and succeed
				online. Whether you need eye-catching ggraphics to fascinate your
				customers or strategies to operate online, we&apos;ve got you covered
			</p>

			{serviceConfig.services.map((service) => (
				<section key={service.route}>
					<Card className='my-4 p-2 bg-secondary-background'>
						<CardHeader className='card-header'>{service.title}</CardHeader>
						<CardBody className='card-body'>{service.description}</CardBody>
						<CardFooter>
							<Button
								as={Link}
								color='primary'
								variant='ghost'
								href={service.route}
							>
								Learn More
							</Button>
						</CardFooter>
					</Card>
				</section>
			))}
		</div>
	);
};

export default Services;
