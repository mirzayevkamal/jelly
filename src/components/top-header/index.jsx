import { Link, NavLink } from "react-router-dom";
import { CgMenuGridR } from "react-icons/cg";
import { FaUserCog } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";

import "./index.css";

export default function TopHeader() {
  const links = [
    {
      id: 1,
      name: "Flutter Collection",
      link: "/collections/flutter",
    },
    {
      id: 2,
      name: "Butterfly Collection",
      link: "/collections/butterfly",
    },
    {
      id: 3,
      name: "fAQ",
      link: "/faq",
    },
    {
      id: 4,
      name: "Terms & Conditions",
      link: "/flutter",
    },
  ];

  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    if (showMobileMenu) {
      document.body.style.height = "70vh";
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.height = "auto";
      document.body.style.overflow = "unset";
    }
  }, [showMobileMenu]);

  //Handle close outside click
  const mobileMenu = useRef();
  const mobileMenuIcon = useRef();
  useOutsideAlerter(mobileMenu, mobileMenuIcon);

  function useOutsideAlerter(ref, refIcon) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (
          ref.current &&
          !ref.current.contains(event.target) &&
          refIcon.current &&
          !refIcon.current.contains(event.target)
        ) {
          setShowMobileMenu(false);
        }
      }

      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref, refIcon]);
  }

  return (
    <div className="top-header">
      <div className="top-header__logo">
        <Link to="/">
          <img alt="" src="./images/logo.svg"></img>
        </Link>
      </div>
      <div className="top-header__menu">
        <ul>
          {links.map((link) => {
            return (
              <li key={`menu-list-${link.id}`}>
                <NavLink key={`menu-link-${link.id}`} to={link.link}>
                  {link.name}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
      <AnimatePresence>
        {showMobileMenu && (
          <div className="top-header__menu-mobile">
            <motion.ul
              ref={mobileMenu}
              initial={{ y: -700 }}
              animate={{ y: 0 }}
              transition={{ stiffness: 100, type: "tween" }}
              exit={{ y: -700 }}
            >
              {links.map((link) => {
                return (
                  <li key={`menu-mobile-list-${link.id}`}>
                    <NavLink
                      onClick={() => setShowMobileMenu(false)}
                      key={`menu-mobile-link-${link.id}`}
                      to={link.link}
                    >
                      {link.name}
                    </NavLink>
                  </li>
                );
              })}
            </motion.ul>
          </div>
        )}
      </AnimatePresence>

      <div className="top-header__account">
        <button>
          <Link to="/favorites">
            <img alt="" src="./icons/favorites.svg"></img>
          </Link>
        </button>
        <button>
          <Link to="/profile">
            <img alt="" src="./icons/user.svg"></img>
          </Link>
        </button>
        <button>
          <Link to="/profile">
            <FaUserCog />
          </Link>
        </button>
        <button
          ref={mobileMenuIcon}
          className="top-header__hamburger"
          onClick={() => {
            setShowMobileMenu(!showMobileMenu);
          }}
        >
          <CgMenuGridR size="30px" />
        </button>
      </div>
    </div>
  );
}
