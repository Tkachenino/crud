import PropTypes from 'prop-types';

const Header = ({onUpdateNotes}) => {
  return (
    <div className="Header">
      <h1>Notes</h1>
      <button className="HeaderBtn" onClick={onUpdateNotes}>&#8693;</button>
    </div>
  )
};

Header.propTypes = {
  onUpdateNotes: PropTypes.func
}

export default Header;