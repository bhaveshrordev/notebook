import React from "react";

const Noteitem = (props) => {
  const { note } = props;

  return (
    <div className="col-md-3">
      <div className="card my-3">
        <div className="card-body">
          <h5 className="card-title">{note.title}</h5>
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
