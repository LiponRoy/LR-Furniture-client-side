import React from 'react';
import './DeshBoard.css';
import { useNavigate, useParams } from 'react-router-dom';
const DeshBoard = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	return (
		<div>
			<div className='container myDeshBoard'>
				<h1>my Desh Board: {id}</h1>
				<button onClick={() => navigate('/profile')}>GO TO DeshBoard</button>
			</div>
		</div>
	);
};

export default DeshBoard;
