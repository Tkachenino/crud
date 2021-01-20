import PropTypes from 'prop-types';

const Note = ({id, content, onDeleteHandler}) => {

  const onDelete = async() => {
    const result = await fetch(`http://localhost:7777/notes/${id}`,
   {
     method: 'DELETE'
    });
    if (result.ok) {
      onDeleteHandler(id);
    }
  };

  return (
    <div className="Note">
      <p>
        {content}
      </p>
      <button className='DeleteBtn' onClick={onDelete}>X</button>
    </div>
  )
};

Note.propTypes = {
  id: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  content: PropTypes.string,
  onDeleteHandler: PropTypes.func
}

export default Note;