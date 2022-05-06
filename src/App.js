import './App.css';
import Home from './component/Home/Home.js';
import Contact from './component/Contact/Contact.js';
import About from './component/About/About.js';
import { Route, Routes } from 'react-router-dom';
import NotFound from './component/NotFound/NotFound';
import NavbarTwo from './component/Navbar/NavbarTwo';
import Profile from './component/Profile/Profile';
import DeshBoard from './component/deshBoard/DeshBoard';
import { createContext, useState } from 'react';
import Inventory from './component/Inventory/Inventory';
import ManageProduct from './component/ManageProduct/ManageProduct';
import AddNewIteam from './component/add new item/AddNewIteam';
import Signup from './component/Signup/Signup';
import Login from './component/Login/Login';
import RequireAuth from './component/Require-Auth/RequireAuth';
// context Api use
export const myContext = createContext();
function App() {
	const [product, setProduct] = useState([]);
	return (
		<div className='App'>
			<myContext.Provider value={[product, setProduct]}>
				<NavbarTwo></NavbarTwo>

				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/contact' element={<Contact />} />
					<Route path='/about' element={<About />} />
					<Route path='/profile' element={<Profile />} />
					<Route path='/deshBoard/:id' element={<DeshBoard />} />
					<Route
						path='/Inventory/:id'
						element={
							<RequireAuth>
								<Inventory />
							</RequireAuth>
						}
					/>
					<Route path='/manageProduct' element={<ManageProduct />} />
					<Route path='/addNewItem' element={<AddNewIteam />} />
					<Route path='/signup' element={<Signup />} />
					<Route path='/login' element={<Login />} />
					{/* <Route path='/blog/:id' element={<About />} /> */}
					<Route path='*' element={<NotFound />} />
				</Routes>
			</myContext.Provider>
		</div>
	);
}

export default App;
