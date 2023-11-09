import { Navigate, useLocation } from "react-router-dom";
import DynamicAuthProvider from "../../Utility/DynamicAuthProvider";

const PrivateRoute = ({children}) => {
    const { user, loading } = DynamicAuthProvider();
    const location = useLocation();
    console.log(location.pathname);
    if (loading) {
      return (
        <div className="h-screen w-screen fixed top-0 left-0 bg-slate-300 flex items-center justify-center z-50 ">
          <p>
            <span className="loading w-14 loading-spinner text-secondary"></span>
          </p>
        </div>
      );
    }
    if (user) {
      return children;
    }
  
    return <Navigate  to="/register" state={location.pathname}
    ></Navigate>;
};

export default PrivateRoute;