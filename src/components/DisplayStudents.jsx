import React from 'react';
import { useSelector } from 'react-redux';

const DisplayStudents = () => {
  const students = useSelector(state => state.students)
  const count = useSelector(state => state.count);
    //display the current students
  return (
    <>
    Display Students

    <h2>Student Count: {count}</h2>

    <ul>
      {students.map((student, index) => {
        return <li key={index}>{student.fName}, {student.city}</li>
      })}
    </ul>
    </>
  )
}

export default DisplayStudents
