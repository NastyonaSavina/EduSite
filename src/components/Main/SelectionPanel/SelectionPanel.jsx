import './SelectionPanel.css';

export const SelectionPanel = ({ onChangeCategory, onChangeLevel }) => {
  
  const handleChangeCategory = event => {
    event.preventDefault();
    onChangeCategory(event.target.name);
  };

  const handleChangeLevel = event => {
    event.preventDefault();
    onChangeLevel(event.target.name);
  };

  return (
    <section className="selection-panel ">
      <div className="container selection-area">
        <div className="select-category">
          <ul className="list category-list">
            <li className="course-category-item">
              <button
                className="category-btn"
                name="Physics"
                type="button"
                onClick={handleChangeCategory}
              >
                Physics
              </button>
            </li>
            <li className="course-category-item">
              <button
                className="category-btn "
                name="Mathematics"
                type="button"
                onClick={handleChangeCategory}
              >
                Mathematics
              </button>
            </li>
            <li className="course-category-item">
              <button
                className="category-btn "
                name="Astrology"
                type="button"
                onClick={handleChangeCategory}
              >
                Astrology
              </button>
            </li>
          </ul>
        </div>
        <div className="select-level">
          <ul className="level-list">
            <li className="course-category-item">
              <button
                className="level-btn"
                name="Beginner"
                type="button"
                onClick={handleChangeLevel}
              >
                Beginner
              </button>
            </li>
            <li className="course-category-item">
              <button
                className="level-btn"
                name="Intermediate"
                type="button"
                onClick={handleChangeLevel}
              >
                Intermediate
              </button>
            </li>
            <li className="course-category-item">
              <button
                className="level-btn"
                name="Advanced"
                type="button"
                onClick={handleChangeLevel}
              >
                Advanced
              </button>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
