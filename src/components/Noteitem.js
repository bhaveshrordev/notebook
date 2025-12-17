import React, { useContext } from "react";
import noteContext from "../context/notes/noteContext";

const Noteitem = (props) => {
  const context = useContext(noteContext);
  const { deleteNote } = context;

  const { note } = props;

  return (
    <div className="col-md-3">
      <div className="card my-3">
        <div className="card-body">
          <div className="d-flex align-items-center">
            <h5 className="card-title">{note.title}</h5>
            <i
              className="far fa-trash-alt mx-2"
              onClick={() => {
                deleteNote(note._id);
              }}
            ></i>
            <i className="far fa-edit mx-2"></i>
          </div>

          <p className="card-text">
            {note.description} Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Expedita nulla iste perferendis eveniet ab ratione
            laboriosam ducimus consectetur velit tempora, harum alias eos
            temporibus perspiciatis debitis soluta aut ullam, suscipit nostrum,
            in ea quis.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Noteitem;
