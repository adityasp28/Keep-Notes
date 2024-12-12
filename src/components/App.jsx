import React, { useState } from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import Create from "./Create";

function App() {
  const [notes, setNotes] = useState([]);

  function addNotes(newNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }

  function deleteItem(id) {
    setNotes((preNotes) => {
      return preNotes.filter((note, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <Create toAddNote={addNotes} />
      {notes.map((note, index) => {
        return (
          <Note
            key={index}
            id={index}
            ttl={note.title}
            cntnt={note.content}
            dltItem={deleteItem}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
