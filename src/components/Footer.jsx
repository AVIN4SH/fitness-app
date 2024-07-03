import React from "react";
import AppLogo from "../assets/AppLogo.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer footer-center bg-base-300 text-base-content p-4">
      <aside>
        <p>
          <button className="px-2 hover:scale-110 transition-transform">
            <Link to={"/"} className=" text-xl">
              <img src={AppLogo} className="w-8 inline-block" alt="AppLogo" />
            </Link>
          </button>{" "}
          Copyright © {new Date().getFullYear()}
        </p>
      </aside>
    </footer>
  );
}

export default Footer;
