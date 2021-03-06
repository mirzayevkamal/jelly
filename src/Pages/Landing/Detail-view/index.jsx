import { useState, useEffect } from "react";
import EmailInput from "../../../components/email-input";

import Modal from "../../../components/modal";

import "./index.css";

export default function DetailView() {
  const [showModal, setShowModal] = useState(false);
  const handleShowModal = (e) => {
    setShowModal(e);
  };

  const [email, setEmail] = useState("");
  const handleEmailInput = (email) => {
    setEmail(email);
  };

  const [email2, setEmail2] = useState("");
  const handleEmailInput2 = (email) => {
    setEmail2(email);
  };

  const handleSubmit = () => {
    if (email.length > 5 && email === email2) {
      setShowModal(false);
    } else {
      document
        .querySelectorAll(".email-input__input")[1]
        .classList.add("invalid-input");
      alert("E-mails should be the same");
    }
  };

  // useEffect(() => {
  //   if (showModal) {
  //     document.body.style.height = "70vh";
  //     document.body.style.overflow = "hidden";
  //   } else {
  //     document.body.style.height = "auto";
  //     document.body.style.overflow = "unset";
  //   }
  // }, [showModal]);

  const [bidModal, setBidModal] = useState(0);

  //Set token price
  const [tokenPrice, setTokenPrice] = useState("1");

  return (
    <>
      <div className="detail-view">
        <div className="detail-view__image">
          <img alt="" src="./images/item.png"></img>
        </div>
        <div className="detail-view__details">
          <p className="detail-view__time">19:02:03</p>
          <div className="detail-view__name">
            <h1>SIMP SHIRT</h1>
            <span>ID-1</span>
          </div>
          <div className="detail-view__props">
            <p>
              COLOR: <span>ORANGE-WHITE</span>
            </p>
            <p>
              Material: <span>100% Cotton</span>
            </p>
            <p>
              Rarity: <span>six[6]</span>
            </p>
          </div>
          <p className="detail-view__description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            mattis odio ex, vitae ultrices est pretium vitae. Integer sem ipsum,
            ultricies et nulla quis, pretium tincidunt est. Proin sollicitudin
            id nisi ac rutrum. Nullam varius ipsum vitae lectus faucibus, id
            finibus tortor maximus. Integer vel blandit lectus, ac bibendum
            metus. Ut augue felis, semper nec est lobortis, bibendum
            pellentesque nulla.
          </p>
          <div className="detail-view__price">
            <p>
              Price:
              <span>
                2.354 ETH <span className="slash">//</span> $4245
              </span>
            </p>
          </div>
          <button
            onClick={() => setShowModal(true)}
            className="detail-view__button"
          >
            <p>Bid</p>
            <span>Now</span>
          </button>
        </div>
      </div>
      <Modal
        setShowModal={(e) => handleShowModal(e)}
        showModal={showModal}
        image="./images/flutter.svg"
      >
        {bidModal == 1 ? (
          <div style={{ paddingTop: "30px" }}>
            <EmailInput
              handleEmailInput={(e) => handleEmailInput(e)}
              label="ENTER YOUR MAIL"
              text="THE TOKEN YOU ARE BIDDING ON COMES WITH ACCESS-CODES, WHICH WE WILL
SEND TO YOUR MAIL-ADDRESS."
            />
            <EmailInput
              handleEmailInput={(e) => handleEmailInput2(e)}
              label="CONFIRM YOUR MAIL"
            />
          </div>
        ) : (
          <div className="detail-view__bid">
            <h1>SPECIFY BID AMOUNT</h1>
            <p>ENTER THE AMOUNT YOU WANT TO BID.</p>
            <div className="detail-view__input">
              <input
                type="number"
                value={tokenPrice}
                onChange={(e) => setTokenPrice(e.target.value)}
              />
              <span>ETH</span>
            </div>
          </div>
        )}
        {bidModal == 1 ? (
          <button onClick={handleSubmit} className="detail-view__modal-button">
            <p>Bid</p> <span>Now</span>
          </button>
        ) : (
          <button
            onClick={() => setBidModal(1)}
            className="detail-view__modal-button"
          >
            <p>Bid</p> <span>Now</span>
          </button>
        )}
      </Modal>
    </>
  );
}
