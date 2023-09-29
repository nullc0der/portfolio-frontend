import { useState } from "react";
import * as classnames from "classnames";
import { NavLink } from "react-router-dom";
import { Code, FileText, Home, Send, type Icon, Menu, X } from "react-feather";

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
        <Menu
          className="feather-icon open-menu-btn"
          onClick={() => {
            setShowMenu(true);
          }}
        />
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
            <navbarItem.icon className="feather-icon" size={16} />{" "}
            <span>{navbarItem.name}</span>
          </NavLink>
        ))}
      </div>
      <div className={classnames("navbar-menu", { show: showMenu })}>
        <X
          className="feather-icon close-menu-btn"
          onClick={() => {
            setShowMenu(false);
          }}
        />
        {navbarItems.map((navbarItem, index) => (
          <NavLink
            to={navbarItem.link}
            key={index}
            className={({ isActive }) =>
              classnames("navbar-menu-item", { active: isActive })
            }
          >
            <navbarItem.icon className="feather-icon" size={24} />{" "}
            <span>{navbarItem.name}</span>
          </NavLink>
        ))}
      </div>
    </div>
  );
}
