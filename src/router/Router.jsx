import { createBrowserRouter } from "react-router-dom";
import Home from "../page/Home";
import MainLout from "../laout/MainLout";


const Router = createBrowserRouter([
    {
      path: "/",
      element: <MainLout></MainLout>,
      children:[{
        path:"/",
        element:<Home></Home>
      }]
    },
  ]);

export default Router;