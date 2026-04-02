import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import { BrowserRouter as Router,Route,Routes,Link } from 'react-router-dom';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Addproduct from './components/Addproduct';
import Getproduct from './components/Getproduct';
import Mpesapayment from './components/Mpesapayment';
import Navbar from './components/Navbar';
import Caroousel from './components/Caroousel';
import Footer from './components/Footer';


function App() {
  return (
    <Router>
      <Navbar/>
      <Caroousel/>
      <div className='App'>
        <div className='App-header'>
          <h1 className='text-primary'>Welcome to Sadera Car Dealership</h1>
        </div>
        <nav className='m-2'>
          <Link to="/signup" className='btn btn-outline-primary ms-2'>Signup</Link>
          <Link to="/signin" className='btn btn-outline-primary ms-2'>Signin</Link>
          <Link to="/addproduct" className='btn btn-outline-primary ms-2'>Addproduct</Link>
          <Link to="/" className='btn btn-outline-primary ms-2'>Getproduct</Link>
        </nav>
        <Routes>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/signin' element={<Signin/>}/>
          <Route path='/addproduct' element={<Addproduct/>}/>
          <Route path='/' element={<Getproduct/>}/>
          <Route path='/makepayment' element={<Mpesapayment/>}/>
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
