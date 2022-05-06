import React from 'react';
import { useForm } from 'react-hook-form';

const AddNewIteam = () => {
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

		const url = `https://infinite-depths-44773.herokuapp.com/product/insertdata`;
		fetch(url, {
			method: 'POST',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify(data),
		})
			.then(response => response.json())
			.then(datas => console.log(datas));
	};

	return (
		<div>
			<h1>Add new iteam !</h1>
			<form className=' d-flex flex-column justify-content-center align-items-center' onSubmit={handleSubmit(onSubmit)}>
				<input placeholder='Enter name' {...register('name', { required: true })} />
				<input placeholder='Enter description' {...register('description', { required: true })} />
				{/* {errors.lastName && <p>Last name is required.</p>} */}
				<input placeholder='Enter price' type='number' {...register('price', { required: true })} />
				<input placeholder='Enter quantity' type='number' {...register('quantity', { required: true })} />
				<input placeholder='Enter supplier' type='text' {...register('supplier', { required: true })} />
				{/* {errors.age && <p>Please enter number for age.</p>} */}
				<input placeholder='Image URL' {...register('imgUrl', { required: true })} />
				<input type='submit' />
			</form>
		</div>
	);
};

export default AddNewIteam;
