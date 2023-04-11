import './CoursesList.css';

export const CourseItem = ({ title, description, imageUrl }) => {
  return (
    <li className="course-item">
      <img className="course-foto" src={imageUrl} alt={title} />
      <h3 className="course-title">{title}</h3>
      <p>{description}</p>
    </li>
  );
};
