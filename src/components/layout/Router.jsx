import { createBrowserRouter } from "react-router-dom";
import Roots from "./Roots";
import Home from "../../pages/Home/Home";
import MyStudent from "../../pages/MyStudent/MyStudent";
import LogIn from "../../pages/LogIn/LogIn";
import Register from "../../pages/Register/Register";
import StudentUpdate from "../../pages/StudentUpdate/StudentUpdate";
import MarketingUpdate from "../../pages/Home/MarketingUpdate";
import MarketingDetails from "../../pages/Home/MarketingDetails";
import WhatTotcDetails from "../../pages/WhatTotcDetails/WhatTotcDetails";
import AssignmentSubmit from "../../pages/AssignmentSubmit/AssignmentSubmit";
import BookDetails from "../../pages/BookDetails/BookDetails";
import PrivetRoute from "./PrivetRoute";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots></Roots>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/student',
        element: <MyStudent></MyStudent>
      },
      {
        path: '/login',
        element: <LogIn></LogIn>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/update',
        element: <PrivetRoute>
          <StudentUpdate></StudentUpdate>
        </PrivetRoute>,
      },
      {
        path: '/marketingUpdate/:id',
        element: <MarketingUpdate></MarketingUpdate>,
        loader: ({params}) => fetch(`marketing.json/marketing/${params.id}`),
      },
      {
        path: '/marketingDetails',
        element: <PrivateRoute>
          <MarketingDetails></MarketingDetails>
        </PrivateRoute>,
      },
      {
        path: '/WhatTotcDetails',
        element: <WhatTotcDetails></WhatTotcDetails>
      },
      {
        path: '/assignmentSubmit',
        element: <PrivetRoute>
          <AssignmentSubmit></AssignmentSubmit>
        </PrivetRoute>
      },
      {
        path: '/bookDetails/:id',
        element: <BookDetails></BookDetails>,
        loader: () => fetch(`/books.json`)
      }
    ]
  },
]);

  export default router;