import {useState, useEffect} from 'react';
import {nanoid} from 'nanoid';
import Header from './components/Header';
import Note from './components/Note';
import Form from './components/Form';
import './App.css';

function App() {
  const [notes, setNotes] = useState([]);

  const getData = async () => {
    try {
      const result = await fetch("http://localhost:7777/notes");
      const response = await result.json();
      setNotes(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(()=> {
    getData();
  }, [notes.length]);

  const addNote = (note) => {
    setNotes(notes => [...notes, {content: note, id: nanoid()}])
  }

  const deletNote = (id) => {
    const newArrayNotes = notes.filter(note => note.id !== id);
    setNotes(newArrayNotes);
  }

  return (
    <div className="App">
      <Header  onUpdateNotes={getData}/>
      <div className="Notes">
        {notes.map(note => (
          <Note key={note.id} id={note.id} content={note.content} onDeleteHandler={deletNote}/>
        ))}
      </div>
      <Form onAddNote={addNote}/>
    </div>
  );
}

export default App;
