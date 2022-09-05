import React, { useState } from "react";
import { Link } from "react-router-dom";
import $ from "jquery";
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";

import "../../styles/scss/TopNavbarSass.scss";

const TopNavbar = () => {
  $(document).ready(function () {
    var scrollTop = 0;
    $(window).scroll(function () {
      scrollTop = $(window).scrollTop();
      if (scrollTop >= 112) {
        $("#nav").addClass("navbar-custom");
      } else if (scrollTop < 112) {
        $("#nav").removeClass("navbar-custom");
      }
    });
  });

  const [arrowIcons, setArrowIcons] = useState(false);

  const openDropdownMenu = () => {
    if (arrowIcons === false) {
      setArrowIcons(true);
    } else {
      setArrowIcons(false);
    }
  };

  const closeDropdownMenu = () => {
    if (arrowIcons !== true) {
      setArrowIcons(true);
    } else {
      setArrowIcons(false);
    }
  };

  return (
    <>
      <nav id="nav" className="flex bg-yellow-400 p-4">
        <ul className="flex ml-11">
          <li
            onMouseEnter={closeDropdownMenu}
            className="ml-5 font-medium select-none"
          >
            <Link to={"/"}>Home</Link>
          </li>
          <li
            onMouseOver={openDropdownMenu}
            onMouseLeave={closeDropdownMenu}
            className="ml-5 font-medium select-none "
          >
            <Link className="flex items-center" to={"#"}>
              Sweets{" "}
              {arrowIcons ? (
                <RiArrowUpSLine className="custom-arrow text-sm" />
              ) : (
                <RiArrowDownSLine className="custom-arrow text-sm" />
              )}
            </Link>
          </li>
          <li className="ml-5 font-medium select-none">
            <Link to={"/namkeen"}>Namkeen</Link>
          </li>
          <li className="ml-5 font-medium select-none">
            <Link to={"/rajasthani-delight"}>Rajasthani Delight</Link>
          </li>
          <li className="ml-5 font-medium select-none">
            <Link to={"/teej-rakhi-special"}>Teej & Rakhi Special</Link>
          </li>
          <li className="ml-5 font-medium select-none">
            <Link to={"/gift-shop"}>Gift Shop</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default TopNavbar;
