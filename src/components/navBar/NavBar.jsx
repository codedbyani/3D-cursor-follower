import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/logo.svg";
import styles from "./navBar.module.scss";

const navPath = [
  {
    name: "Home",
    href: "#home",
  },
  {
    name: "What is GPT?",
    href: "#wgpt3",
  },
  {
    name: "Open AI",
    href: "#possibility",
  },
  {
    name: "Case studies",
    href: "#features",
  },
  {
    name: "Library",
    href: "#blog",
  },
];

const Links = ({ name, href }) => {
  return (
    <p>
      <a href={href}>{name}</a>
    </p>
  );
};

const NavBar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className={styles.gpt3__navbar}>
      <div className={styles.gpt3__navbar_links}>
        <div className={styles.gpt3__navbar_links_logo}>
          <img src={logo} alt="logo" />
        </div>
        <div className={styles.gpt3__navbar_links_container}>
          {navPath.map((link, index) => {
            return <Links key={index} name={link.name} href={link.href} />;
          })}
        </div>
      </div>
      <div className={styles.gpt3__navbar_sign}>
        <p>Sign in</p>
        <button>Sign up</button>
      </div>
      <div className={styles.gpt3__navbar_menu}>
        {toggle ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggle(false)}
          />
        ) : (
          <RiMenu3Line color="#fff" size={27} onClick={() => setToggle(true)} />
        )}
        {toggle && (
          <div
            className={`${styles.gpt3__navbar_menu_container} scale-up-center`}
          >
            <div className={styles.gpt3__navbar_menu_container_links}>
              {navPath.map((link, index) => {
                return <Links key={index} name={link.name} href={link.href} />;
              })}
              <div className={styles.gpt3__navbar_menu_container_links_sign}>
                <p>Sign in</p>
                <button>Sign up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
