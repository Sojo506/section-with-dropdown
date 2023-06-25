import styles from "./navbarStyles.module.css";
import { useState } from "react";
import logo from "../../assets/logo.svg";
import menuOpen from "../../assets/icon-menu.svg";
import menuClosed from "../../assets/icon-close-menu.svg";
import DropdownContainer from "../dropDown/DropDownContainer";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen((prev) => !prev);
  }

  return (
    <header className={styles.header}>
      <img src={logo} alt="logo" />

      <nav className={styles.nav}>
        {/* MOBILE */}
        <div onClick={toggleMenu} className={styles.nav__menu}>
          {isOpen ? (
            <img
              className={styles.nav__img}
              src={menuClosed}
              alt="menu closed"
            />
          ) : (
            <img className={styles.nav__img} src={menuOpen} alt="menu open" />
          )}
        </div>
      </nav>

      {/* DESKTOP */}
      <div className={styles.menuDesktop}>
        <DropdownContainer />
      </div>

      {/* MOBILE */}
      {isOpen && (
        <div className={styles.menuMobile}>
          <DropdownContainer />
        </div>
      )}
    </header>
  );
};

export default Navbar;
