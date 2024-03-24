import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";


const MainLout = () => {
    return (
        <div className="px-20">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLout;