import React from 'react';
import {useDispatch} from 'react-redux';
import { addStudents } from '../actions/manageStudents'

const AddStudents = () => {
  const dispatch = useDispatch();
    // add the list of students from data/students to the global state
    // show the current student count
  return (
    <>
      Add Students 
      <br />

      <button onClick={() => dispatch(addStudents())}>Add Students</button>
    </>
  )
}

export default AddStudents;
