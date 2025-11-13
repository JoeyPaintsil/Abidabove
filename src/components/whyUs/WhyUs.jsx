import './whyUs.scss'

export default function WhyUs() {
	return (
		<section className="section why-us">
			<div className="container">
				<h2 className="why-us-title">Why Choose Abidabove?</h2>
				<div className="why-us-grid">
					<div className="why-us-card">
						<div className="why-us-icon">
							<svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
								<rect x="10" y="15" width="40" height="30" rx="2" stroke="#0ea5e9" strokeWidth="2"/>
								<line x1="15" y1="20" x2="45" y2="20" stroke="#0ea5e9" strokeWidth="2"/>
								<line x1="15" y1="25" x2="35" y2="25" stroke="#0ea5e9" strokeWidth="2"/>
								<line x1="15" y1="30" x2="40" y2="30" stroke="#0ea5e9" strokeWidth="2"/>
								<line x1="20" y1="8" x2="20" y2="12" stroke="#0ea5e9" strokeWidth="2"/>
								<line x1="30" y1="8" x2="30" y2="12" stroke="#0ea5e9" strokeWidth="2"/>
								<circle cx="48" cy="12" r="4" fill="#ec4899"/>
							</svg>
						</div>
						<h3>Easy Bidding Process</h3>
						<p>Our simple bidding system helps you place offers quickly and confidently.</p>
					</div>

					<div className="why-us-card">
						<div className="why-us-icon">
							<svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M30 10L35 20L45 22L37 30L38 40L30 35L22 40L23 30L15 22L25 20L30 10Z" stroke="#0ea5e9" strokeWidth="2" fill="none"/>
								<line x1="30" y1="25" x2="30" y2="30" stroke="#0ea5e9" strokeWidth="2"/>
								<line x1="27" y1="27" x2="33" y2="27" stroke="#0ea5e9" strokeWidth="2"/>
								<line x1="28" y1="8" x2="28" y2="6" stroke="#ec4899" strokeWidth="2"/>
								<line x1="32" y1="8" x2="32" y2="6" stroke="#ec4899" strokeWidth="2"/>
								<line x1="30" y1="6" x2="30" y2="4" stroke="#ec4899" strokeWidth="2"/>
							</svg>
						</div>
						<h3>Verified Car Listings</h3>
						<p>Every car is checked and approved so you can bid with peace of mind.</p>
					</div>

					<div className="why-us-card">
						<div className="why-us-icon">
							<svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M15 20L25 10L35 20L35 25L15 25L15 20Z" stroke="#0ea5e9" strokeWidth="2" fill="none"/>
								<line x1="20" y1="15" x2="30" y2="15" stroke="#0ea5e9" strokeWidth="2"/>
								<line x1="15" y1="30" x2="35" y2="30" stroke="#0ea5e9" strokeWidth="2"/>
				<text x="20" y="38" fill="#0ea5e9" fontSize="14" fontWeight="bold">$</text>
								<line x1="38" y1="22" x2="42" y2="18" stroke="#ec4899" strokeWidth="2"/>
							</svg>
						</div>
						<h3>Clear and Fair Pricing</h3>
						<p>You always see real time prices so you know exactly what you are bidding for.</p>
					</div>

					<div className="why-us-card">
						<div className="why-us-icon">
							<svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M12 35L15 25L20 20H40L45 25L48 35H12Z" stroke="#0ea5e9" strokeWidth="2" fill="none"/>
								<rect x="18" y="28" width="8" height="6" rx="1" stroke="#0ea5e9" strokeWidth="2" fill="none"/>
								<rect x="34" y="28" width="8" height="6" rx="1" stroke="#0ea5e9" strokeWidth="2" fill="none"/>
								<circle cx="22" cy="38" r="4" stroke="#0ea5e9" strokeWidth="2" fill="none"/>
								<circle cx="38" cy="38" r="4" stroke="#0ea5e9" strokeWidth="2" fill="none"/>
								<line x1="8" y1="35" x2="12" y2="35" stroke="#0ea5e9" strokeWidth="2"/>
								<line x1="48" y1="35" x2="52" y2="35" stroke="#0ea5e9" strokeWidth="2"/>
								<line x1="20" y1="18" x2="20" y2="15" stroke="#ec4899" strokeWidth="2"/>
								<line x1="25" y1="18" x2="25" y2="15" stroke="#ec4899" strokeWidth="2"/>
							</svg>
						</div>
						<h3>Fast Delivery Options</h3>
						<p>Once you win, we help you get your car delivered without stress.</p>
					</div>
				</div>
			</div>
		</section>
	)
}

