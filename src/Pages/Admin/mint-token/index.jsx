import { useState } from "react";
import { useHistory } from "react-router";
import Modal from "../../../components/modal";

import "./index.css";

export default function MintToken() {
  const history = useHistory();

  //Set modal show
  const [showModal, setShowModal] = useState(true);
  const handleShowModal = (e) => {
    setShowModal(e);
  };

  //set stages
  const stages = [
    {
      id: 1,
      name: "stage01",
    },
    {
      id: 2,
      name: "stage02",
    },
    {
      id: 3,
      name: "stage03",
    },
    {
      id: 4,
      name: "stage04",
    },
  ];

  //stage change handling
  const [stage, setStage] = useState(1);
  const handleStageChange = () => {
    if (stage === 4) {
      setShowModal(false);
      history.push("/profile");
    }
    setStage(stage + 1);
  };

  //Handle token image on click
  const [tokenImage, setTokenImage] = useState("./images/flutter.svg");
  const [isSelected, setIsSelected] = useState(null);

  //Handle uploaded image preview set
  const [imagePreview, setImagePreview] = useState(null);
  const handleImagePrev = (e) => {
    setImagePreview(URL.createObjectURL(e.files[0]));
  };

  //Set input heigh automatically
  const auto_height = (e) => {
    e.style.height = "36px";
    e.style.height = e.scrollHeight + "px";
  };

  //Set values
  const [tokenName, setTokenName] = useState(null);
  const [tokenDescription, setTokenDescription] = useState(null);

  const [tokenLink, setTokenLink] = useState(null);
  const [tokenLinkFull, setTokenLinkFull] = useState(null);

  const [accessCode, setAccessCode] = useState(null);
  const [accessCodeFull, setAccessCodeFull] = useState(null);

  const [optional, setOptional] = useState(null);
  const [optionalFull, setOptionalFull] = useState(null);

  const handleContinue = () => {
    if (stage === 1 || stage === 2) {
      handleStageChange();
    } else if (stage === 3)
      if (tokenName === null) {
        document.querySelector(".stage-three__name").classList.add("invalid");
      } else if (tokenDescription === null) {
        document
          .querySelector(".stage-three__description")
          .classList.add("invalid");
      } else {
        handleStageChange();
      }

    if (stage === 4) {
      if (accessCode === null) {
        document.querySelector(".code").classList.add("invalid");
      } else if (accessCodeFull === null) {
        document.querySelector(".code-full").classList.add("invalid");
      }
      if (tokenLink === null) {
        document.querySelector(".link").classList.add("invalid");
      } else if (tokenLinkFull === null) {
        document.querySelector(".link-full").classList.add("invalid");
      }
      if (optional === null) {
        document.querySelector(".optional").classList.add("invalid");
      } else if (optionalFull === null) {
        document.querySelector(".optional-full").classList.add("invalid");
      } else {
        handleStageChange();
      }
    }
  };

  return (
    <Modal
      image={tokenImage}
      showModal={showModal}
      setShowModal={handleShowModal}
    >
      {stage === 1 && (
        <div className="stage-one">
          <h1>Choose a collection</h1>
          <div className="stage-one__buttons">
            <div className="stage-one__buttons-center">
              <button
                className={isSelected === "flutter" ? "isSelected" : ""}
                onClick={() => {
                  setTokenImage("./images/flutter.svg");
                  setIsSelected("flutter");
                }}
                onMouseEnter={() => {
                  if (isSelected === "butterfly") {
                    return;
                  } else {
                    setTokenImage("./images/flutter.svg");
                  }
                }}
              >
                Flutter
              </button>
              <button
                className={isSelected === "butterfly" ? "isSelected" : ""}
                onClick={() => {
                  setTokenImage("./images/butterfly.svg");
                  setIsSelected("butterfly");
                }}
                onMouseEnter={() => {
                  if (isSelected === "flutter") {
                    return;
                  } else {
                    setTokenImage("./images/butterfly.svg");
                  }
                }}
              >
                Butterfly
              </button>
            </div>
          </div>
        </div>
      )}
      {stage === 2 && (
        <div className="stage-two">
          <h1>Upload a file</h1>
          <div className="stage-two__upload">
            <img src={imagePreview} />
            <input
              onChange={(e) => handleImagePrev(e.target)}
              id="file"
              type="file"
            />
          </div>
          <label className="stage-two__button" htmlFor="file">
            Upload
          </label>
        </div>
      )}
      {stage === 3 && (
        <div className="stage-three">
          <h1>Enter A Name</h1>
          <input
            value={tokenName}
            onChange={(e) => setTokenName(e.target.value)}
            className="stage-three__name"
          />
          <h1>Enter a Description</h1>
          <textarea
            value={tokenDescription}
            onChange={(e) => {
              setTokenDescription(e.target.value);
              auto_height(e.target);
            }}
            rows="3"
            className="stage-three__description"
          />
        </div>
      )}
      {stage === 4 && (
        <div className="stage-four">
          <h1>ENTER SECRET DATA [OPTIONAL]</h1>
          <div className="stage-four__inputs">
            <input
              value={tokenLink}
              onChange={(e) => {
                setTokenLink(e.target.value);
                if (e.target.classList.value.includes("invalid")) {
                  e.target.classList.remove("invalid");
                }
              }}
              placeholder="DESCRIPTION:"
              className="stage-four__input-short link"
            />
            <input
              value={tokenLinkFull}
              onChange={(e) => {
                console.log(tokenLinkFull);
                setTokenLinkFull(e.target.value);
                if (e.target.classList.value.includes("invalid")) {
                  e.target.classList.remove("invalid");
                }
              }}
              placeholder="LINK/CODE/VALUE"
              className="stage-four__input-long link-full"
            />
          </div>
          <div className="stage-four__inputs">
            <input
              value={accessCode}
              onChange={(e) => {
                setAccessCode(e.target.value);
                if (e.target.classList.value.includes("invalid")) {
                  e.target.classList.remove("invalid");
                }
              }}
              className="stage-four__input-short code"
              placeholder="-"
            />
            <input
              value={accessCodeFull}
              onChange={(e) => {
                setAccessCodeFull(e.target.value);
                if (e.target.classList.value.includes("invalid")) {
                  e.target.classList.remove("invalid");
                }
              }}
              className="stage-four__input-long code-full"
              placeholder="-"
            />
          </div>
          <div className="stage-four__inputs">
            <input
              value={optional}
              onChange={(e) => {
                setOptional(e.target.value);
                if (e.target.classList.value.includes("invalid")) {
                  e.target.classList.remove("invalid");
                }
              }}
              className="stage-four__input-short optional"
              placeholder="-"
            />
            <input
              value={optionalFull}
              onChange={(e) => {
                setOptionalFull(e.target.value);
                if (e.target.classList.value.includes("invalid")) {
                  e.target.classList.remove("invalid");
                }
              }}
              className="stage-four__input-long optional-full"
              placeholder="-"
            />
          </div>
        </div>
      )}
      <button onClick={handleContinue} className="mint-button">
        {stage !== 4 ? (
          "Continue"
        ) : (
          <>
            <p>Mint</p>
            <span>Token</span>
          </>
        )}
      </button>
    </Modal>
  );
}
