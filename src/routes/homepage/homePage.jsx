import { useState } from 'react'
import './homePage.scss'
import Hero from '../../components/hero/Hero.jsx'
import Card from '../../components/card/Card.jsx'
import BiddingProcess from '../../components/biddingProcess/BiddingProcess.jsx'
import WhyUs from '../../components/whyUs/WhyUs.jsx'

const demoCars = [
	{
		id: 1,
		title: 'Ford Maverick XL 2023',
		image: 'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?q=80&w=1600&auto=format&fit=crop',
		auctionDate: '11-20-2025 10:00 am',
		currentPrice: 300,
	},
	{
		id: 2,
		title: 'Mercedes-Benz GLB-Class 250 2022',
		image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=1600&auto=format&fit=crop',
		auctionDate: '11-21-2025 10:00 am',
		currentPrice: 0,
	},
	{
		id: 3,
		title: 'BMW 8 Series 2020',
		image: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?q=80&w=1600&auto=format&fit=crop',
		auctionDate: '11-22-2025 10:00 am',
		currentPrice: 13700,
	},
	{
		id: 4,
		title: 'Jeep Compass Latitude 2020',
		image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1600&auto=format&fit=crop',
		auctionDate: '11-23-2025 10:00 am',
		currentPrice: 0,
	},
	{
		id: 5,
		title: 'Toyota Corolla SE 2021',
		image: 'https://images.unsplash.com/photo-1542282088-fe8426682b8f?q=80&w=1600&auto=format&fit=crop',
		auctionDate: '11-24-2025 10:00 am',
		currentPrice: 5200,
	},
	{
		id: 6,
		title: 'Honda Civic Sport Touring 2020',
		image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=1600&auto=format&fit=crop',
		auctionDate: '11-25-2025 10:00 am',
		currentPrice: 4500,
	},
	{
		id: 7,
		title: 'Ford F-150 Lariat SuperCrew 2019',
		image: 'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?q=80&w=1600&auto=format&fit=crop',
		auctionDate: '11-26-2025 10:00 am',
		currentPrice: 8900,
	},
	{
		id: 8,
		title: 'Audi A4 2.0T Quattro Premium 2018',
		image: 'https://us-west-2.graphassets.com/ALxjZdtQIQOudrzeO6hSgz/hKdz71ojTKWve3ivf7bR',
		auctionDate: '11-27-2025 10:00 am',
		currentPrice: 10100,
	},
	{
		id: 9,
		title: 'Tesla Model 3 Long Range AWD 2021',
		image: 'https://hips.hearstapps.com/hmg-prod/images/2025-tesla-model-s-1-672d42e172407.jpg?crop=0.465xw:0.466xh;0.285xw,0.361xh&resize=2048:*',
		auctionDate: '11-28-2025 10:00 am',
		currentPrice: 23000,
	},
	{
		id: 10,
		title: 'Nissan Altima 2.5 SV 2019',
		image: 'https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?q=80&w=1600&auto=format&fit=crop',
		auctionDate: '11-29-2025 10:00 am',
		currentPrice: 3100,
	},
	{
		id: 11,
		title: 'Chevrolet Camaro SS Coupe 2017',
		image: 'https://upload.wikimedia.org/wikipedia/commons/5/5e/2019_Chevrolet_Camaro_2SS_6.2L_front_3.16.19.jpg',
		auctionDate: '11-30-2025 10:00 am',
		currentPrice: 7500,
	},
	{
		id: 12,
		title: 'Volkswagen Golf GTI Autobahn 2018',
		image: 'https://bordalo.observador.pt/v2/q:60/rs:fill:980/c:770:433:nowe:0:0/plain/https://s3.observador.pt/wp-content/uploads/2020/10/14222024/2020-golf-gti-1_770x433_acf_cropped.jpg',
		auctionDate: '12-01-2025 10:00 am',
		currentPrice: 5600,
	},
	{
		id: 13,
		title: 'Land Rover Range Rover Sport HSE Dynamic 2019',
		image: 'https://www.topgear.com/sites/default/files/2023/12/1%20Land%20Rover%20Range%20Rover%20review.jpeg',
		auctionDate: '12-02-2025 10:00 am',
		currentPrice: 18000,
	},
]

export default function HomePage() {
	const [showAll, setShowAll] = useState(false)
	const displayedCars = showAll ? demoCars : demoCars.slice(0, 8)

	return (
		<div className="home">
			<Hero />

			<section id="auctions" className="section auctions">
				<div className="container">
					<h2>Featured Auctions</h2>
					<div className="grid">
						{displayedCars.map(car => <Card key={car.id} car={car} />)}
					</div>
					{demoCars.length > 8 && (
						<div className="view-more-wrapper">
							<button className="view-more-btn" onClick={() => setShowAll(prev => !prev)}>
								{showAll ? 'View Less' : 'Load More'}
							</button>
						</div>
					)}
				</div>
			</section>

			<BiddingProcess />

			<WhyUs />

			<section id="contact" className="section contact">
				<div className="container">
					<h2>Contact Us</h2>
					<form className="card form">
						<input placeholder="Your name" required />
						<input type="email" placeholder="Email address" required />
						<textarea placeholder="Message" rows="5" />
						<button className="btn" type="submit">Send Message</button>
					</form>
				</div>
			</section>
		</div>
	)
}


