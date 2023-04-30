import './CoursesList.css';

// import imagecourse from '../../../images/coursesImages/physics2.png'


// //temporary use one image because of lack good images by url for json base

export const CourseItem = ({ title, description, imageUrl }) => {
  return (
    <li className="course-item">
      <img className="course-foto" src={imageUrl} alt={title} />
      <h3 className="course-title">{title}</h3>
      <p>{description}</p>
    </li>
  );
};
