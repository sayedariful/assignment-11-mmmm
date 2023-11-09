import { Link } from "react-router-dom";


const LogIns = () => {
    return (
        <div className="  px-3 md:px-4  text-gray-600">
      <div className=" bg-gray-200 p-4 rounded-lg dark:bg-neutral-900 dark:text-white ">
        <h1 className="text-4xl my-4   ">Login</h1>
        <form>
          <div className="space-y-4">
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email"
              className="p-2 px-3 w-full block bg-white rounded outline-none dark:bg-neutral-900 dark:text-white dark:border border-b-2 border-gray-400"
            />
            {/* password container */}
            
            {/* remember and forgot password */}
            <div className="flex justify-between items-center px-1">
              {/* remember me */}
              <div className="flex gap-2 items-center">
                <input type="checkbox" name="checkbox" />
                <p>Remember Me</p>
              </div>
              {/* forgot password */}
              <div className="">
                <p className="font-semibold text-pink-600 hover:underline cursor-pointer">
                  Forgot Password
                </p>
              </div>
            </div>

            <button
              type="submit"
              className="p-2 px-3 w-full   outline-none  btn btn-secondary border-none   text-lg"
            >
              Login
            </button>
            {/* dont have an account */}
          </div>
        </form>
        <div className="flex items-center justify-center gap-2 my-4">
          <p>Don't have an accoutn?</p>
          <p className="text-pink-600 hover:underline">
            <Link to="/register">Create an accoutn</Link>
          </p>
        </div>
        <div>
          <div className="flex justify-center items-center relative">
            <b className="w-full block border-b-2 border-white absolute"></b>
            <p className=" absolute z-10 p-2 bg-gray-200 text-center">Or</p>
          </div>
          <div className="flex gap-3 items-center justify-center my-5">
            <p className="text-2xl ">Login With:</p>
            
          </div>
        </div>
      </div>
    </div>
    );
};

export default LogIns;