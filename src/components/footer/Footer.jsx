import './footer.scss'

const links = [
	{ label: 'Homepage', href: '#' },
	{ label: 'Auctions', href: '#auctions' },
	{ label: 'Favourites', href: '#favourites' },
	{ label: 'Informations', href: '#info' },
	{ label: 'About Us', href: '#about' },
	{ label: 'Contact', href: '#contact' },
	{ label: 'Sign in', href: '#signin' },
	{ label: 'Register Now', href: '#register' },
]

export default function Footer() {
	const year = new Date().getFullYear()
	return (
		<footer className="footer">
			<div className="container footer-content">
				<div className="footer-brand">
					<div className="brand-name">ABidAbove</div>
					<p className="brand-tagline">Bid smarter. Drive happier.</p>
				</div>
				<nav className="footer-nav" aria-label="Footer">
					{links.map(link => (
						<a key={link.label} href={link.href}>{link.label}</a>
					))}
				</nav>
				<div className="footer-contact" aria-label="Contact information">
					<a href="mailto:info@abidabove.com">info@abidabove.com</a>
					<a href="tel:6784568732">678-456-8732</a>
					<address>
						110 Samaritan Drive<br />
						Cumming, GA 30040
					</address>
				</div>
			</div>
			<div className="footer-bottom">
				<p>© {year} Abidabove. All rights reserved.</p>
			</div>
		</footer>
	)
}

