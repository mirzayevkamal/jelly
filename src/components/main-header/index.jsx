import { useState, useEffect, useRef } from "react";
import { RiMenuUnfoldFill } from "react-icons/ri";
import { motion, AnimatePresence } from "framer-motion";

import "./index.css";
import { Link } from "react-router-dom";

export default function MainHeader() {
  const links = [
    {
      id: 1,
      name: "Mint token",
      link: "/mint-token",
    },
    {
      id: 2,
      name: "Sell token",
      link: "/sell-token",
    },
    {
      id: 3,
      name: "Auction token",
      link: "/auction-token",
    },
    {
      id: 4,
      name: "Start sale",
      link: "/start-sale",
    },
    {
      id: 5,
      name: "Start auction",
      link: "/start-auction",
    },
    {
      id: 6,
      name: "Revoke token",
      link: "/revoke-token",
    },
  ];

  const [mainMenu, setMainMenu] = useState(false);

  useEffect(() => {
    if (mainMenu) {
      document.body.style.height = "70vh";
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.height = "auto";
      document.body.style.overflow = "unset";
    }
  }, [mainMenu]);

  //Handle close outside click
  const mainMenuRef = useRef();
  const mainMenuIcon = useRef();
  useOutsideAlerter(mainMenuRef, mainMenuIcon);

  function useOutsideAlerter(ref, refIcon) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (
          ref.current &&
          !ref.current.contains(event.target) &&
          refIcon.current &&
          !refIcon.current.contains(event.target)
        ) {
          setMainMenu(false);
        }
      }

      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref, refIcon]);
  }

  return (
    <div className="main-header">
      <button
        ref={mainMenuIcon}
        className="main-header__menu"
        onClick={() => {
          setMainMenu(!mainMenu);
        }}
      >
        <RiMenuUnfoldFill size="22px" />
      </button>
      <div className="main-header__links">
        {links.map((link) => {
          return (
            <Link key={`main-header-link-${link.id}`} to={link.link}>
              <li key={`main-header-${link.id}`}>{link.name}</li>
            </Link>
          );
        })}
      </div>
      <AnimatePresence>
        {mainMenu && (
          <motion.ul
            ref={mainMenuRef}
            initial={{ y: -700 }}
            animate={{ y: 0 }}
            transition={{ stiffness: 100, type: "tween" }}
            exit={{ y: -700 }}
          >
            {links.map((link) => {
              return (
                <Link key={`main-header-mobile-link-${link.id}`} to={link.link}>
                  <li
                    onClick={() => setMainMenu(false)}
                    key={`main-header-mobile-${link.id}`}
                  >
                    {link.name}
                  </li>
                </Link>
              );
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
