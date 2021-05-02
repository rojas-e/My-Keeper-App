import React, { useState } from "react";

function CreateArea(props) {

  const [noteCard, setNoteCard] = useState({
    title: '',
    content: ''
  });

  const handleChange = () => {
    console.log('button clicked!')
  }

  return (
    <div>
      <form>
        <input onChange={handleChange} name="title" placeholder="Title" />
        <textarea name="content" placeholder="Take a note..." rows="3" />
        <button>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
