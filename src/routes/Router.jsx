import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import About from "../pages/About";
import ErrorPage from "../pages/ErrorPage";
import Course from "../pages/Course";
import Home from "../pages/Home";

const router = createBrowserRouter([
  {
    path: '/',
    Component: MainLayout,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home/>,
        index:true,
      },
      {
        path: '/about',
        element: <About/>,
      },
      {
        path: '/course',
        element: <Course/>,
      },
      
    ],
  },
]);
export default router;
