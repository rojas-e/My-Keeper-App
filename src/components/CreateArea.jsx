import React, { useState } from "react";

function CreateArea(props) {

  const [noteCard, setNoteCard] = useState({
    title: '',
    content: ''
  });

  const handleChange = (e) => {
    const {name, value} = e.target;
    setNoteCard(prev => {
      return {
        ...prev,
        [name]: value
      }
    })
  }

  return (
    <div>
      <form>
        <input value={noteCard.title} onChange={handleChange} name="title" placeholder="Title" />
        <textarea value={noteCard.content} onChange={handleChange} name="content" placeholder="Take a note..." rows="3" />
        <button>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
