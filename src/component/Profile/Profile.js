import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Profile.css';
const Profile = () => {
	const navigate = useNavigate();
	const myId = '01227kkk';
	return (
		<div className='container'>
			<div className='ProfileHeader'>
				<div className='allText'>
					<h1>This is Profile page</h1>
				</div>

				<button onClick={() => navigate(`/deshBoard/${myId}`)}>GO TO DeshBoard</button>
			</div>
		</div>
	);
};

export default Profile;
