// import { Link, NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import DynamicAuthProvider from "../../../Utility/DynamicAuthProvider";
import toast from "react-hot-toast";
import DarkLightMode from "../../DarkLightMode";

const NavBar = () => {
  // const navLink = (
    // <>
    //   <li>
    //     <NavLink to="/">Home</NavLink>
    //   </li>
    //   <li>
    //     <NavLink to="/student">My Student</NavLink>
    //   </li>
    //   <li>
    //     <NavLink to="/register">Register</NavLink>
    //   </li>
    //   <li>
    //     <NavLink to="/login">LogIn</NavLink>
    //   </li>
    //   <li>
    //     <NavLink to="/logins">Log Ins</NavLink>
    //   </li>
    // </>
  // );
  const { user, userLogOut } = DynamicAuthProvider();
  const handleLogout = () => {
    userLogOut()
      .then(() => {
        toast.success("Log out !");
      })
      .catch((err) => {
        console.log(err);
        toast.error(`${err}`);
      });
  };
  const menu = (<>
      {/* ----------home---------- */}
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "btn btn-sm rounded-none capitalize font-semibold  bg-white hover:bg-white text-lg text-pink-700 underline"
              : "btn btn-sm rounded-none capitalize dark:bg-black dark:text-white bg-white hover:bg-white text-gray-500 text-lg"
          }
        >
          Home
        </NavLink>
      </li>

   

     

      {/* ----------register---------- */}
      <li>
        <NavLink
          to="/register"
          className={({ isActive }) =>
            isActive
              ? "btn btn-sm rounded-none capitalize font-semibold  bg-white hover:bg-white text-lg text-pink-700 underline"
              : "btn btn-sm rounded-none capitalize dark:bg-black dark:text-white text-gray-500 bg-white hover:bg-white text-lg "
          }
        >
          Register
        </NavLink>
      </li>
      {/* ----------Login---------- */}
      <li>
        <NavLink
          to="/login"
          className={({ isActive }) =>
            isActive
              ? "btn btn-sm rounded-none capitalize font-semibold  bg-white hover:bg-white text-lg text-pink-700 underline"
              : "btn btn-sm rounded-none capitalize dark:bg-black dark:text-white text-gray-500 bg-white hover:bg-white text-lg "
          }
        >
          Login
        </NavLink>
      </li>
   {/* ----------add product---------- */}
   <li>
        <NavLink
          to="/student"
          className={({ isActive }) =>
            isActive
              ? "btn btn-sm rounded-none capitalize font-semibold text-pink-700 underline bg-white hover:bg-white text-lg"
              : "btn btn-sm rounded-none capitalize  dark:bg-black dark:text-white bg-white hover:bg-white text-gray-500 text-lg"
          }
        >
          My Student
        </NavLink>
      </li>
      {/* ----------login---------- */}
      <li>
        <NavLink
          to="/update"
          className={({ isActive }) =>
            isActive
              ? "btn btn-sm rounded-none capitalize font-semibold bg-white hover:bg-white text-lg text-pink-700 underline"
              : "btn btn-sm rounded-none capitalize dark:bg-black dark:text-white text-gray-500 bg-white hover:bg-white text-lg "
          }
        >
          Student Update
        </NavLink>
      </li>
    </>

  );
  return (
    <div className="bg-white dark:bg-black text-gray-500 shadow mb-8">
      <div className=" flex justify-between items-center max-w-[1200px] mx-auto px-3 sm:px-5 py-3">
        {/* logo  */}
        <div>
          <Link to='/'>
          <figure>
            <img
              className="w-[150px] rounded-lg"
              src="https://i.ibb.co/sjnTkT4/logo.png"
              alt=""
            />
          </figure>
          </Link>
        </div>

        {/* dropdown mobaile menu*/}
        <div className="lg:hidden block">
          <div className="dropdown ">
            <label
              tabIndex={0}
              className="btn btn-sm btn-ghost lg:hidden bg-gray-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-5 h-5 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu gap-1 menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-lg dark:bg-neutral-900 dark:text-white dark:border bg-white w-52 right-0"
            >
              {menu}
              <div className="bg-white ">
                <div className="flex gap-4 justify-center items-center bg-gray-200 rounded p-1 ">
                  <div>
                    {user && user ? (
                      user?.photoURL ? (
                        <figure>
                          <img
                            className="w-6 h-6 rounded-full overflow-hidden "
                            src={user?.photoURL}
                            alt=""
                          />
                        </figure>
                      ) : (
                        <figure>
                          <img
                            className="w-6 h-6 rounded-full overflow-hidden "
                            src="https://i.ibb.co/ckz9v0d/user.png"
                            alt=""
                          />
                        </figure>
                      )
                    ) : (
                      <figure>
                        <img
                          className="w-6 h-6 rounded-full overflow-hidden "
                          src="https://i.ibb.co/ckz9v0d/user.png"
                          alt=""
                        />
                      </figure>
                    )}
                  </div>

                  {user ? (
                    <button
                      onClick={handleLogout}
                      className="btn btn-secondary btn-sm"
                    >
                      log out
                    </button>
                  ) : (
                    <Link to="/register" className="btn btn-secondary btn-sm">
                      Login
                    </Link>
                  )}
                </div>
              </div>
            </ul>
          </div>
        </div>

        {/* desktop menu */}
        <div className="hidden lg:block">
          <ul className="flex justify-center items-center text-lg">{menu}</ul>
        </div>

        {/* user profile  other */}
        <div className="lg:flex hidden gap-2 items-center">
          <div className="flex gap-2 items-center px-2">
            <DarkLightMode></DarkLightMode>
          </div>
          <div className=" dropdown dropdown-end text-black">
            <div className="rounded-3xl  flex gap-2 items-center  px-4 p-2 border-2 bg-white ">
              <button className="text-gray-600">
                <span>
                  <FaBars></FaBars>
                </span>
              </button>

              {user && user ? (
                user?.photoURL ? (
                  <figure>
                    <img
                      className="w-6 h-6 rounded-full overflow-hidden "
                      src={user?.photoURL}
                      alt=""
                    />
                  </figure>
                ) : (
                  <figure>
                    <img
                      className="w-6 h-6 rounded-full overflow-hidden "
                      src="https://i.ibb.co/ckz9v0d/user.png"
                      alt=""
                    />
                  </figure>
                )
              ) : (
                <figure>
                  <img
                    className="w-6 h-6 rounded-full overflow-hidden "
                    src="https://i.ibb.co/ckz9v0d/user.png"
                    alt=""
                  />
                </figure>
              )}
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content dark:bg-neutral-900 dark:text-white  bg-white rounded-box w-52 "
            >
              <li>
                <a className="justify-between">Profile</a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                {user ? (
                  <a onClick={handleLogout}>Logout</a>
                ) : (
                  <Link to="/login">Login</Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
