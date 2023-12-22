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
import TodoUpdate from "../Components/Update/todoUpdate";
import OngoingUpdate from "../Components/Update/ongoingUpdate";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

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
      element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children:[
        {
          path:"/dashboard",
          element:<PrivateRoute><CreateTask></CreateTask></PrivateRoute>
        },
        {
          path:"/dashboard/todo",
          element:<PrivateRoute><TodoList></TodoList></PrivateRoute>
        },
        {
          path:"/dashboard/ongoing",
          element:<PrivateRoute><OnGoing></OnGoing></PrivateRoute>
        },
        {
          path:"/dashboard/completed",
          element:<PrivateRoute><Completed></Completed></PrivateRoute>
        },
        {
          path:"/dashboard/update/:id",
          element:<Update></Update>,
          loader:({params})=>fetch(`http://localhost:5000/completed/${params.id}`)
        }
        ,
        {
          path:"/dashboard/todoupdate/:id",
          element:<TodoUpdate></TodoUpdate>,
          loader:({params})=>fetch(`http://localhost:5000/todo/${params.id}`)
        },
        {
          path:"/dashboard/ongoingupdate/:id",
          element:<OngoingUpdate></OngoingUpdate>,
          loader:({params})=>fetch(`http://localhost:5000/ongoing/${params.id}`)
        }
      ]
    }
  ]);
  export default router;