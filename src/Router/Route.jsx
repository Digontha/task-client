import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Dashboard from "../Pages/Dashboard";
import CreateTask from "../Pages/Dashboard/CreateTask";
import TodoList from "../Pages/Dashboard/TodoList";
import OnGoing from "../Pages/Dashboard/OnGoing";
import Completed from "../Pages/Dashboard/Completed";
import Update from "../Components/Update/Update";

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
    {
      path:"/dashboard",
      element:<Dashboard></Dashboard>,
      children:[
        {
          path:"/dashboard",
          element:<CreateTask></CreateTask>
        },
        {
          path:"/dashboard/todo",
          element:<TodoList></TodoList>
        },
        {
          path:"/dashboard/ongoing",
          element:<OnGoing></OnGoing>
        },
        {
          path:"/dashboard/completed",
          element:<Completed></Completed>
        },
        {
          path:"/dashboard/update/:id",
          element:<Update></Update>,
          loader:({params})=>fetch(`http://localhost:5000/completed/${params.id}`)
        }
      ]
    }
  ]);
  export default router;