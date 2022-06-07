/** @format */

import React, { useState, useEffect } from 'react';
import Cards from './Cards';

export default function Form({ artisans }) {
	const [proData, setProData] = useState([]);

	useEffect(() => {
		setProData(artisans);
	}, []);

	const [value, setValue] = useState();

	const search = (e) => {
		e.preventDefault();
		if (value === '') {
			setProData(artisans);
		} else {
			var usuariosFiltrados = artisans.filter((usuario) => {
				const newData = Object.keys(usuario).map((item) => {
					if (typeof usuario[item] === 'number') {
						return;
					}

					if (typeof usuario[item] === 'string') {
						if (usuario[item].toLowerCase().includes(value.toLowerCase())) {
							return item;
						} else {
							return false;
						}
					}

					if (typeof usuario[item] === 'object' && usuario[item] !== null) {
						return usuario[item].some((ele) => {
							return ele.toLowerCase().includes(value.toLowerCase());
						});
					} else {
						return false;
					}
				});
				const filter = newData.some((ele) => ele);

				return filter;
			});
			setProData(usuariosFiltrados);
		}
	};

	return (
		<div className='form-component'>
			<div className='form-container'>
				<form onSubmit={search}>
					<input
						type='search'
						name='data-art'
						id='seach-input'
						placeholder='Entrez un besoin'
						onChange={(e) => setValue(e.target.value)}
						value={value}
					/>
					<button type='submit' className='btn'>
						Search
					</button>
				</form>
				{/* bouton pour trier du meilleur au pire */}
				<div className='btn-sort-container'>
					<button className='btn-sort' id='goodTobad'>
						Top <span>→</span>
					</button>
					<button className='btn-sort' id='badToGood'>
						Flop <span>→</span>
					</button>
				</div>
			</div>
			<div className='result'>
				{proData.slice(0, 12).map((info) => (
					<Cards key={info.id} info={info}></Cards>
				))}
			</div>
		</div>
	);
}

{
	/* {artisans.map((artisan, pro) => (
 
    <div className="test">

      <h3>hello</h3>
      <p key={artisan.id}> {artisan.name}</p> 
    </div>
 
))} */
}
