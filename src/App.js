import React,{lazy, Suspense, useEffect, useState} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter , Outlet, RouterProvider} from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import Cart from "./components/Cart";
import appStore from "./utils/appStore";
import Footer from "./components/Footer";

// chunking
// code splitting
// dynamic bundling
// Lazy loading
// on demand loading
// dynamic import

const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () =>{
  //authentication
 const [userName, setUserInfo] = useState();

 useEffect(() => {
  const data ={
    name: "Deepa E V"
  };
 setUserInfo(data.name); 
 },[]);


    return (
      <Provider store={appStore}>
    <UserContext.Provider value={{loggedInUser: userName}}>
      <div className=" w-[1263px] min-h-screen flex flex-col">
        <div className="flex-grow">
        <Header/>
       <Outlet/>
        </div>
       
       <Footer/>
    </div>
    </UserContext.Provider>
    </Provider>
    );
};


const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Body />,
        },
        {
          path: "/about",
          element: (
            <Suspense fallback={<h1>Loading....</h1>}>
              <About />
            </Suspense>
          ),
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/restaurants/:resId",
          element: <RestaurantMenu />,
        },
        {
          path: "/cart",
          element: <Cart />
        }
      ],
      errorElement: <Error />,
    },
  ]);
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  
  root.render(<RouterProvider router={appRouter} />);