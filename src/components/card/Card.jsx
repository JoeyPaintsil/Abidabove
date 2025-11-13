import './card.scss'

export default function Card({ car }) {
	return (
		<article className="car-card card">
			<img src={car.image} alt={car.title} className="car-image" />
			<div className="content">
				<h3>{car.title}</h3>
				<p className="meta">Auction date: {car.auctionDate}</p>
				<p className="price">Current price <span>${car.currentPrice.toLocaleString()}</span></p>
				<button className="btn">Bid now</button>
			</div>
		</article>
	)
}


