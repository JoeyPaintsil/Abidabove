import Navbar from '../../components/navbar/Navbar.jsx'
import Footer from '../../components/footer/Footer.jsx'
import './layout.scss'

export default function Layout({ children }) {
	return (
		<div className="layout">
			<Navbar />
			<main>{children}</main>
			<Footer />
		</div>
	)
}


