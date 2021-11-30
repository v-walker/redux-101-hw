import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteByName } from '../actions/manageStudents';
import DisplayStudents from './DisplayStudents'

const DeleteStudentByName = () => {
  const dispatch = useDispatch();
  const [fName, setFName] = useState("");

  const handleStudentSubmit = (e) => {
    e.preventDefault();

    dispatch(deleteByName(fName));
    setFName("");
  }

    //delete student by name
  return (
    <>
      Delete Student By Name

      <form onSubmit={handleStudentSubmit}>
        <input type="text" placeholder="Enter Student Name" value={fName} onChange={(e) => setFName(e.target.value)} />
        <input type="submit" />
      </form>

      <br></br>
      <br></br>
      <DisplayStudents />

    </>
  )
}

export default DeleteStudentByName



