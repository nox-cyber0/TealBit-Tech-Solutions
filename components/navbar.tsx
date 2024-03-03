import {
	Navbar as NextUINavbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	NavbarMenu,
	NavbarMenuToggle,
	NavbarMenuItem,
} from '@nextui-org/navbar';
import { Button } from '@nextui-org/button';
import { Link } from '@nextui-org/link';
import { Logo } from './icons';

import { siteConfig } from '@/config/site';

const Navbar = () => {
	return (
		<NextUINavbar maxWidth='xl'>
			<NavbarContent className='flex justiify-start'>
				<NavbarBrand>
					<Logo />
					<p className='font-bold text-sm font-mono'>TealBit</p>
				</NavbarBrand>
			</NavbarContent>

			<NavbarContent className='hidden md:flex gap-4 justify-center'>
				{siteConfig.navItems.map((item) => (
					<NavbarItem
						key={item.href}
						className='gap-4'
					>
						<Link href={item.href}>{item.label}</Link>
					</NavbarItem>
				))}
			</NavbarContent>

			<NavbarContent>
				<NavbarItem className='hidden md:flex justify-end'>
					<Button
						as={Link}
						color='primary'
						href='/contact'
					>
						Get A Quote
					</Button>
				</NavbarItem>
				<NavbarMenuToggle className='md:hidden' />
			</NavbarContent>
			<NavbarMenu>
				{siteConfig.navMenuItems.map((item) => (
					<NavbarMenuItem key={item.href}>
						<Link
							color='primary'
							className='w-full'
							href={item.href}
							size='lg'
						>
							{item.label}
						</Link>
					</NavbarMenuItem>
				))}
			</NavbarMenu>
		</NextUINavbar>
	);
};

export default Navbar;
