import React from "react";
import {useDispatch}from "react-redux";

import JournalEntries from "./JournalEntries";
import { starLogout } from "./../../actions/auth";
function Sidebar() {

const dispatch = useDispatch();

  const handleLogout =  ()=>{
    console.log('click logout')
      dispatch(starLogout());
  }

  return (
    <aside className="journal__sidebar">
      <div className="journal__sidebar-navbar mt-5 mb-5">
        <h3>
          <i className="far fa-moon"></i>
          <span>Luis Tormes</span>
        </h3>
        <button className="btn" onClick={handleLogout}>Logout</button>
      </div>
      <div className="journal__new-entry pointer">
        <i className="fa fa-calendar-plus fa-3x mb-1"></i>
        <span>New Entry </span>
      </div>
      <JournalEntries />
    </aside>
  );
}

export default Sidebar;
