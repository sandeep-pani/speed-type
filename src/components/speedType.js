import React, { useState, useEffect } from "react";
import useKeyPress from "../hooks/useKeyPress";
import { generate } from "../utils/words";
import "./speedType.css";
import { currentTime } from "../utils/time";

var updatedInitialWords = generate();
function SpeedType() {
  const [initialWords, setInitialWords] = useState(updatedInitialWords);
  // let initialWords = generate();
  const [leftPadding, setLeftPadding] = useState(
    new Array(20).fill(" ").join("")
  );
  const [outgoingChar, setOutgoingChar] = useState("");
  const [currentChar, setCurrentChar] = useState(updatedInitialWords.charAt(0));
  const [incomingChar, setIncomingChar] = useState(
    updatedInitialWords.substring(1)
  );
  const [speedWpm, setSpeedWpm] = useState(0);
  const [startTime, setStartTime] = useState();
  const [charCount, setCharCount] = useState(0);
  const [wrongKeyCount, setWrongKeyCount] = useState(0);
  const [accuracy, setAccuracy] = useState(0);

  function initializeStates() {
    setLeftPadding(new Array(20).fill(" ").join(""));
    setInitialWords(updatedInitialWords);
    setOutgoingChar("");
    setCurrentChar(updatedInitialWords.charAt(0));
    setIncomingChar(updatedInitialWords.substring(1));
    setSpeedWpm(0);
    setStartTime();
    setCharCount(0);
    setWrongKeyCount(0);
    setAccuracy(0);
  }

  function selectNoOfWords() {
    var noOfWords = document.getElementById("no-of-words").value;
    updatedInitialWords = generate(parseInt(noOfWords));
    initializeStates();
    console.log("updatedInitialWords:", noOfWords, updatedInitialWords);
  }

  useKeyPress((key) => {
    let updatedOutgoingChar = outgoingChar;
    let updatedIncomingChar = incomingChar;

    // console.log("key,currentChar:", key, currentChar);

    var updatedWrongKeyCount = wrongKeyCount;
    var updatedCharCount = charCount;
    if (key === currentChar) {
      document.getElementById("current-char").className =
        "words current-char-correct";
      if (!startTime) {
        setStartTime(currentTime());
      }
      updatedCharCount = charCount + 1;
      setCharCount(updatedCharCount);
      // console.log("updatedCharCount:", updatedCharCount);

      setLeftPadding(leftPadding.substring(1));
      updatedOutgoingChar += currentChar;
      setOutgoingChar(
        updatedOutgoingChar.substring(updatedOutgoingChar.length - 20)
      );
      setCurrentChar(incomingChar.charAt(0));
      updatedIncomingChar = incomingChar.substring(1);
      setIncomingChar(updatedIncomingChar);
      if (charCount >= 5) {
        setSpeedWpm(charCount / 5 / ((currentTime() - startTime) / 60000));
      }
    } else if (
      charCount >= updatedWrongKeyCount &&
      incomingChar.length != 0 &&
      startTime
    ) {
      updatedWrongKeyCount = wrongKeyCount + 1;
      setWrongKeyCount(updatedWrongKeyCount);
      document.getElementById("current-char").className =
        "words current-char-wrong";
      // console.log(
      //   "updatedWrongKeyCount once wrong key pressed:",
      //   updatedWrongKeyCount
      // );
    }
    if (updatedCharCount >= 1) {
      setAccuracy(
        ((updatedCharCount - updatedWrongKeyCount) * 100) / updatedCharCount
      );
      // console.log(
      //   "uCharCount, uWrongKeyCount to calc accuracy:",
      //   updatedCharCount,
      //   updatedWrongKeyCount
      // );
    }
  });

  return (
    <>
      <div className="speed-type-container">
        <h6>
          Select no. of words:{"  "}
          <select
            name="no-of-words"
            id="no-of-words"
            className="no-of-words"
            onChange={selectNoOfWords}
          >
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="25">25</option>
            <option value="50">50</option>
          </select>
        </h6>

        <h6 className="stats-container">
          <span className="speed-type-speed">
            WPM: {Math.floor(speedWpm * 10) / 10}
          </span>
          <span className="speed-type-accuracy">
            Accuracy: {accuracy < 0 ? 0 : Math.floor(accuracy * 10) / 10}
          </span>
        </h6>
        <p className="type-words">
          <span className="words left-padding">{leftPadding}</span>
          <span className="words outgoing-char">{outgoingChar}</span>
          <span id="current-char" className="words current-char-correct">
            {currentChar}
          </span>
          <span className="words incoming-char">
            {incomingChar.substring(0, 20)}
          </span>
        </p>
        {/* <h4>Preview:</h4>
        <p className="words-preview">{initialWords}</p> */}
      </div>
    </>
  );
}

export default SpeedType;
