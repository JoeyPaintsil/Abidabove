import './biddingProcess.scss'

export default function BiddingProcess() {
	return (
		<section className="section bidding-process">
			<div className="container bidding-process-container">
				<div className="bidding-process-image">
					<img src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=1600&auto=format&fit=crop" alt="Dream car" />
				</div>
				<div className="bidding-process-content">
					<h2>
						Get Your Dream Car Today<br />
						Start Bidding Now
					</h2>
					<p className="bidding-process-intro">
						We make it easy for you to find the right car with a smooth bidding process, transparent updates, and a wide range of options.
					</p>
					<ul className="bidding-process-checklist">
						<li>
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
								<circle cx="10" cy="10" r="9" fill="#fff" stroke="#9ca3af" strokeWidth="1"/>
								<path d="M6 10L9 13L14 7" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
							</svg>
							<span>Place a bid instantly on any listed car</span>
						</li>
						<li>
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
								<circle cx="10" cy="10" r="9" fill="#fff" stroke="#9ca3af" strokeWidth="1"/>
								<path d="M6 10L9 13L14 7" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
							</svg>
							<span>Get notified as bidding updates come in</span>
						</li>
						<li>
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
								<circle cx="10" cy="10" r="9" fill="#fff" stroke="#9ca3af" strokeWidth="1"/>
								<path d="M6 10L9 13L14 7" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
							</svg>
							<span>Win the auction and drive home with your dream car</span>
						</li>
					</ul>
					<button className="btn get-started-btn">
						Get Started
						<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M4 12L12 4M12 4H6M12 4V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
						</svg>
					</button>
				</div>
			</div>
		</section>
	)
}

