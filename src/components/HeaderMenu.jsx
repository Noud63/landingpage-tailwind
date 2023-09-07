import React from 'react'


const HeaderMenu = ({navLinks}) => {
  return (
      <ul className="flex-1 flex justify-end items-center gap-16 max-lg:hidden">
        {navLinks.map((item) => (
          <li key={item.label} className="border-2 border-coral-red text-coral-red px-6 py-1 rounded-full shadow-xl">
            <a
              href={item.href}
              className="font-montserrat leading-normal text-md"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    
  );
}

export default HeaderMenu
