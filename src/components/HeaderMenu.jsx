import React from 'react'


const HeaderMenu = ({navLinks}) => {
    
  return (
      <ul className="flex-1 flex justify-end items-center gap-16 max-lg:hidden">
        {navLinks.map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              className="font-montserrat leading-normal text-lg text-white"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    
  );
}

export default HeaderMenu
