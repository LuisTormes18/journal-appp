import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { startSaveNote, startUploadingImg } from "./../../actions/notes";

const Navbar = () => {
    const dispatch = useDispatch();
    const { active } = useSelector((state) => state.notes);

    const handleSave = () => {
        dispatch(startSaveNote(active));
    };

    const handleFile = (e) => {
        const file = e.target.files[0];

        !!file && dispatch(startUploadingImg(file));
    };

    const handlePictureUpload = () => {
        document.getElementById("file").click();
    };

    return (
        <div className="note-container__navbar">
            <span>2001 8 14</span>
            <input id="file" name="file" type="file" onChange={handleFile} />
            <div>
                <button className="btn" onClick={handlePictureUpload}>
                    Picture
                </button>
                <button className="btn" onClick={handleSave}>
                    Save
                </button>
            </div>
        </div>
    );
};
export default Navbar;
