import { Button } from '@nextui-org/button';
import { Link } from '@nextui-org/link';
import { Card, CardHeader, CardBody } from '@nextui-org/card';
import { Divider } from '@nextui-org/divider';
import { serviceConfig } from '@/config/services';

const Services = () => {
	return (
		<section className='w-full block p-6 md:px-20 md:py-12'>
			<h1 className='block w-full subtitle mb-3 text-primary'>What We Do</h1>
			<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
				<Card className='p-3 md:hidden'>
					{serviceConfig.services.map((service) => (
						<section key={service.route}>
							<CardHeader className='card-header'>{service.title}</CardHeader>
							<CardBody className='card-body'>
								<p>{service.description}</p>
								<Button
									as={Link}
									className='card-button'
									color='primary'
									variant='ghost'
									href={service.route}
								>
									Learn More
								</Button>
							</CardBody>
							<Divider className='my-2' />
						</section>
					))}
				</Card>

				{serviceConfig.services.map((service) => (
					<Card
						key={service.route}
						className='h-max max-md:hidden p-6'
					>
						<CardHeader className='card-header'>{service.title}</CardHeader>
						<CardBody className='card-body'>
							<p>{service.description}</p>
							<Button
								as={Link}
								className='card-button'
								color='primary'
								variant='ghost'
								href={service.route}
							>
								Learn More
							</Button>
						</CardBody>
					</Card>
				))}
			</div>
		</section>
	);
};

export default Services;
