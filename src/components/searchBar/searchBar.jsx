import { useState } from 'react'
import './searchBar.scss'

export default function SearchBar({ onSearch }) {
	const [criteria, setCriteria] = useState({ make: '', model: '', minYear: '', maxYear: '', price: '' })
	function handleChange(e) {
		setCriteria(prev => ({ ...prev, [e.target.name]: e.target.value }))
	}
	function handleSubmit(e) {
		e.preventDefault()
		onSearch?.(criteria)
	}
	return (
		<form className="searchbar card" onSubmit={handleSubmit}>
			<div className="row">
				<select name="make" value={criteria.make} onChange={handleChange}>
					<option value="">Any Make</option>
					<option>Toyota</option>
					<option>Honda</option>
					<option>Mercedes-Benz</option>
					<option>Ford</option>
				</select>
				<select name="model" value={criteria.model} onChange={handleChange}>
					<option value="">Any Model</option>
					<option>Corolla</option>
					<option>Civic</option>
					<option>C Class</option>
					<option>F-150</option>
				</select>
				<input name="minYear" value={criteria.minYear} onChange={handleChange} placeholder="Min year" />
				<input name="maxYear" value={criteria.maxYear} onChange={handleChange} placeholder="Max year" />
				<button className="btn" type="submit">Search Cars</button>
			</div>
		</form>
	)
}


