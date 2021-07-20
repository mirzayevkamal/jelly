import { useState } from "react";
import { useHistory } from "react-router";

import Modal from "../../../components/modal";
import "./index.css";

var converter = require("number-to-words");

export default function StartAuction() {
  const history = useHistory();

  //Set modal show
  const [showModal, setShowModal] = useState(true);
  const handleShowModal = (e) => {
    setShowModal(true);
  };

  //selected token set
  const [selectedImage, setSelectedImage] = useState("./images/butterfly.svg");

  //Set sale tokens
  const [auctionTokens, setAuctionTokens] = useState([
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

  //Set data
  const [days, setDays] = useState(1);
  const [hours, setHours] = useState(1);
  const [minutes, setMinutes] = useState(1);

  return (
    <Modal
      top="132px"
      image={selectedImage}
      showModal={showModal}
      setShowModal={handleShowModal}
    >
      <div className="start-auction">
        <h1>SET AUCTION DURATION</h1>
        <div className="start-auction__inputs">
          <div className="start-auction__input">
            <p>Days</p>
            <input
              type="number"
              value={days}
              onChange={(e) => setDays(e.target.value)}
            />
          </div>
          <div className="start-auction__input">
            <p>Hours</p>
            <input
              type="number"
              value={hours}
              onChange={(e) => setHours(e.target.value)}
            />
          </div>
          <div className="start-auction__input">
            <p>Minutes</p>
            <input
              type="number"
              value={minutes}
              onChange={(e) => setMinutes(e.target.value)}
            />
          </div>
        </div>
        <div className="start-auction__text">
          <p>
            {converter.toWords(auctionTokens.length)}
            <span> [{auctionTokens.length}] </span> token will be auctioned
          </p>
        </div>
        <button
          onClick={() => {
            setShowModal(false);
            history.push("/profile");
          }}
          className="start-auction__button"
        >
          <p>Start</p>
          <span>Auction</span>
        </button>
      </div>
    </Modal>
  );
}
