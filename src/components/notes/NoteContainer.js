import React from "react";
import Navbar from "./Navbar";

export default function NoteContainer() {
  return (
    <div className="note-container">
      <Navbar />

      <div className="note__content">
        <input type="text" className="note-title" />

        <textarea name="" className="note__text"></textarea>
        <div name="" className="note__img"></div>
      </div>
    </div>
  );
}

// <input type="text" className='note-title'>
//
// </div>
