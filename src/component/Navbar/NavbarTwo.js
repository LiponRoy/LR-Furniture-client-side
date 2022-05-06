import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaRegWindowClose, FaSearch } from 'react-icons/fa';
import './Navbar.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../FirebaseConfig/Firebase-config';
import { signOut } from 'firebase/auth';
const NavbarTwo = () => {
	const [user] = useAuthState(auth);
	const [showLinks, setShowLink] = useState(false);

	const closeFunc = () => {
		setShowLink(false);
	};
	const signOutTask = () => {
		signOut(auth);
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
							{user && (
								<NavLink onClick={closeFunc} className={({ isActive }) => (isActive ? ' active-myLink' : ' myLink')} to='/manageProduct'>
									ManageProduct
								</NavLink>
							)}
							{user && (
								<NavLink onClick={closeFunc} className={({ isActive }) => (isActive ? ' active-myLink' : ' myLink')} to='/addNewItem'>
									AddNewItem
								</NavLink>
							)}

							<NavLink onClick={closeFunc} className={({ isActive }) => (isActive ? ' active-myLink' : 'myLink')} to='/Signup'>
								Signup
							</NavLink>
							{user ? (
								<a onClick={signOutTask} className='signout-btn'>
									Signout
								</a>
							) : (
								<NavLink onClick={closeFunc} className={({ isActive }) => (isActive ? ' active-myLink' : 'myLink')} to='/login'>
									Login
								</NavLink>
							)}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default NavbarTwo;
