import React from "react";
import { NavLink } from "react-router"; // fixed incorrect import
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <div className="w-full bg-white navbar mt-2 px-4 md:px-8 lg:px-16 ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52"
          >
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/course">Course</NavLink>
            </li>
          </ul>
        </div>
        <img
          className="h-10 mx-2 md:h-12 w-auto object-contain"
          src={logo}
          alt="Logo"
        />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `relative px-2 py-1 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-indigo-600 
     after:transition-transform after:duration-300 after:w-full after:origin-center 
     ${isActive ? "after:scale-x-100" : "after:scale-x-0"}`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/course"
            className={({ isActive }) =>
              `relative px-2 py-1 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-indigo-600 
     after:transition-transform after:duration-300 after:w-full after:origin-center 
     ${isActive ? "after:scale-x-100" : "after:scale-x-0"}`
            }
          >
            Course
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `relative px-2 py-1 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-indigo-600 
     after:transition-transform after:duration-300 after:w-full after:origin-center 
     ${isActive ? "after:scale-x-100" : "after:scale-x-0"}`
            }
          >
            About
          </NavLink>
        </ul>
      </div>
      <div className="navbar-end">
        <button
          className="
    px-5 py-2 
    cursor-pointer 
    rounded-full 
    bg-gradient-to-r 
    from-indigo-600 
    to-blue-500 
    text-white 
    font-semibold 
    shadow-lg
    hover:shadow-xl
    hover:from-indigo-700 
    hover:to-blue-600 
    transform 
    hover:scale-105 
    transition-all 
    duration-300 
    ease-in-out
    active:scale-95
    active:shadow-md
    focus:outline-none
    focus:ring-2
    focus:ring-blue-400
    focus:ring-opacity-50
  "
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Navbar;
