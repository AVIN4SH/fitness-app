import React, { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { Link } from "react-router-dom";
import GithubLogo from "../assets/GITHUBicon.png";
import AppLogo from "../assets/AppLogo.png";

function Header() {
  const [theme, setTheme] = useState("business");

  function handleThemeToggle() {
    setTheme((prevTheme) =>
      prevTheme === "business" ? "cupcake" : "business"
    );
  }
  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div className="navbar bg-base-100 sticky h-11 top-0 bg-opacity-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mx-3 w-52 px-2 shadow"
          >
            <li>
              <Link to={"/"}>Home</Link>
            </li>

            <li>
              <Link to={"/exercise/:id"}>Exercise</Link>
            </li>
          </ul>
        </div>
        <button className="px-2 mx-2 hover:scale-110 transition-transform">
          <Link to={"/"} className=" text-xl">
            <img src={AppLogo} className="w-12" alt="AppLogo" />
          </Link>
        </button>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-lg">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li></li>
          <li>
            <Link to={"/exercise"}>Exercise</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <button className="px-2 mx-2 hover:scale-110 transition-transform">
          <a
            className="text-xl"
            target="_blank"
            href="https://github.com/AVIN4SH"
          >
            <img
              src={GithubLogo}
              alt="Github Logo"
              className="w-8  bg-black rounded-full"
            />
          </a>
        </button>
        <button
          onClick={handleThemeToggle}
          className="px-2 mx-2 hover:scale-110 transition-transform"
        >
          {theme === "business" ? <FaSun size={24} /> : <FaMoon size={24} />}
        </button>
      </div>
    </div>
  );
}

export default Header;
