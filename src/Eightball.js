import React from "react";
import { useState } from "react";
import "./Eightball.css";

const RESPONSES = [
  { msg: "It is certain.", color: "green" },
  { msg: "It is decidedly so.", color: "green" },
  { msg: "Without a doubt.", color: "green" },
  { msg: "Yes - definitely.", color: "green" },
  { msg: "You may rely on it.", color: "green" },
  { msg: "As I see it, yes.", color: "green" },
  { msg: "Most likely.", color: "green" },
  { msg: "Outlook good.", color: "green" },
  { msg: "Yes.", color: "green" },
  { msg: "Signs point to yes.", color: "goldenrod" },
  { msg: "Reply hazy, try again.", color: "goldenrod" },
  { msg: "Ask again later.", color: "goldenrod" },
  { msg: "Better not tell you now.", color: "goldenrod" },
  { msg: "Cannot predict now.", color: "goldenrod" },
  { msg: "Concentrate and ask again.", color: "goldenrod" },
  { msg: "Don't count on it.", color: "red" },
  { msg: "My reply is no.", color: "red" },
  { msg: "My sources say no.", color: "red" },
  { msg: "Outlook not so good.", color: "red" },
  { msg: "Very doubtful.", color: "red" },
]

/** Eightball application
 *
 * Props: messages: array of objects [{msg, color}, ...]
 *
 * State:
 *  - message: current message to be displayed
 *  - color: background color of eightball
 *
 * App -> Eightball
 */

function Eightball({ messages=RESPONSES }) {
  const initialResponse = { msg: "Think of a Question", color: "black" };

  const [response, setResponse] = useState(initialResponse);

  function setRandomResponse(){
    const rIdx = Math.floor(Math.random() * messages.length);
    setResponse(messages[rIdx]);
  }

  const style = {
    backgroundColor: response.color
  }

  return(
    <button className="Eightball" onClick={ setRandomResponse } style={ style }>
      <p className="Eightball-message">
        { response.msg }
      </p>
    </button>
  )
}

export default Eightball;