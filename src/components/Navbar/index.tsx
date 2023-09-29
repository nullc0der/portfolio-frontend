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
        <div className="feather-icon open-menu-btn">
          <Menu
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
            <div className="feather-icon">
              <navbarItem.icon size={14} />
            </div>
            <span>{navbarItem.name}</span>
          </NavLink>
        ))}
      </div>
      <div className={classnames("navbar-menu", { show: showMenu })}>
        <div className="feather-icon close-menu-btn">
          <X
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
            <div className="feather-icon">
              <navbarItem.icon size={22} />
            </div>{" "}
            <span>{navbarItem.name}</span>
          </NavLink>
        ))}
      </div>
    </div>
  );
}
