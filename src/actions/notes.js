import Swal from "sweetalert2";
import { types } from "./../types/types";
import { db } from "../firebase/firebase-config";
import { loadNotes } from "../helpers/loadNotes";
import { fileUpload } from "./../helpers/fileUpload";

export const starNewNote = () => {
    return async (dispatch, getState) => {
        const { uid } = getState().auth;

        const newNote = {
            title: "",
            summary: "",
            date: new Date().getTime(),
        };

        const docRef = await db.collection(`${uid}/journal/notes`).add(newNote);
        
        dispatch(activeNote(docRef.id, newNote));
        dispatch(addNewNote(docRef.id, newNote));
    };
};

export const activeNote = (id, note) => {
    return {
        type: types.notesActive,
        payload: {
            id,
            ...note,
        },
    };
};
export const addNewNote = (id, note) => {
    return {
        type: types.notesAddNew,
        payload: { id, ...note },
    };
};
export const starLoadingNotes = async (uid) => {
    return async (dispatch) => {
        const notes = await loadNotes(uid);
        dispatch(setNotes(notes));
    };
};

export const setNotes = (notes) => {
    return {
        type: types.notesLoad,
        payload: notes,
    };
};

export const startSaveNote = (note) => {
    return async (dispatch, getState) => {
        const { uid } = getState().auth;

        !note.url && delete note.url;

        const noteToFirestore = { ...note };
        delete noteToFirestore.id;

        await db
            .collection(`${uid}/journal/notes/${note.id}`)
            .update(noteToFirestore);

        dispatch(refreshNotes(note.id, noteToFirestore));

        Swal.fire("Saved", note.title, "success");
    };
};

export const refreshNotes = (id, note) => {
    return {
        type: types.notesUpdated,
        payload: {
            id,
            note: {
                id,
                ...note,
            },
        },
    };
};

// para claudinary nesecito el base_url_api / upload,
// el upload_preset: react-journal-app y
// el file que es la imagen

export const startUploadingImg = (file) => {
    return async (dispatch, getState) => {
        const { active } = getState().notes;

        const url = await fileUpload(file);
        active.url = url;

        dispatch(startSaveNote(active));
    };
};

export const startDeleteNote = (id) => {
    return async (dispatch, getState) => {
        const { uid } = getState().auth;
        await db.doc(`${uid}/journal/notes/${id}`).delete();

        dispatch(deleteNote(id));
    };
};
export const deleteNote = (id) => {
    return {
        type: types.notesDeleted,
        payload: id,
    };
};

export const notesLogoutCleaning = () => {
    return {
        type: types.notesLogoutCleaning,
    };
};
