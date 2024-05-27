import React,{useState} from 'react'
import ToggleMode from './ToggleMode';

const HeaderMenu = ({navLinks}) => {

  const [darkMode, setDarkmode] = useState(false);

  return (
      <ul className={`flex-1 flex justify-end items-center gap-16 max-lg:hidden ${darkMode ? 'bg-slate-800' : 'bg-slate-600'}`}>
        <ToggleMode  setDarkmode={setDarkmode} darkMode={darkMode}/>
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
