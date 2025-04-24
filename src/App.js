import './App.css';
import Signup from './components/Signup';
import Signin from './components/Signin';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'
import Addproduct from './components/Addproduct';
import Getproducts from './components/Getproducts';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Pagenotfound from './components/Pagenotfound';
import Makepayment from './components/Makepayment';
import ShoppingCart from './components/ShoppingCart';
import Navcomponent from './components/Navcomponent';
import Context from './Context/Context';
import React from 'react';
import Chatbot from './components/Chatbot';



function App() {
  return (
    <React.StrictMode>
    <Context>
      <Router>
      <Navcomponent/>
      <Routes>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/addproduct' element={<Addproduct/>}/>
        <Route path='/makepayment' element={<Makepayment/>}/>
        <Route path='/cart' element={<ShoppingCart/>}/>
        <Route path='/nav' element={<Navcomponent/>}/>
        <Route path='/bot' element={<Chatbot/>}/>
        {/* Default Path to component */}
        <Route path='/' element={<Getproducts/>}/>
        <Route path='*' element={<Pagenotfound/>}/>
      </Routes>
      </Router>
    </Context>  
    </React.StrictMode>
  );
}

export default App;
