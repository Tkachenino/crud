import {useState} from 'react';
import PropTypes from 'prop-types';

const Form = ({onAddNote}) => {
  const [text, setText] = useState('');

  const onChange = (e) => {
    setText(e.target.value);
  };

  const postText = async() => {
    const result = await fetch("http://localhost:7777/notes",
   {
     method: 'POST',
     body: JSON.stringify({content: text }),
     header: {"Content-Type": "application/json"}
    });

    if (result.ok) {
      onAddNote(text);
      setText('');
    }
  };

  const sendData = (e) => {
    e.preventDefault();
    if (!text.length) {
      return;
    }
    postText();  
  }

  return (
    <form className="Form" onSubmit={sendData}>
      <textarea className='FormField' value={text} onChange={onChange}/>
      <button className="FormBtn">&#10151;</button>
    </form>
  )
}

Form.propTypes = {
  onAddNote: PropTypes.func
}

export default Form;