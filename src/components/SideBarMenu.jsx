import React from 'react'
import { close } from "../assets/icons";

const SideBarMenu = ({navLinks, show, setShow}) => {

  const closeMenu = () => {
    setShow(false)
  }

  return (
    <>
      {show ? (
        <div
          className="absolute transition ease-in-out duration-1000 z-40 h-full top-0 right-0 w-[50%] bg-coral-red 
             flex flex-col lg:hidden max-sm:w-[100%] shadow-2xl"
        >
          <ul className="w-full flex-1 flex flex-col justify-start items-center gap-16">
            <img
              src={close}
              alt="close"
              width={40}
              height={40}
              className="mt-10"
              onClick={closeMenu}
            />
            {navLinks.map((item) => (
              <li
                key={item.label}
                onClick={closeMenu}
                className="bg-coral-red text-white border-2 border-white-400 w-40 h-10 flex justify-center items-center rounded-full shadow-md"
              >
                <a
                  href={item.href}
                  className="font-montserrat leading-normal text-lg texslate-gray"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="absolute top-0 -right-52"></div>
      )}
    </>
  );
}

export default SideBarMenu
