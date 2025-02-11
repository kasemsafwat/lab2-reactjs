import { useEffect } from "react";


export default function ProductItem() {


    useEffect(()=>{
        return ()=>{
            console.log("distroyed");
            
        }
    },[])
  return (
    <>
      <div className='container'>
        <h2 className='text-white'>kasem safwat moahmed</h2>
      </div>
    </>
  );
}
