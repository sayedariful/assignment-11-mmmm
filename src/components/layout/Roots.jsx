import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Footer from "../Footer/Footer";
import NavBar from "../Headers/Navbar/Navbar";


const Roots = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div>
        <NavBar></NavBar>
      </div>
      <div>
        <Outlet></Outlet>
      </div>
      <div className="bg-[#252641]">
        <Footer></Footer>
      </div>
      <div>
        <Toaster position="top-center" reverseOrder={false} />
      </div>
    </div>
  );
};

export default Roots;
