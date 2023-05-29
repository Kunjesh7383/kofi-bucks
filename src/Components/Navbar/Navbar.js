import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header class="text-gray-600 body-font">
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <img src="/logo192.png" alt="bla" style={{ width: "2rem" }} />
        </a>
        <nav class="md:ml-auto md:mr-auto flex flex-wrap gap-10 items-center text-base justify-center">
          <NavLink class="mr-5 hover:text-gray-900" to="/">
            Home
          </NavLink>
          <NavLink class="mr-5 hover:text-gray-900" to="/order">
            Order Now{" "}
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
