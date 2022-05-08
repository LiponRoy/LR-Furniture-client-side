import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Loading/Loading';
import './AllProduct.css';

const AllProduct = () => {
	const [product, setProduct] = useState([]);
	const navigate = useNavigate();

	useEffect(() => {
		fetch('https://infinite-depths-44773.herokuapp.com/product/getData')
			.then(response => response.json())
			.then(data => setProduct(data.allProduct));
	}, []);

	return (
		<div>
			{product.length != 0 ? (
				<div>
					<div className='someProduct'>
						<h1>Some Product</h1>
					</div>
					<div className='row'>
						{product?.slice(0, 6).map(prod => (
							<div key={prod._id} className='col-md-4'>
								<div className=''>
									<div className='product-card'>
										<div class='card'>
											<img class='card-img-top' src={prod.imgUrl} alt='Card image cap' />
											<div class='card-body text-start cardMe'>
												<span className='name'>{prod.name}</span>
												<h4 className='price'>{prod.price} TK</h4>
												<span>Quantity: {prod.quantity}</span>
												<br></br>
												<span>Supplier: {prod.supplier}</span>
												<br></br>
											</div>
											<a href='#' class='btn btn-secondary btn-lg mt-2 proBtn' onClick={() => navigate(`/Inventory/${prod._id}`)}>
												Manage
											</a>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			) : (
				<Loading></Loading>
			)}
		</div>
	);
};

export default AllProduct;
