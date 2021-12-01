import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addStudents } from '../actions/manageStudents'

const AddStudents = () => {
  const dispatch = useDispatch();
  // const students = useSelector(state => state.students)
  const count = useSelector(state => state.count);
  const clickedAddStudents = useSelector(state => state.clickedAddStudents);

    // add the list of students from data/students to the global state
    // show the current student count
  return (
    <div>
      Add Students 
      <br />

      <h2>Student Count: {count}</h2>

      {(!clickedAddStudents || count === 0)
      ? <button onClick={() => dispatch(addStudents())}>Add Students</button>
      : <p style={{color: "green"}}>Students have been added!</p>}
      
    </div>
  )
}

export default AddStudents;
