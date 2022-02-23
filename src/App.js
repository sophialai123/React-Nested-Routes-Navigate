import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css";
import { Link } from "react-router-dom";
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import AddProducts from './components/Products/AddProducts';
import ListProducts from './components/Products/ListProducts';
import ProductsDisplay from './components/Products/ProductsDisplay';
import Search from './components/Products/Search';
import Products from './components/Products/Products';





function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="products/search">products</Link>
      </nav>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='login' element={<Login />} />

        <Route path='products' element={<Products />} >
          {/* Nested Products Route here*/}
          <Route path='search' element={<Search />} />
          <Route path='list' element={<ListProducts />} />
          <Route path='add' element={<AddProducts />} />
          <Route path=':id' element={<ProductsDisplay />} />
          <Route />
        </Route>

      </Routes>



    </Router>

  );
}

export default App;
