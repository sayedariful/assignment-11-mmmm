import { Navigate, useLocation } from "react-router-dom";
import DynamicAuthProvider from "../../Utility/DynamicAuthProvider";

const PrivetRoute = ({children}) => {
    const { user, loading } = DynamicAuthProvider();
  const location = useLocation();
  if (loading) {
    return (
      <div className="fixed top-0 left-0 w-full h-[100vh] bg-gray-800 flex items-center justify-center flex-col gap-2 z-50">
        <span className="text-2xl text-white">Loading...</span>
        <span className="loading loading-spinner text-secondary"></span>
      </div>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate state={location?.state} to={"/register"}></Navigate>;
};

export default PrivetRoute;