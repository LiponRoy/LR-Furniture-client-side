import React from 'react';
import Footer from '../Footer/Footer';
import AllProduct from './allProduct/AllProduct';
import './Home.css';
import HomeSlider from './HomeSlider/HomeSlider';

const Home = () => {
	return (
		<div className='container-fluid'>
			<h1>Bangladeshi</h1>
			<HomeSlider></HomeSlider>
			<AllProduct></AllProduct>
			<Footer></Footer>
		</div>
	);
};

export default Home;
