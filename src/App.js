
import axios from 'axios';
import { useState } from 'react';
import './App.scss';
import Categorize from './components/Categorize';
import Category from './components/Category';

function App() {

  const [products, setProducts] = useState([])
  const [isCheck, setIsCheck] = useState(false);

  // console.log(isCheck);

  const initilaizeProduct = () => {
    axios.get('https://fakestoreapi.com/products')
      .then((response) => setProducts(response.data))
      .catch(error => console.log({ error }))
    }
    

   
  const handleChange = (e) => {
    setIsCheck(!isCheck)
}

  return (
    <div className="App">
      <Categorize products={products} isCheck={isCheck} handleChange={handleChange} initilaizeProduct={initilaizeProduct}  />
      <Category products={products} isCheck={isCheck} />
    </div>
  );
}

export default App;
