import React from 'react';
import AllProduct from './allProduct/AllProduct';
import './Home.css';

const Home = () => {
	return (
		<div className='container-fluid'>
			<h1>Bangladeshi</h1>
			<AllProduct></AllProduct>
		</div>
	);
};

export default Home;
