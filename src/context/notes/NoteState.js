// src/context/notes/NoteState.js
import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const notesInitial = [
    {
      _id: "69285eafd7e36e02a0c197c3",
      user: "6928518a8dc89d2c86d00fda",
      title: "Happy Tuesday",
      description: "Keep Huslting always",
      tag: "personal",
      date: "2025-11-27T14:22:39.941Z",
      __v: 0,
    },
    {
      _id: "6941861a0e2f9bb5ff56765f",
      user: "6928518a8dc89d2c86d00fda",
      title: "Happy Work Day",
      description: "Complete your work",
      tag: "personal",
      date: "2025-12-16T16:17:30.454Z",
      __v: 0,
    },
    {
      _id: "69285eafd7e36e02a0c197c31",
      user: "6928518a8dc89d2c86d00fda",
      title: "Happy Tuesday",
      description: "Keep Huslting always",
      tag: "personal",
      date: "2025-11-27T14:22:39.941Z",
      __v: 0,
    },
    {
      _id: "6941861a0e2f9bb5ff56765f2",
      user: "6928518a8dc89d2c86d00fda",
      title: "Happy Work Day",
      description: "Complete your work",
      tag: "personal",
      date: "2025-12-16T16:17:30.454Z",
      __v: 0,
    },
    {
      _id: "69285eafd7e36e02a0c197c34",
      user: "6928518a8dc89d2c86d00fda",
      title: "Happy Tuesday",
      description: "Keep Huslting always",
      tag: "personal",
      date: "2025-11-27T14:22:39.941Z",
      __v: 0,
    },
    {
      _id: "6941861a0e2f9bb5ff56765f5",
      user: "6928518a8dc89d2c86d00fda",
      title: "Happy Work Day",
      description: "Complete your work",
      tag: "personal",
      date: "2025-12-16T16:17:30.454Z",
      __v: 0,
    },
  ];

  const [notes, setNotes] = useState(notesInitial);

  // Add a Note
  const addNote = (title, description, tag) => {
    // TODO API CALL
    console.log("Adding a New Note");
    const note = {
      _id: "6941861a0e2f9bb5ff56765f8",
      user: "6928518a8dc89d2c86d00fda",
      title: title,
      description: description,
      tag: tag,
      date: "2025-12-16T16:17:30.454Z",
      __v: 0,
    };

    setNotes(notes.concat(note));
  };

  // Delete a Note
  const deleteNote = (id) => {
    console.log("Deleting the note with id" + id);
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };

  // Edit Note
  const editNote = () => {};

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
