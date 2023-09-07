import React, { useState, useEffect } from "react";
import { headerLogo } from "../assets/images";
import { hamburger, close } from "../assets/icons";
import { navLinks } from "../constants";
import SideBarMenu from "./SideBarMenu";
import HeaderMenu from "./HeaderMenu";

const Nav = () => {
  const [show, setShow] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleMenu = () => {
    setShow(!show);
  };

  const handleScroll = () => {
    const offset = window.scrollY;
    offset > 100 ? setScrolled(true) : setScrolled(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={
          scrolled
            ? "transform ease-in-out duration-500 -translate-y-full py-6 w-full flex flex-row fixed bg-slate-600 z-[999] border-b border-coral-red p-6 shadow-[0_0px_8px_8px_rgba(0,0,0,0.3)]"
            : "transform ease-in-out duration-500 translate-y-0 py-6 w-full flex flex-row fixed bg-slate-600 z-[999] border-b border-coral-red p-6 shadow-[0_0px_8px_8px_rgba(0,0,0,0.3)]"
        }
      >
        <nav className="w-full flex flex-row">
          <a href="/">
            <img src={headerLogo} alt="Logo" width={130} height={29} />
          </a>
          <HeaderMenu navLinks={navLinks} />
        </nav>
        <div className={"hidden max-lg:block"}>
          {!show ? (
            <img
              src={hamburger}
              alt="hamburger"
              width={35}
              height={35}
              onClick={handleMenu}
            />
          ) : (
            ""
          )}
        </div>
      </header>
      <SideBarMenu navLinks={navLinks} show={show} setShow={setShow} />
    </>
  );
};

export default Nav;
