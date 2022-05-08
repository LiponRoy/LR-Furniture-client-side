import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './CustomerReview.css';
import img1 from '../../assets/CR/moni1.JPG';
import img2 from '../../assets/CR/moni2.JPG';
import img3 from '../../assets/CR/moni3.JPG';
import img4 from '../../assets/CR/moni4.JPG';
import img5 from '../../assets/CR/moni1.JPG';

const CustomerReview = () => {
	const sliderIteam = [
		{
			price: '312',

			desc: 'Lorem ipsum dolor',
			img: img1,
		},
		{
			price: '5445',

			desc: 'Lorem ipsum dolor ',
			img: img2,
		},
		{
			price: '4339',

			desc: 'Lorem ipsum dolor',
			img: img3,
		},
		{
			price: '10945',

			desc: 'Lorem ipsum dolor',
			img: img4,
		},
		{
			price: '9014 ',

			desc: 'Lorem ipsum dolor ',
			img: img5,
		},
	];

	let settings_3 = {
		autoplay: true,
		autoplaySpeed: 2000,
		dots: true,
		//koyta kore show korbe
		slidesToShow: 3,
		//arrow press korle koyta kore asbe
		slidesToScroll: 3,
		// vertical:true,
		// verticalSwiping={true}
		pauseOnHover: true,
		//fade={true}
		touchMove: true,

		initialSlide: 2,
		infinite: true,
		// centerPadding: '170px',
		centerMode: true,

		responsive: [
			{
				breakpoint: 426,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					centerMode: false,
					// infinite: true,
					// dots: true,
				},
			},
			{
				breakpoint: 769,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					centerMode: false,
					// infinite: true,
					// dots: true,
				},
			},
			{
				breakpoint: 1025,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 4,
					centerMode: false,
					// infinite: true,
					// dots: true,
				},
			},
		],
	};

	return (
		<>
			<div className='multiSlider'>
				<Slider {...settings_3}>
					{sliderIteam.map(daa => (
						<div className='cardMe'>
							<div className='iteams'>
								<img src={daa.img} alt='no img found' />
								<p>{`${daa.price} TK`}</p>
								<span>{daa.desc}</span>
							</div>
						</div>
					))}
				</Slider>
			</div>
		</>
	);
};

export default CustomerReview;
