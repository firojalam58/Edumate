import React, { useEffect, useState } from 'react';
import Course from './Course';

const Courses = () => {
    const [courses,setCourses] = useState([])
  useEffect(()=>{
    fetch('http://localhost:5000/coursesdata')
    .then(res=>res.json())
    .then(data =>setCourses(data))
    
  },[])
    return (
       <div className='container mx-auto'>
         <div className="grid md:grid-cols-3  lg:grid-cols-4 gap-4">
            {
                courses.map(course=> <Course
                key={course._id}
                course={course}
                ></Course>)
            }
        </div>

       </div>
    );
};

export default Courses;