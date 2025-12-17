// src/context/notes/NoteState.js
import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const notesInitial = [];

  const [notes, setNotes] = useState(notesInitial);

  // Get All Notes
  const getNotes = async () => {
    // TODO API CALL
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjkyODUxOGE4ZGM4OWQyYzg2ZDAwZmRhIn0sImlhdCI6MTc2NDI1MDcxOH0.sVYpeZ_plA5hvqCdJMxeXaFoKhZPqmw3v1EJkaNHmWo",
      },
    });

    const json = await response.json();
    console.log(json);
    setNotes(json);
  };

  // Add a Note
  const addNote = async (title, description, tag) => {
    // TODO API CALL

    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjkyODUxOGE4ZGM4OWQyYzg2ZDAwZmRhIn0sImlhdCI6MTc2NDI1MDcxOH0.sVYpeZ_plA5hvqCdJMxeXaFoKhZPqmw3v1EJkaNHmWo",
      },
      body: JSON.stringify({ title, description, tag }),
    });

    const json = await response.json();
    console.log(json);

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
  const deleteNote = async (id) => {
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjkyODUxOGE4ZGM4OWQyYzg2ZDAwZmRhIn0sImlhdCI6MTc2NDI1MDcxOH0.sVYpeZ_plA5hvqCdJMxeXaFoKhZPqmw3v1EJkaNHmWo",
      }
    });

    const json = response.json();
    console.log(json);

    console.log("Deleting the note with id" + id);
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };

  // Edit Note
  const editNote = async (id, title, description, tag) => {
    // API CALL
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjkyODUxOGE4ZGM4OWQyYzg2ZDAwZmRhIn0sImlhdCI6MTc2NDI1MDcxOH0.sVYpeZ_plA5hvqCdJMxeXaFoKhZPqmw3v1EJkaNHmWo",
      },
      body: JSON.stringify({ title, description, tag }),
    });

    const json = await response.json();
    console.log(json);

    let newNotes = JSON.parse(JSON.stringify(notes))

    // Logic to edit in client
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;
      }
    }
    console.log(newNotes);
    setNotes(newNotes);
  };

  return (
    <NoteContext.Provider
      value={{ notes, addNote, deleteNote, editNote, getNotes }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
