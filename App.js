import React, { useState } from 'react';
export default function App(props) {
	const [newProduct, setNewProdcut] = useState({
		item: '',
		brand: '',
		units: '',
		quantity: 0,
		isPurchased: false
	});

	const [productList, setProductList] = useState([
		{
			item: 'vodka',
			brand: 'Titos',
			units: '1.75L',
			quantity: 1,
			isPurchased: false
		},
		{
			item: 'Tequila',
			brand: 'Casamigos',
			units: '1L',
			quantity: 2,
			isPurchased: false
		},
		{
			item: 'Spiced Rum',
			brand: 'Captain Morgan',
			units: '750ml',
			quantity: 0,
			isPurchased: false
		}
	]);
	const addProduct = event => {
		event.preventDefault();
		setProductList([...productList, newProduct]);
		setNewProduct({
			item: '',
			brand: '',
			units: '',
			quantity: 0,
			isPurchased: false
		});
	};
	const handleChange = event => {
		setNewProduct({
			...newGrocery,
			[event.target.id]: event.target.value
		});
	};
	return (
		<div className="Page-wrapper">
			<h1> Liquor Store</h1>
			<form onSubmit={addProduct}>
				<input
					id="item"
					type="text"
					value={newProduct.item}
					onChange={handleChange}
				></input>
				<input
					id="brand"
					type="text"
					value={newProduct.brand}
					onChange={handleChange}
				></input>
				<input
					id="units"
					type="text"
					value={newProduct.units}
					onChange={handleChange}
				></input>
				<input
					id="quantity"
					type="number"
					value={newProduct.quantity}
					onChange={handleChange}
				></input>
				<input type="submit" value="Add"></input>
			</form>
		</div>
	);
}

// import React, { useState } from 'react';
// import products from '../data';
// import Form from './Form';

// export default function App(props) {
// 	const [productList, setProductList] = useState([products]);
// 	const addProduct = newAlcohol => {
// 		setProductList([...productList, newAlcohol]);
// 	};

// 	return (
// 		<div className="Page-wrapper">
// 			<h2>Liquor List</h2>

// 			<Form addProduct={addProduct} />
// 			<ul class Name="list">
// 				{productList?.length
// 					? productList.map((listAlcohol, i) => {
// 							return (
// 								<li key={`${listAlcohol.item}`}>
// 									{listAlchohol.item}
// 									{listAlcohol.brand}
// 								</li>
// 							);
// 					  })
// 					: ''}
// 			</ul>
// 		</div>
// 	);
// }
