import React from "react";
import $ from "jquery";

import "../../styles/scss/HeaderTop.scss";

import SearchBar from "./SearchBar";
import TopNavbar from "./TopNavbar";
import UserLogin from "./UserLogin";
import { Link } from "react-router-dom";

function HeaderTop() {
  $(document).ready(function () {
    var scrollTop = 0;
    $(window).scroll(function () {
      scrollTop = $(window).scrollTop();
      if (scrollTop >= 167) {
        $(".header-top").addClass("scrolled-header");
      } else if (scrollTop < 167) {
        $(".header-top").removeClass("scrolled-header");
      }
    });
  });

  return (
    <>
      <div className="header-top">
        {/* header top */}
        <header className="flex justify-between p-4">
          {/* LMB Logo */}
          <div className="logo cursor-pointer">
            <Link to="/">
              <img
                loading="lazy"
                src="https://lmbsweets.com/wp-content/uploads/2020/09/LMBLogoUpdated.png.webp"
                alt="lmbsweets"
              />
            </Link>
          </div>
          {/* right section for search bar, account */}
          <aside id="aside-container" className="flex mr-48 items-center">
            <SearchBar />
            <UserLogin />
          </aside>
        </header>
        {/* Top Navbar */}
        <TopNavbar />
      </div>
    </>
  );
}

export default HeaderTop;
