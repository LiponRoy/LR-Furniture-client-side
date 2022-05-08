import React from 'react';
import Footer from '../Footer/Footer';
import AllProduct from './allProduct/AllProduct';
import './Home.css';
import HomeSlider from './HomeSlider/HomeSlider';
import CustomerReview from './customerReview/TopCategory';

const Home = () => {
	return (
		<div className='container-fluid'>
			<HomeSlider></HomeSlider>
			<AllProduct></AllProduct>
			<CustomerReview></CustomerReview>
			<Footer></Footer>
		</div>
	);
};

export default Home;
