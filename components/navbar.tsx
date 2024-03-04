import { Navbar as NextNav, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
import { Button } from "@nextui-org/button";
import { Logo } from './icons';

import {siteConfig} from '@/config/site'
export default function Navbar() {

  return (
    <NextNav>
      <NavbarContent>
        {/* <NavbarMenuToggle
          className="md:hidden"
        /> */}
        <NavbarBrand>
          <Logo />
          <p className="font-bold text-inherit font-mono">TealBit</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden md:flex gap-4" justify="center">
        {siteConfig.navItems.map((item) => (
					<NavbarItem key={item.href}>
						<Link href={item.href} color='foreground'>{item.label}</Link>
					</NavbarItem>
				))}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className='hidden md:flex'>
          <Button as={Link} color="primary" href="/contact" variant="flat">
            Get A Quote
          </Button>
        </NavbarItem>
				<NavbarItem>
					<NavbarMenuToggle
          	className="md:hidden"
        	/>
				</NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {siteConfig.navMenuItems.map((item) => (
          <NavbarMenuItem key={item.href}>
            <Link
              color="foreground"
              className="w-full"
              href={item.href}
              size="lg"
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </NextNav>
  );
}
