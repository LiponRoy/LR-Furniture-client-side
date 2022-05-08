import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './Inventory.css';
// import './ProductDetail.css';
const Inventory = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const [singleProduct, setSingleProduct] = useState([]);

	const url = `https://infinite-depths-44773.herokuapp.com/product/getSingleDataByID/${id}`;

	const deliver = () => {
		let dd = Number(singleProduct.quantity) - 1;
		const quantity = dd;
		const updateQuantity = { quantity };

		const url = `https://infinite-depths-44773.herokuapp.com/product/updateData/${id}`;
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

		const url = `https://infinite-depths-44773.herokuapp.com/product/updateData/${id}`;
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
	}, [deliver, handleSubmit]);

	return (
		<div>
			<div className='row myProd text-center'>
				<div className='col-md-12 '>
					<div className='contain'>
						<img className='imageInv img-thumbnail m-2' src={singleProduct.imgUrl} alt='' />
						<div className=''>
							<h3>Name: {singleProduct.name}</h3>
							<h4>Desc :{singleProduct.description}</h4>
							<h4>Price :{singleProduct.price} Tk</h4>
							<h4>Quantity :{singleProduct.quantity}</h4>
							<h4>Email :{singleProduct.user_email}</h4>
							<br></br>
						</div>
						<form onSubmit={handleSubmit} className=''>
							<input type='text' name='name' placeholder='Update your stock here' required />
							<div className='QuantityBtn'>
								<button type='submit' value='add user'>
									update Quantity
								</button>
							</div>
							<div className='deliverBtn'>
								<a onClick={() => deliver()}>delevir</a>
								<br></br>
							</div>
						</form>
						<br />
						<span className='worningMsg'>Warning: If your internet connection is slow then it will take some moment to update and deliver</span>
						<br></br>
						<br></br>
					</div>
				</div>
				{/* <div className='col-md-6 '>
					<br></br>
				</div> */}
			</div>
			<div className='manageProductBtn'>
				<a
					onClick={() => {
						navigate('/manageProduct');
					}}>
					Manage Prod
				</a>
			</div>
		</div>
	);
};

export default Inventory;
