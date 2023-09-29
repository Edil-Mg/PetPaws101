import { Route, Routes } from 'react-router-dom';
import './App.css';
import Banner from './Components/Bnner/Banner';
// import Footer from './Components/Footer/Footer';
import HomePage from './Components/HomePage/HomePage';
// import NavBar from "./Components/NavBar/Nav"
// import { Link } from "react-router-dom";
import { BrowserRouter } from 'react-router-dom';
import AboutUs from './Components/AboutUs/AboutUs';
import SignUp from './Components/Signup/SignUp';
import Login from './Components/Login/Login';
import MakeAppt from './Components/MakeAppointment/MakeAppt'

function App() {
  return (
		<div className="App">
			{/* <NavBar />
			<Banner />
			<br />
			
			
			<Login />
			<Footer /> */}

			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Banner />}></Route>
					<Route path="/" element={<HomePage />}></Route>
					<Route path="/about" element={<AboutUs />}></Route>
					<Route path="/signup" element={<SignUp />}></Route>
					<Route path="/login" element={<Login />}></Route>
					<Route path="/MakeAppointment" element={<MakeAppt />}></Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;


