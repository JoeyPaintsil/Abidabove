import './hero.scss'
import HeroSearch from '../heroSearch/HeroSearch.jsx'

export default function Hero() {
	return (
		<section className="hero">
			<div className="overlay">
				<div className="container hero-inner">
					<p className="hero-sub">Find, bid, and own the car you've always wanted</p>
					<h1 className="hero-title">Get Your Dream Car Today</h1>
					<HeroSearch />
				</div>
			</div>
		</section>
	)
}

