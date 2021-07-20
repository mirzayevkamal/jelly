import { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useHistory } from "react-router";

import Modal from "../../../components/modal";
import "./index.css";

export default function RevokeToken() {
  const history = useHistory();

  //Set modal show
  const [showModal, setShowModal] = useState(true);
  const handleShowModal = (e) => {
    setShowModal(true);
  };

  //Tokens list
  const tokensList = [
    {
      id: "ID-1",
      name: "FLUTTER",
      image: "./images/flutter.svg",
    },
    {
      id: "ID-2",
      name: "BUTTERFLY",
      image: "./images/butterfly.svg",
    },
  ];

  const idList = [
    {
      id: "ID-1",
    },
    {
      id: "ID-2",
    },
  ];

  //selected token set
  const [selectedToken, setSelectedToken] = useState(tokensList[0]);
  const [selectedId, setSelectedId] = useState(idList[0]);

  //Dropdown outside click handler
  const [dropDownData, setDropDownData] = useState([]);
  const [showDropDown, setShowDropDown] = useState(false);
  const dropdownRef = useRef();
  useOutsideAlerter(dropdownRef);

  function useOutsideAlerter(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setShowDropDown(false);
        }
      }

      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  //Set token price
  const [tokenPrice, setTokenPrice] = useState("1");

  return (
    <Modal
      top="132px"
      image={selectedToken.image}
      showModal={showModal}
      setShowModal={handleShowModal}
    >
      <div className="revoke-token">
        <h1>Choose a token</h1>
        <div ref={dropdownRef} className="revoke-token__dropdown">
          <button
            onClick={() => {
              setTimeout(() => {
                setDropDownData(tokensList);
                setShowDropDown(!showDropDown);
              }, 100);
            }}
          >
            {selectedToken.name}
          </button>
          <button
            onClick={() => {
              setTimeout(() => {
                setDropDownData(idList);
                setShowDropDown(!showDropDown);
              }, 100);
            }}
          >
            {selectedId.id}
          </button>
          {showDropDown && (
            <AnimatePresence>
              <motion.ul
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 150 }}
              >
                {dropDownData.map((token) => {
                  return (
                    <li
                      onClick={() => {
                        if (token.name) {
                          setSelectedToken(token);
                        } else {
                          setSelectedId(token);
                        }
                        setShowDropDown(false);
                      }}
                    >
                      {token.name ? token.name : token.id}
                    </li>
                  );
                })}
              </motion.ul>
            </AnimatePresence>
          )}
        </div>

        <button
          onClick={() => {
            setShowModal(false);
            history.push("/profile");
          }}
          className="revoke-token__button"
        >
          <p>Revoke</p>
          <span>Token</span>
        </button>
      </div>
    </Modal>
  );
}
