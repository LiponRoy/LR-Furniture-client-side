import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import './AllProduct.css';
import { auth } from '../../FirebaseConfig/Firebase-config';
import { useAuthState } from 'react-firebase-hooks/auth';
// import { myContext } from '../../App';
// for context api

const MyItem = () => {
	const [user] = useAuthState(auth);
	// const [product, setProduct] = useContext(myContext);
	const [product, setProduct] = useState([]);
	const navigate = useNavigate();

	useEffect(() => {
		fetch('http://localhost:4000/product/getData')
			.then(response => response.json())
			.then(data => setProduct(data.allProduct));
	}, []);

	const myProduct = product.filter(filteredProduct => {
		return filteredProduct.user_email === user?.email;
	});

	return (
		<div>
			<h2>{product.length}</h2>
			<div className='row'>
				{myProduct.map(prod => (
					<div className='col-md-3'>
						<div className=''>
							<div className='product-card'>
								<div class='card'>
									<img class='card-img-top' src={prod.imgUrl} alt='Card image cap' />
									<div class='card-body text-start'>
										<h6 className='name'>{prod.name}</h6>
										<h4 className='price'>{prod.price}</h4>
										{/* <p>{prod.quantity}</p>
										<p>{prod.supplier}</p>
										<p>{prod.user_email}</p> */}

										<a href='#' class='btn btn-primary' onClick={() => navigate(`/Inventory/${prod._id}`)}>
											Update
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

export default MyItem;
