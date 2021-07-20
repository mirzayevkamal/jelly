import { useState } from "react";
import { useHistory } from "react-router";

import Modal from "../../../components/modal";
import "./index.css";

var converter = require("number-to-words");

export default function StartSale() {
  const history = useHistory();

  //Set modal show
  const [showModal, setShowModal] = useState(true);
  const handleShowModal = (e) => {
    setShowModal(true);
  };

  //selected token set
  const [selectedImage, setSelectedImage] = useState("./images/butterfly.svg");

  //Set sale tokens
  const [saleTokens, setSaleTokens] = useState([
    {
      id: 1,
      name: "FLUTTER ID-2",
    },
    {
      id: 2,
      name: "FLUTTER ID-2",
    },
    {
      id: 3,
      name: "FLUTTER ID-2",
    },
    {
      id: 4,
      name: "FLUTTER ID-2",
    },
    {
      id: 5,
      name: "FLUTTER ID-2",
    },
    {
      id: 6,
      name: "FLUTTER ID-2",
    },
  ]);

  return (
    <Modal
      image={selectedImage}
      showModal={showModal}
      setShowModal={handleShowModal}
    >
      <div className="start-sale">
        <h1>Please Confirm</h1>
        <p>
          {converter.toWords(saleTokens.length)}
          <span> [{saleTokens.length}] </span> token will be put on sale
        </p>
        <ul>
          {saleTokens.map((item) => {
            return <li key={item.id}>{item.name}</li>;
          })}
        </ul>
        <button
          onClick={() => {
            setShowModal(false);
            history.push("/profile");
          }}
          className="start-sale__button"
        >
          <p>Start</p>
          <span>Sale</span>
        </button>
      </div>
    </Modal>
  );
}
