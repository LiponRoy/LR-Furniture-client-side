import './App.css';
import Home from './component/Home/Home.js';
import About from './component/About/About.js';
import { Route, Routes } from 'react-router-dom';
import NotFound from './component/NotFound/NotFound';
import NavbarTwo from './component/Navbar/NavbarTwo';
import { createContext, useState } from 'react';
import Inventory from './component/Inventory/Inventory';
import ManageProduct from './component/ManageProduct/ManageProduct';
import AddNewIteam from './component/add new item/AddNewIteam';
import Signup from './component/Signup/Signup';
import Login from './component/Login/Login';
import MyItem from './component/my_item/MyItem';
import RequireAuth from './component/Require-Auth/RequireAuth';
import Blog from './component/blog/Blog';
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
					<Route path='/about' element={<About />} />
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
					<Route path='/blog' element={<Blog />} />
					<Route path='/signup' element={<Signup />} />
					<Route path='/login' element={<Login />} />
					<Route path='/myItem' element={<MyItem />} />

					{/* <Route path='/blog/:id' element={<About />} /> */}
					<Route path='*' element={<NotFound />} />
				</Routes>
			</myContext.Provider>
		</div>
	);
}

export default App;
