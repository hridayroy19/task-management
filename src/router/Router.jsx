import { createBrowserRouter } from "react-router-dom";
import Home from "../page/Home";
import MainLout from "../laout/MainLout";
import SignUp from "../page/Signup";
import Login from "../page/Login";
import Profile from "../components/profile";




const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLout></MainLout>,
    children: [{
      path: "/",
      element: <Home></Home>
    } ,
    {
      path:"/profile",
      element:<Profile></Profile>

    }]
  },
  {
    path: "/login",
    element: <Login></Login>
  },
  {
    path: "/signup",
    element: <SignUp></SignUp>
  }
]);

export default Router;