import React from "react";

function Note(props) {
  return (
    <div className="note">
      <h1>{props.name}</h1>
      <p>{props.detail}</p>
    </div>
  );
}

export default Note;
