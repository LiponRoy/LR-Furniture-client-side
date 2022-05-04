import React from 'react';
import { useParams } from 'react-router-dom';

const Inventory = () => {
	const { id } = useParams();
	return <div>Inventory All id is {id}</div>;
};

export default Inventory;
