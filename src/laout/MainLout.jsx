import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Toaster } from "react-hot-toast";


const MainLout = () => {
    return (
        <div className="px-14">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Toaster/>
            <Footer></Footer>

        </div>
    );
};

export default MainLout;