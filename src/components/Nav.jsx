import React,{useState} from 'react'
import { headerLogo } from '../assets/images'
import { hamburger, close} from '../assets/icons'
import { navLinks } from '../constants'
import SideBarMenu from './SideBarMenu'
import HeaderMenu from './HeaderMenu'

const Nav = () => {

    const[ show, setShow ] = useState(false)

    const handleMenu = () => {
        setShow(!show)
    }

  return (
    <>
      <header className="padding-x py-6 absolute w-full flex flex-row z-10">
        <nav className="w-full max-container flex flex-row z-40">
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
}

export default Nav
