import React from 'react';
import './HomeSlider.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Slider from 'react-slick';
import img0 from '../../assets/slideImg/s1.jpg';
import img1 from '../../assets/slideImg/s2.jpg';
import img2 from '../../assets/slideImg/s3.jpg';
import img3 from '../../assets/slideImg/s4.jpg';

const HomeSlider = () => {
	const data = [
		{
			name: 'Make Your Home gorgeous',
			img: img0,
		},
		{
			name: 'Make Your Home gorgeous',

			img: img1,
		},
		{
			name: 'Make Your Home gorgeous',

			img: img2,
		},
		{
			name: 'Make Your Home gorgeous',

			img: img3,
		},
	];

	let properticeMe = {
		autoplay: true,
		autoplaySpeed: 4000,
		dots: true,
		pauseOnHover: false,
		fade: true,
		touchMove: true,
	};
	return (
		<div className='container-fluid'>
			<div className='row'>
				<div className='col-md-0'></div>
				<div className='col-md-12'>
					<div className='mainSld'>
						<Slider {...properticeMe}>
							{data.map(daa => (
								<div className='carddMe'>
									<div className='iteams'>
										<div className='imgPart'>
											<img className='imagecl' src={daa.img} alt='no img found' />
											<div className='textAll'>
												<div className=''>
													<span>Make</span>
													<br></br>
													<span>Your Home</span>
													<br></br>
													<span>Gorgeous</span>
													<br></br>
													<span>With (LR) Furniture</span>
												</div>
											</div>
										</div>
									</div>
								</div>
							))}
						</Slider>
					</div>
				</div>
			</div>
		</div>
	);
};

//end

export default HomeSlider;
