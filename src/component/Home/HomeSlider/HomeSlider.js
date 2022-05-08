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
			name: 'Personal Photography',
			img: img0,
		},
		{
			name: 'Birthday Photography',

			img: img1,
		},
		{
			name: 'Wedding Photography',

			img: img2,
		},
		{
			name: 'Food Photography',

			img: img3,
		},
	];

	let properticeMe = {
		autoplay: true,
		autoplaySpeed: 6000,
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
											<img src={daa.img} alt='no img found' />
											<div className='textAll'>
												<div className=''>
													<h2>I Will Provide</h2>
													<h1>{daa.name}</h1>
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
