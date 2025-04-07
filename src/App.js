
// import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import AllProducts from './components/AllProducts';
import About from './components/About';
import Contact from './components/Contact';
import AdminLogin from './components/admin/AdminLogin';
import AddProduct from './components/admin/AddProduct';
import Products from './components/admin/Products';
import "./assest/css/style.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Adminpage from './components/admin/Adminpage';
import Dashboard from './components/admin/Dashboard';
import Order from './components/admin/Order';
import User from './components/admin/User';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import OrderComplete from './components/OrderComplete';


function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Header />
        <Routes>
          <Route path={'/'} element={<Home></Home>}></Route>
          <Route path={'/about'} element={<About />}></Route>
          <Route path={'/allproducts'} element={<AllProducts />}></Route>
          <Route path={'/contact'} element={<Contact />}></Route>
          <Route path={'/adminlogin'} element={<AdminLogin/>}></Route>
          <Route path={'/cart'} element={<Cart/>}></Route>
          <Route path={'admin/cart'} element={<Cart/>}></Route>

          
          <Route path={'/checkout'} element={<Checkout/>}></Route>
          <Route path={'/ordercomplete'} element={<OrderComplete/>}></Route>

         
          <Route path={'/admin'} element={<Adminpage />} >
            <Route index element={<Dashboard />}></Route>
            <Route path={'/admin/products'} element={<Products />}></Route>
            <Route path={'/admin/addproduct'} element={<AddProduct />}></Route> 
            <Route path={'/admin/addproduct/:id'} element={<AddProduct />}></Route>   
            <Route path={'/admin/order'} element={<Order />}></Route>
            <Route path={'/admin/user'} element={<User />}></Route>  
          </Route>

        </Routes>
        <Footer />
      </BrowserRouter>


      {/* <Header />
    <Home/>
    <AllProducts/>
    <About/>
    <Contact/>
    <Footer /> */}
    </div>
  );
}

export default App;
