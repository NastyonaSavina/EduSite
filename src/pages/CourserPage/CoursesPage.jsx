import { useEffect, useState } from 'react';
import coursesJson from '../../assets/courses.json';
import { useSearchParams } from 'react-router-dom';
import { SearchBox } from 'components/Main/SearchBox/SearchBox';
import { SelectionPanel } from 'components/Main/SelectionPanel/SelectionPanel';
import { CoursesList } from 'components/Main/CoursesList/CoursesList';

const CoursesPage = () => {

  const [displayedCourses, setDisplayedCourses] = useState(coursesJson);
  
  const [courseCategory, setCourseCategory] = useState("");
  const [courseLevel, setCourseLevel] = useState("");
  const [searchParams, setSearchParams] = useSearchParams('');
  const courseQuery = searchParams.get('query') ?? '';
  

   
  useEffect(() => {
    const updatedCourseList = coursesJson
      .filter(course =>
        courseCategory ? course.category === courseCategory : course.category
      )
      .filter(course =>
        courseQuery
          ? course.title.toLowerCase().includes(courseQuery.toLowerCase())
          : course
      )
      .filter(course =>
        courseLevel ? course.level === courseLevel : course.level
      );

    setDisplayedCourses(updatedCourseList);
  }, [courseCategory, courseQuery, courseLevel]);
   
   
    

    const updateQueryString = query => {
      const nextParams = query !== '' ? { query } : {};
      setSearchParams(nextParams);
     
    };

  
    const handleChange = category => {
      setCourseCategory(category);
      setSearchParams("");
      setCourseLevel("");
  };
  
  const handleChangedLevel = level => {
    setCourseLevel(level);
    setSearchParams("");
  }


    return (
      <>
        <SelectionPanel onChangeCategory={handleChange} onChangeLevel={handleChangedLevel}/>
        <SearchBox value={courseQuery} onChange={updateQueryString} />
        <CoursesList courses={displayedCourses} />
      </>
    );

}


export default CoursesPage;