/* eslint-disable react/jsx-key */
import axios from "axios";
import { useEffect, useState } from "react";
// import styles from "./Home.module.css"
import { PacmanLoader } from "react-spinners";
import ProductItem from "../ProductItem/ProductItem";
import Loader from "../Loader/Loader";


export default function Home() {


  const [products,setproducts] = useState([]);

  async function getproducts(){
    try{
      
    let { data } = await axios.get("https://fakestoreapi.com/products");
    console.log(data);
    setproducts(data);

    }catch(error){
      console.error(error);
      alert("Error fetching products");
    }

    
  }


  useEffect(()=>{
    getproducts();
  },[])

  return (
    <>
      <div className="row my-5 gy-5">
        {products.length == 0 ? (<Loader></Loader>) : products.map(product => <ProductItem product={product}></ProductItem>)}
      </div>
    </>
  );
}
