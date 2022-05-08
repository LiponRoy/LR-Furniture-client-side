import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { auth } from '../../FirebaseConfig/Firebase-config';
import { useNavigate, useParams } from 'react-router-dom';
import './AddNewItem.css';
const AddNewIteam = () => {
	const navigate = useNavigate();
	const [user] = useAuthState(auth);
	console.log(user.email);
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	//...........................
	//...........................
	const onSubmit = data => {
		console.log(data);
		//	const updateStock = { data };

		const url = 'https://infinite-depths-44773.herokuapp.com/product/insertdata';
		fetch(url, {
			method: 'POST',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify(data),
		})
			.then(response => response.json())
			.then(datas => datas.length != 0 && navigate('/'));
	};

	return (
		<div className='addForm'>
			<div>
				<h3>ADD NEW ITEM</h3>
			</div>
			<form className=' d-flex flex-column myForm' onSubmit={handleSubmit(onSubmit)}>
				<input className='name' placeholder='Enter name' {...register('name', { required: true })} />
				<textarea className='desc' placeholder='Enter description' type='text' {...register('description', { required: true })} />
				{/* {errors.lastName && <p>Last name is required.</p>} */}
				<input className='price' placeholder='Enter price' type='text' {...register('price', { required: true })} />
				<input className='quantity' placeholder='Enter quantity' type='number' {...register('quantity', { required: true })} />
				<input className='supplier' placeholder='Enter supplier' type='text' {...register('supplier', { required: true })} />
				<input className='email' placeholder='user_Email' value={user.email} {...register('user_email', { required: true })} readonly />
				{/* {errors.age && <p>Please enter number for age.</p>} */}
				<input className='imgUrl' placeholder='Image URL' {...register('imgUrl', { required: true })} />
				<input type='submit' />
			</form>
		</div>
	);
};

export default AddNewIteam;
