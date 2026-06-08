export type NavItem = {
	label: string
	href: string
}

export type HeroConfig = {
	title: string
	subtitle: string
	cta: string
}

export type SiteConfig = {
	name: string
	domain: string
	logo: string
	nav: NavItem[]
	hero: HeroConfig
}
