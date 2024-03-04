export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: 'TealBit Tech Solutions',
	description: '',
	navItems: [
		{
			label: 'Home',
			href: '/',
		},
		{
			label: 'About Us',
			href: '/about',
		},
		{
			label: 'Services',
			href: '/services',
		},
		{
			label: 'Portfolio',
			href: '/portfolio',
		},
		{
			label: 'Contact Us',
			href: '/contact',
		},
	],
	navMenuItems: [
		{
			label: 'Home',
			href: '/',
			index: 0,
		},
		{
			label: 'About Us',
			href: '/about',
			index: 1,
		},
		{
			label: 'Services',
			href: '/services',
			index: 2,
		},
		{
			label: 'Portfolio',
			href: '/portfolio',
			index: 3,
		},
		{
			label: 'Contact Us',
			href: '/contact',
			index: 4,
		},
	],
};
