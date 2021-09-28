import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";

import Navbar from "./Navbar";
import useForm from "./../../hooks/useForm";
import { activeNote, startDeleteNote } from "../../actions/notes";

export default function NoteContainer() {
    const dispatch = useDispatch();
    const { active } = useSelector((state) => state.notes);
    const [stateValues, handleInputChange, reset] = useForm(active);
    const { title, summary, url } = stateValues;

    const noteActiveId = useRef(active.id);

    useEffect(() => {
        if (active.id !== noteActiveId.current) {
            reset(active);
            noteActiveId.current = active.id;
        }
    }, [active, reset]);

    useEffect(() => {
        dispatch(activeNote(stateValues.id, ...stateValues));
    }, [stateValues, dispatch]);

    const handleDeleted = () => {
        dispatch(startDeleteNote(active.id));
    };
    
    return (
        <div className="note-container">
            <Navbar />

            <div className="note__content">
                <input
                    type="text"
                    name="title"
                    className="note-title"
                    value={title}
                    onChange={handleInputChange}
                />

                <textarea
                    name="summay"
                    className="note__text"
                    value={summary}
                    onChange={handleInputChange}
                ></textarea>
                {url && (
                    <div name="" className="note__img">
                        <img src={url} alt={title} />
                    </div>
                )}
                <button onClick={handleDeleted}> Deleted </button>
            </div>
        </div>
    );
}
