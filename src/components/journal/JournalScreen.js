import React from "react";

import Sidebar from "./Sidebar";
import NothingSelected from './NothingSelected'
import NoteContainer from './../notes/NoteContainer'
function JournalScreen() {
  return (
    <div className="journal__main-content">
      <Sidebar />

      <main>

      <NoteContainer />
       </main>
    </div>
  );
}
      // <NothingSelected />

export default JournalScreen;
