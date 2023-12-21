import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Login from "../Pages/Login";
import Register from "../Pages/Register";

const router = createBrowserRouter([
    {
      path: "/",
      element:<Root></Root>,
      children:[
        {
            path: "/",
            element:<Home></Home>
        },
        {
            path:"/about",
            element:<About></About>
        },
        {
            path:"/contact",
            element:<Contact></Contact>
        },
        {
          path:"/login",
          element:<Login></Login>
        }
        ,
        {
          path:"/register",
          element:<Register></Register>
        }
      ]
    },
  ]);
  export default router;