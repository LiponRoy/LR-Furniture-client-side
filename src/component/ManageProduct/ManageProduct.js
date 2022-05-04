import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { myContext } from '../../App';
import './ManageProduct.css';

const ManageProduct = () => {
	const [product, setProdect] = useState([]);
	const navigate = useNavigate();

	useEffect(() => {
		fetch('http://localhost:4000/product/getData')
			.then(response => response.json())
			.then(data => setProdect(data.allProduct));
	}, [product]);

	const deleteProduct = id => {
		fetch(`http://localhost:4000/product/deleteData/${id}`)
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
			<div className='productContainer'>
				{/* {localStorage.getItem('parentValueKey')} */}
				{/* <h1>All product{product.length}</h1> */}
				<div className='row'>
					{product.map(prod => (
						// display Json Data using map function
						<div key={prod._id} className='col-md-12'>
							<div className='Manageproduct'>
								<span>{prod.name}</span>
								<span>{prod.price}</span>
								<a onClick={() => deleteProduct(prod._id)} className='btn btn-primary'>
									X
								</a>
							</div>
						</div>
					))}
				</div>
				{/* <button onClick={() => (navigate = '/AddNewIteam')}>Ad new Iteam</button> */}
				<button onClick={() => navigate('/addNewItem')}>Ad new Iteam</button>
			</div>
		</div>
	);
};

export default ManageProduct;
