import { Link } from '@nextui-org/link';

import { siteConfig } from '@/config/site';

const Footer = () => {
	return (
		<footer className='px-4 sm:px-12 md:px-24'>
			<ul className='w-full flex flex-wrap md:flex-nowrap justify-between columns-1 sm:columns-2 md:columns-auto'>
				{siteConfig.navItems.map((items) => (
					<li key={items.href}>
						<Link
							color='primary'
							href={items.href}
						>
							{items.label}
						</Link>
					</li>
				))}
			</ul>
			<p className='block w-full text-foreground text-center text-sm font-normal mt-6'>
				&copy; 2024 TealBit Inc. All Rights Reserved.
			</p>
		</footer>
	);
};

export default Footer;
