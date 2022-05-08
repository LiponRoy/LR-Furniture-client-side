import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import './AllProduct.css';
import { auth } from '../../FirebaseConfig/Firebase-config';
import { useAuthState } from 'react-firebase-hooks/auth';
import './MyItem.css';
// import { myContext } from '../../App';
// for context api

const MyItem = () => {
	const [user] = useAuthState(auth);
	// const [product, setProduct] = useContext(myContext);
	const [product, setProduct] = useState([]);
	const navigate = useNavigate();

	useEffect(() => {
		fetch('https://infinite-depths-44773.herokuapp.com/product/getData')
			.then(response => response.json())
			.then(data => setProduct(data.allProduct));
	}, []);

	const myProduct = product.filter(filteredProduct => {
		return filteredProduct.user_email === user?.email;
	});

	return (
		<div>
			<h2>{myProduct.length}</h2>
			<div className=' row mt-5'>
				{myProduct.map(prod => (
					<div className='col-md-3'>
						<div className='myItem text-start m-2'>
							<img class='card-img-top' src={prod.imgUrl} alt='Card image cap' />
							<div className=''>
								<span className='name'>{prod.name}</span>
								<h4 className='price'>{prod.price}</h4>
								<span>Quantity: {prod.quantity}</span>
								<br></br>
								<span>Supplier: {prod.supplier}</span>
							</div>
							<a href='#' class='btn btn-secondary mt-2 myItemBtn' onClick={() => navigate(`/Inventory/${prod._id}`)}>
								Update
							</a>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default MyItem;
