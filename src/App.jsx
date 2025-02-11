import {} from "react";
import LayOut from "./components/LayOut/LayOut";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "./components/NotFound/NotFound";
import Settings from "./components/Settings/Settings";
import Web from "./components/Web/Web";
import Mobile from "./components/Mobile/Mobile";

function App() {
  const routs = createBrowserRouter([
    {
      path: "",
      element: <LayOut />,
      children: [
        { path: "home", element: <Home /> },
        { path: "about", element: <About /> },
        { path: "contact", element: <Contact /> },
        
        {path: "settings", element: <Settings />, children: [
            { path: "", element: <Web /> },
            { path: "mobile", element: <Mobile /> },
          ],
        },

        { path: "*", element: <NotFound /> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={routs}></RouterProvider>
    </>
  );

  /*   let [count, setCount] = useState(10);
  let [userName, setUserName] = useState("iti");


    useEffect(() => {
      
    }, []);


    useLayoutEffect(()=>{
      
    })



  useEffect(() => {
    //component did mounted
    console.log("component did mount");
  }, []);




  useEffect(() => {
    //component did mounted
    console.log("count changed");
  }, [count]);


  useEffect(() => {
    //component did mounted
    console.log("name changed");
  }, [userName]);

  function changigng() {
    setCount(Math.random() * 100);
  }

  function changeName() {
    setUserName("kasem");
  }

  return (
    <>
          <div className="container">
        <h1 className="text-white">{userName}</h1>
        <h1 className="text-white">{count}</h1>
        <button className="btn btn-primary m-2" onClick={changigng}>
          change count
        </button>
        <button className="btn btn-primary m-2" onClick={changeName}>
          change name
        </button>
      </div>
      <ProductItem></ProductItem> 
    </>
  );
   */
}

export default App;
