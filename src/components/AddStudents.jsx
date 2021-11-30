import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addStudents } from '../actions/manageStudents'

const AddStudents = () => {
  const dispatch = useDispatch();
  const count = useSelector(state => state.count);
  const clickedAddStudents = useSelector(state => state.clickedAddStudents);
  
    // add the list of students from data/students to the global state
    // show the current student count
  return (
    <>
      Add Students 
      <br />

      <h2>Student Count: {count}</h2>

      {!clickedAddStudents
      ? <button onClick={() => dispatch(addStudents())}>Add Students</button>
      : <p style={{color: "green"}}>Students have been added!</p>}
      
    </>
  )
}

export default AddStudents;
