import './SearchBox.css';

export const SearchBox = ({ value, onChange }) => {

  const handleInput = (event) => {
    event.preventDefault();
    onChange(event.target.value);
 }

  return (
    <section className="search-box">
      <div className="container">
        <input
          className="search-form-input"
          type="text"
          value={value}
          onChange={handleInput}
          placeholder="Search course by name "
        />
      </div>
    </section>
  );
};
