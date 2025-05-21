import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import About from "../pages/About";
import ErrorPage from "../pages/ErrorPage";
import Course from "../pages/Course";
import Home from "../pages/Home";
import CourseDetails from "../components/CourseDetails";
import CourseEnroll from "../pages/CourseEnroll";

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
      {
        path: '/course-details',
        element: <CourseDetails/>,
      },
      {
        path: '/course-enroll',
        element: <CourseEnroll/>,
      },
      
    ],
  },
]);
export default router;
