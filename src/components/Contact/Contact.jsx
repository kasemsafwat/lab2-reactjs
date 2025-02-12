import axios from "axios";
import { useEffect } from "react";

export default function Contact() {

  function welcome(){
    axios.get("http://localhost:3000/").then(({data}) => {
      console.log(data);
      
    }).catch((error) => {
      alert("Error: " + error)
    });
  }


  useEffect(()=>{
    welcome();
  })



  return (
    <>
      <div className="container">
        <h1>Contant Page</h1>
      </div>
    </>
  );
}
