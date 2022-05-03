import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaRegWindowClose, FaSearch } from 'react-icons/fa';
import './Navbar.css';
const NavbarTwo = () => {
	const [showLinks, setShowLink] = useState(false);

	const closeFunc = () => {
		setShowLink(false);
	};
	return (
		<>
			<div className='container-fluid'>
				<div className='liponNav'>
					<div className='leftSide'>
						<div className='logo'>
							<h4>LR Furniture</h4>
						</div>
					</div>
					<div className='middleSide'>
						<h5>middle side</h5>
					</div>
					<div className='rightSide'>
						<div className='toggleBut' onClick={() => setShowLink(!showLinks)}>
							{showLinks ? <FaRegWindowClose></FaRegWindowClose> : <FaBars></FaBars>}
						</div>
						<div className='allLink' id={showLinks ? 'notHidden' : ''}>
							<NavLink onClick={closeFunc} className={({ isActive }) => (isActive ? ' active-myLink' : ' myLink')} to='/'>
								Home
							</NavLink>

							<NavLink onClick={closeFunc} className={({ isActive }) => (isActive ? ' active-myLink' : 'myLink')} to='/contact'>
								Contact
							</NavLink>

							<NavLink onClick={closeFunc} className={({ isActive }) => (isActive ? ' active-myLink' : 'myLink')} to='/about'>
								About
							</NavLink>
							<NavLink onClick={closeFunc} className={({ isActive }) => (isActive ? ' active-myLink' : 'myLink')} to='/profile'>
								profile
							</NavLink>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default NavbarTwo;
