import { CourseItem } from "./CourseItem";

import './CoursesList.css';

export const CoursesList = ({courses}) => {
    return (
      <>
        <ul className="courses-list container list">
                {courses?.map(({ id, title, description, imageUrl }, index) => (
              
                <CourseItem
                key={id}
                title={title}
                description={description}
                imageUrl={imageUrl}
                index={index}
                />
          ))}
        </ul>
      </>
    );
};
