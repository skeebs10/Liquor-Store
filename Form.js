// import React, { useState } from 'react';
// import products from '../data';
// export default function Form(props) {
// 	const [newAlcohol, setNewAlcohol] = useState({
// 		item: '',
// 		brand: '',
// 		units: '',
// 		quantity: 0,
// 		isPurchased: false
// 	});
// 	const addProduct = event => {
// 		event.preventDefault();
// 		props.addProduct(newAlcohol);
// 		setNewAlcohol({
// 			item: '',
// 			brand: '',
// 			units: '',
// 			quantity: 0,
// 			isPurchased: false
// 		});
// 	};
// 	const handleChange = event => {
// 		setNewAlchohol({
// 			...newAlcohol,
// 			[event.target.id]: event.target.value
// 		});
// 	};
// 	return (
// 		<div className="form">
// 			<form onSubmit={addProduct}>
// 				<input
// 					type="text"
// 					id="item"
// 					value={newAlcohol.item}
// 					onChange={handleChange}
// 				></input>
// 				<input
// 					type="text"
// 					id="brand"
// 					value={newAlcohol.brand}
// 					onChange={handleChange}
// 				></input>
// 				<input
// 					type="text"
// 					id="units"
// 					value={newAlcohol.units}
// 					onChange={handleChange}
// 				></input>
// 				<input
// 					type="number"
// 					id="quantity"
// 					value={newAlcohol.quantity}
// 					onChange={handleChange}
// 				></input>
// 				<input type="submit" value="Add to Cart"></input>
// 			</form>
// 		</div>
// 	);
// }
