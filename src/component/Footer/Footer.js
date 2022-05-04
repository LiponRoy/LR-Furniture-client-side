import React from 'react';
import './Footer.css';
import { FaFacebook, FaTwitter, FaLinkedin, FaSearch, FaPhone, FaMapMarkerAlt, FaRegEnvelope } from 'react-icons/fa';
const Footer = () => {
	return (
		<div className='footer-body'>
			<div className='row'>
				<div className='col-md-4'>
					<div className='footer_leftSide'>
						<div className='locationIteam'>
							<FaMapMarkerAlt></FaMapMarkerAlt>
							<span className=' m-3'>mirpur 1,Dhaka 1207 :</span>
						</div>

						<div className='locationIteam'>
							<FaRegEnvelope></FaRegEnvelope>
							<span className=' m-3'>liponbdbd@gmail.com</span>
						</div>
						<div className='locationIteam'>
							<FaPhone></FaPhone>
							<span className=' m-3'>mob +88 01734010550</span>
						</div>
					</div>
				</div>
				<div className='col-md-4'>
					<div className='footer_middleSide'>
						<span>Abut myself</span>
						<p className=' mx-5 '>Photographers record events and tells stories using images. They take pictures of people, places, events, and objects. Photographers often specialize in a type of photography. Portrait photographers take pictures of people in studios or on-site at various locations.</p>
						<div className='socialLink'>
							<FaFacebook size={20} className=' mx-2 '></FaFacebook>
							<FaTwitter size={20} className=' mx-2 '></FaTwitter>
							<FaLinkedin size={20} className=' mx-2'></FaLinkedin>
						</div>
					</div>
				</div>
				<div className='col-md-4'>
					<div className='footer_rightSide'>
						<form className=''>
							<span>Subscribe</span>
							<div className='form-group mb-2 mt-2'>
								<input type='email' className='form-control' id='exampleInputEmail1' aria-describedby='emailHelp' placeholder='Enter email' required />
							</div>

							<button type='submit' className='btn btn-secondary'>
								Submit
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
