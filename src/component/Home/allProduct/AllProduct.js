import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AllProduct.css';
// import { myContext } from '../../App';
// for context api

const AllProduct = () => {
	// const [product, setProduct] = useContext(myContext);
	const [product, setProduct] = useState([]);
	const navigate = useNavigate();

	useEffect(() => {
		fetch('http://localhost:4000/product/getData')
			.then(response => response.json())
			.then(data => setProduct(data.allProduct));
	}, []);
	return (
		<div>
			<h2>{product.length}</h2>
			<div className='row'>
				{product.map(prod => (
					<div key={prod._id} className='col-md-4'>
						<div className='everyproduct'>
							<img src={prod.imgUrl} alt='' width='300px' />
							<span>{prod.name}</span>
							<span>{prod.price}</span>
							<span>{prod.quantity}</span>
							<span>{prod.supplier}</span>

							<button className='btn btn-primary' onClick={() => navigate(`/Inventory/${prod._id}`)}>
								Update
							</button>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default AllProduct;
