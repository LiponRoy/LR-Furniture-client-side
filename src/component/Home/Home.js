import React from 'react';
import Footer from '../Footer/Footer';
import AllProduct from './allProduct/AllProduct';
import './Home.css';
import HomeSlider from './HomeSlider/HomeSlider';
import TopCategory from './topCat/TopCategory';
import Contact from './contact/Contact';

const Home = () => {
	return (
		<div className='container-fluid'>
			<HomeSlider></HomeSlider>
			<AllProduct></AllProduct>
			<TopCategory></TopCategory>
			<Contact></Contact>
			<Footer></Footer>
		</div>
	);
};

export default Home;
