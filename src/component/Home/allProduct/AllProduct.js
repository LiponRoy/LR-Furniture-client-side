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
		fetch('https://infinite-depths-44773.herokuapp.com/product/getData')
			.then(response => response.json())
			.then(data => setProduct(data.allProduct));
	}, []);
	return (
		<div>
			<h2>{product.length}</h2>
			<div className='row'>
				{product.map(prod => (
					<div key={prod._id} className='col-md-4'>
						<div className=''>
							<div className='product-card'>
								<div class='card'>
									<img class='card-img-top' src={prod.imgUrl} alt='Card image cap' />
									<div class='card-body'>
										<h5 class='card-title'>Card title</h5>
										<p>{prod.name}</p>
										<p>{prod.price}</p>
										<p>{prod.quantity}</p>
										<p>{prod.supplier}</p>
										<a href='#' class='btn btn-primary' onClick={() => navigate(`/Inventory/${prod._id}`)}>
											Go somewhere
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default AllProduct;
