import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Loading from '../Loading/Loading';
// import { myContext } from '../../App';
import './ManageProduct.css';

const ManageProduct = () => {
	const [product, setProdect] = useState([]);
	const navigate = useNavigate();

	useEffect(() => {
		fetch('https://infinite-depths-44773.herokuapp.com/product/getData')
			.then(response => response.json())
			.then(data => setProdect(data.allProduct));
	}, [product]);

	const deleteProduct = id => {
		fetch(`https://infinite-depths-44773.herokuapp.com/product/deleteData/${id}`)
			.then(response => response.json())
			.then(data => data);
	};

	// useEffect(() => {
	// 	const myarr = localStorage.getItem('parentValueKey');
	// 	setProdect(JSON.parse(myarr));
	// }, []);

	// useEffect(() => {
	// 	localStorage.setItem('parentValueKey', JSON.stringify(product));
	// }, [product]);
	return (
		<div>
			<div className='productContainer mt-2'>
				{/* {localStorage.getItem('parentValueKey')} */}
				{/* <h1>All product{product.length}</h1> */}
				{product.length != 0 ? (
					<div>
						{' '}
						<div className='row'>
							{product.map(prod => (
								// display Json Data using map function
								<div key={prod._id} className='col-md-12'>
									<div className='Manageproduct '>
										<div className='allProduct'>
											<img src={prod.imgUrl} alt='img not found' width='50' height='50' />
											<span className='nameProduct'>Name: {prod.name}</span>
											<span className='price'>Price: {prod.price}</span>
											<span className='quantity'>Quantity: {prod.quantity}</span>

											<a onClick={() => deleteProduct(prod._id)} className='btn btn-warning mngBtn'>
												X
											</a>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				) : (
					<div>
						<Loading></Loading>
					</div>
				)}

				{/* <button onClick={() => (navigate = '/AddNewIteam')}>Ad new Iteam</button> */}
			</div>
			<div className='btnAdd'>
				<a onClick={() => navigate('/addNewItem')}>Ad new Iteam</a>
			</div>
		</div>
	);
};

export default ManageProduct;
