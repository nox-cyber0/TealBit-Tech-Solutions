import {
	Navbar as NextNav,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	NavbarMenuToggle,
	NavbarMenu,
	NavbarMenuItem,
} from '@nextui-org/navbar';
import { Link } from '@nextui-org/link';
import { Button } from '@nextui-org/button';
import { Divider } from '@nextui-org/divider';
import { Logo } from './icons';

import { siteConfig } from '@/config/site';
export default function Navbar() {
	return (
		<NextNav
			shouldHideOnScroll
		>
			<NavbarContent>
				<NavbarBrand>
					<Link href='/'>
						<Logo />
						<p className='font-bold text-inherit font-mono'>TealBit</p>
					</Link>
				</NavbarBrand>
			</NavbarContent>

			<NavbarContent
				className='hidden md:flex gap-4'
				justify='center'
			>
				{siteConfig.navItems.map((item) => (
					<NavbarItem key={item.href}>
						<Link
							href={item.href}
							className='data-[active=true]:font-bold'
						>
							{item.label}
						</Link>
					</NavbarItem>
				))}
			</NavbarContent>
			<NavbarContent justify='end'>
				<NavbarItem className='hidden md:flex'>
					<Button
						as={Link}
						color='primary'
						href='/contact'
						variant='flat'
					>
						Get A Quote
					</Button>
				</NavbarItem>
				<NavbarItem>
					<NavbarMenuToggle className='md:hidden p-4' />
				</NavbarItem>
			</NavbarContent>
			<NavbarMenu>
				{siteConfig.navMenuItems.map((item) => (
					<NavbarMenuItem key={item.href}>
						<Link
							color='primary'
							className='w-full'
							href={item.href}
							size='md'
						>
							{item.label}
						</Link>
						<Divider className='my-4' />
					</NavbarMenuItem>
				))}
				<Button
					as={Link}
					color='primary'
					href='/contact'
					variant='flat'
				>
					Get A Quote
				</Button>
			</NavbarMenu>
		</NextNav>
	);
}
