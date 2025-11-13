import { useState } from 'react'
import './heroSearch.scss'

export default function HeroSearch({ onSearch }) {
	const years = Array.from({ length: 26 }, (_, i) => 2000 + i) // 2000-2025
	const priceBands = ['<$5k', '$5k - $10k', '$10k - $20k', '$20k - $35k', '$35k - $50k', '$50k+']
	const modelsByMake = {
		Toyota: ['Corolla', 'Camry', 'RAV4', 'Highlander'],
		Honda: ['Civic', 'Accord', 'CR-V', 'Pilot'],
		'Mercedes-Benz': ['A Class', 'C Class', 'E Class', 'GLA'],
		Ford: ['F-150', 'Mustang', 'Explorer', 'Escape'],
	}
	const [criteria, setCriteria] = useState({ make: '', model: '', minYear: '', maxYear: '', price: '' })
	function handleChange(e) {
		setCriteria(prev => ({ ...prev, [e.target.name]: e.target.value }))
	}
	function handleMakeChange(e) {
		const nextMake = e.target.value
		setCriteria(prev => ({ ...prev, make: nextMake, model: '' }))
	}
	function handleSubmit(e) {
		e.preventDefault()
		onSearch?.(criteria)
	}
	return (
		<form className="hero-search" onSubmit={handleSubmit}>
			<div className="title">SEARCH FOR A CAR</div>
			<div className="grid">
				<select name="make" value={criteria.make} onChange={handleMakeChange} aria-label="Make" placeholder="Make">
					<option value="">Make</option>
					<option>Toyota</option>
					<option>Honda</option>
					<option>Mercedes-Benz</option>
					<option>Ford</option>
				</select>
				<select name="model" value={criteria.model} onChange={handleChange} aria-label="Model" placeholder="Model">
					<option value="">Model</option>
					{(modelsByMake[criteria.make] || []).map(m => (
						<option key={m}>{m}</option>
					))}
				</select>
				<select name="minYear" value={criteria.minYear} onChange={handleChange} aria-label="Min Year">
					<option value="">Min Year</option>
					{years.map(y => (
						<option key={`min${y}`} value={y}>{y}</option>
					))}
				</select>
				<select name="maxYear" value={criteria.maxYear} onChange={handleChange} aria-label="Max Year">
					<option value="">Max Year</option>
					{years.map(y => (
						<option key={`max${y}`} value={y}>{y}</option>
					))}
				</select>
				<select name="price" value={criteria.price} onChange={handleChange} aria-label="Price">
					<option value="">Price</option>
					{priceBands.map(p => (
						<option key={p} value={p}>{p}</option>
					))}
				</select>
				<button className="btn search" type="submit">🔍 Search Cars</button>
			</div>
		</form>
	)
}


