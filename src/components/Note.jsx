import React from "react";

function Note(prop) {
  function handleClick() {
    prop.dltItem(prop.id);
  }

  return (
    <div className="note">
      <h1>{prop.ttl}</h1>
      <p>{prop.cntnt}</p>
      <button onClick={handleClick}>DELETE</button>
    </div>
  );
}

export default Note;
