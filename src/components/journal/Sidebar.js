import React from "react";
import { useDispatch, useSelector } from "react-redux";

import JournalEntries from "./JournalEntries";
import { starLogout } from "./../../actions/auth";
import { starNewNote } from "./../../actions/notes";
function Sidebar() {
    const dispatch = useDispatch();
    const { name } = useSelector((state) => state.auth);

    const handleLogout = () => {
        dispatch(starLogout());
    };
    const handleNewEntry = () => {
        dispatch(starNewNote());
    };
    return (
        <aside className="journal__sidebar">
            <div className="journal__sidebar-navbar mt-5 mb-5">
                <h3>
                    <i className="far fa-moon"></i>
                    <span>{name}</span>
                </h3>
                <button className="btn" onClick={handleLogout}>
                    Logout
                </button>
            </div>

            <div
                className="journal__new-entry pointer"
                onClick={handleNewEntry}
            >
                <i className="fa fa-calendar-plus fa-3x mb-1"></i>
                <span>New Entry </span>
            </div>

            <JournalEntries />
        </aside>
    );
}

export default Sidebar;
