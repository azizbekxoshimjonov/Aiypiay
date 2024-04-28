import { useContext, useEffect, useState } from 'react';
import './App.css';
import { Contex } from './Context/Context';


function App() {
  const value = useContext(Contex)
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
              <button onClick={()=> setProduct(item)} className='btn btn-info text-light 'data-bs-toggle="modal" data-bs-target="#exampleModal">More</button>
            </li>
            ))
          }
      </ul>
      <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel"></h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <h2>{product.price}  $</h2>
        <p>{product.description}</p>
        <h2>{product.category}</h2>
        
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
      </div>
      
      

    </div>
  );
}

export default App;
