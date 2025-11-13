import { useState } from 'react'
import './navbar.scss'

export default function Navbar() {
	const [open, setOpen] = useState(false)
	return (
		<header className={`navbar ${open ? 'is-open' : ''}`}>
			<div className="container nav-inner">
				<div className="brand">ABidAbove</div>
				<button className="menu-btn" aria-label="Open menu" onClick={() => setOpen(v => !v)}>
					<span />
					<span />
					<span />
				</button>
				<nav className="links">
					<a href="#">Homepage</a>
					<a href="#auctions">Auctions</a>
					<a href="#favourites">Favourites</a>
					<a href="#info">Informations</a>
					<a href="#about">About Us</a>
					<a href="#contact">Contact</a>
					<a href="#signin">Sign in</a>
					<a href="#register" className="btn submit-btn">Register Now</a>
				</nav>
			</div>
			<nav className={`mobile-menu ${open ? 'is-open' : ''}`}>
				<a href="#" onClick={() => setOpen(false)}>Homepage</a>
				<a href="#auctions" onClick={() => setOpen(false)}>Auctions</a>
				<a href="#favourites" onClick={() => setOpen(false)}>Favourites</a>
				<a href="#info" onClick={() => setOpen(false)}>Informations</a>
				<a href="#about" onClick={() => setOpen(false)}>About Us</a>
				<a href="#contact" onClick={() => setOpen(false)}>Contact</a>
				<a href="#signin" onClick={() => setOpen(false)}>Sign in</a>
				<a href="#register" className="btn submit-btn" onClick={() => setOpen(false)}>Register Now</a>
			</nav>
		</header>
	)
}


