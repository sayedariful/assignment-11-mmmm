import { useContext } from "react";
import { AuthContext } from "../components/Provider/AuthProvider";





const DynamicAuthProvider = () => {
  const all = useContext(AuthContext);
  return all;
};

export default DynamicAuthProvider;
