import React from "react";
import{ useSelector, useDispatch } from "react-redux";

import Sidebar from "./Sidebar";
import NothingSelected from "./NothingSelected";
import NoteContainer from "./../notes/NoteContainer";
function JournalScreen() {

	const { active:noteActive } = useSelector(state=>(state.notes));
  return (
    <div className="journal__main-content">
      <Sidebar />

      <main>
        {!active ?(<NothingSelected />):(<NoteContainer />)}
      </main>
    </div>
  );
}

export default JournalScreen;
