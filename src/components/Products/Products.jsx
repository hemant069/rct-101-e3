import React,{useEffect,useState} from "react";
import axios from 'axios'
import {Product} from './Product'

const Products = () => {
  const [Products, setProducts] = useState([])
  useEffect(() => {
  axios.get('http://localhost:8080/products')
  .then(({data})=>{
    setProducts(data)
  })
  
 
  }, [])
  console.log(Products)
  


  return <div>
<div><h1>Products</h1></div>
<br/>
<div style={{display:'flex',gap:'5px'}}>
  {Products.map((product)=>(
    <Product key={product.id} {...product}/>
 ))}
</div>

  </div>;
};

export default Products;
