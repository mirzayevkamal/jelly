import { AnimatePresence, motion } from "framer-motion";
import { useRef, useEffect } from "react";
import { useHistory } from "react-router";

import "./index.css";

export default function Modal(props) {
  const modalRef = useRef();
  const history = useHistory();

  useOutsideAlerter(modalRef);

  function useOutsideAlerter(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          props.setShowModal(false);
          history.push("/profile");
        }
      }

      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  return props.showModal ? (
    <div className="modal" style={{ top: props.top }}>
      <div className="modal__bg"></div>
      <motion.div
        initial={{ y: -200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring" }}
        className="modal__body"
        ref={modalRef}
      >
        <div className="modal__image">
          <AnimatePresence>
            <motion.img
              alt=""
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ x: 100 }}
              src={props.image}
            />
          </AnimatePresence>
        </div>
        <div className="modal__content">{props.children}</div>
      </motion.div>
    </div>
  ) : null;
}
