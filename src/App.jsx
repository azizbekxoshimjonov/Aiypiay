import { useContext, useEffect, useState } from 'react';
import './App.css';


function App() {
  const [products, setProducts] = useState([])
  const [product, setProduct] = useState({})
  useEffect(() => {

    fetch('https://fakestoreapi.com/products/')
    .then(res=>res.json())
      .then((data) => setProducts(data))
  }, [])
  return (
    <div className="App">
        <div className="container">
      <ul>
        {
          products.map((item, index)=>(
            <li key={index} className='d-flex align-items-center'>
             <img width={100} height={170} src={item.image} alt="" />
              <h2 className='title'>{item.title}</h2>
              <h3>{item.price}$</h3>
              <p>{item.category}</p>
              <p>{item.id}</p>
              <p></p>
              <button  className='btn btn-info text-light'>more</button>
            </li>
            ))
          }
      </ul>
      </div>
      

    </div>
  );
}

export default App;
