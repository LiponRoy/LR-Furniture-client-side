import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
// import './ProductDetail.css';
const Inventory = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const [singleProduct, setSingleProduct] = useState([]);

	const url = `http://localhost:4000/product/getSingleDataByID/${id}`;

	const dilever = () => {
		let dd = Number(singleProduct.quantity) - 1;
		const quantity = dd;
		const updateQuantity = { quantity };

		const url = `http://localhost:4000/product/updateData/${id}`;
		fetch(url, {
			method: 'PUT',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify(updateQuantity),
		})
			.then(response => response.json())
			.then(datas => console.log(datas));
	};

	const handleSubmit = event => {
		event.preventDefault();
		let current_quantity = Number(singleProduct.quantity);
		current_quantity += Number(event.target.name.value);

		const quantity = current_quantity;
		const updatequantity = { quantity };

		const url = `http://localhost:4000/product/updateData/${id}`;
		fetch(url, {
			method: 'PUT',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify(updatequantity),
		})
			.then(response => response.json())
			.then(datas => console.log(datas));

		// console.log(stockMe);
	};

	useEffect(() => {
		fetch(url)
			.then(response => response.json())
			.then(data => setSingleProduct(data.SingleProduct));
	}, [dilever, handleSubmit]);

	return (
		<div>
			<div className='container myProd'>
				<img src={singleProduct.imgUrl} alt='' width='300px' />
				<h1>id is : {id}</h1>
				<h4>Name: {singleProduct.name}</h4>
				<h4>Desc :{singleProduct.description}</h4>
				<h4>Price :{singleProduct.price}</h4>
				<h4>Quantity :{singleProduct.quantity}</h4>

				{/* <h4>Stock :{singleProduct.stock}</h4> */}
				<br></br>
				<button
					onClick={() => {
						navigate('/ManageProducts');
					}}>
					Manage Prod{' '}
				</button>
				<form onSubmit={handleSubmit} className=''>
					<input type='text' name='name' placeholder='Update your stock here' required />
					<button type='submit' value='add user'>
						update Stock
					</button>
				</form>

				<button onClick={() => dilever()}>delevir</button>
			</div>
		</div>
	);
};

export default Inventory;
