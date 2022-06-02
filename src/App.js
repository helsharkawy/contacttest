import { BrowserRouter as Router , Route , Switch } from 'react-router-dom';
import { useState , useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Landing from './components/Landing';
import Products from './components/Products';
import About from './components/About';
import ProductPreview from './components/ProductPreview';
import AppDownload from './components/AppDownload';
import Subscribe from './components/Subscribe';
import Footer from './components/Footer';
import Notfound from './components/Notfound';

function App() {

  const [allProducts , setAllProducts] = useState([]);
  async function fetchProducts () {
    let data = await fetch('https://dummyjson.com/products?limit=10&select=title,thumbnail,id')
    .then(res => (res.json()))
    setAllProducts(data.products)
  }
  
  useEffect(() => {
    fetchProducts()
  }
    ,[])

  return (
    <Router>
      <div className="App">
      <Header/>
      <Landing/>
      <Switch>
        <Route exact path='/'>
          {allProducts && <Products products={allProducts}/>}
          <About/>
          <AppDownload/>
          <Subscribe/>
        </Route>
        <Route path='/products/:id'>
          <ProductPreview/>
        </Route>
        <Route path='/*'>
          <Notfound/>
        </Route>
      </Switch>
      <Footer/>
      </div>
    </Router>
    
  );
}

export default App;
