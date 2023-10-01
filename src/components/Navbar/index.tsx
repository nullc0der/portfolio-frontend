import { useState } from "react";
import * as classnames from "classnames";
import { NavLink } from "react-router-dom";
import { Code, FileText, Home, Send, Menu, X, type Icon } from "react-feather";

import styles from "./Navbar.module.css";

type NavbarItem = {
  name: string;
  link: string;
  icon: Icon;
};

const navbarItems: NavbarItem[] = [
  { name: "Home", link: "/", icon: Home },
  { name: "Projects", link: "/projects", icon: Code },
  { name: "Resume", link: "/resume", icon: FileText },
  { name: "Contact", link: "/contact", icon: Send },
];

export default function Navbar() {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  return (
    <div className={styles.container}>
      {!showMenu && (
        <div className="open-menu-btn">
          <Menu
            className="feather-icon"
            onClick={() => {
              setShowMenu(true);
            }}
          />
        </div>
      )}
      <div className="navbar-items">
        {navbarItems.map((navbarItem, index) => (
          <NavLink
            to={navbarItem.link}
            key={index}
            className={({ isActive }) =>
              classnames("navbar-item", { active: isActive })
            }
          >
            <navbarItem.icon size={16} className="feather-icon" />
            <span>{navbarItem.name}</span>
          </NavLink>
        ))}
      </div>
      <div className={classnames("navbar-menu", { show: showMenu })}>
        <div className="close-menu-btn">
          <X
            className="feather-icon"
            onClick={() => {
              setShowMenu(false);
            }}
          />
        </div>
        {navbarItems.map((navbarItem, index) => (
          <NavLink
            to={navbarItem.link}
            key={index}
            className={({ isActive }) =>
              classnames("navbar-menu-item", { active: isActive })
            }
          >
            <navbarItem.icon size={24} className="feather-icon" />
            <span>{navbarItem.name}</span>
          </NavLink>
        ))}
      </div>
    </div>
  );
}
