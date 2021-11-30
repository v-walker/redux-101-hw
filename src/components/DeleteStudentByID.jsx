import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteByID } from '../actions/manageStudents';


const DeleteStudentByID = () => {
  const students = useSelector(state => state.students);
  const dispatch = useDispatch();
  
  
  //Delete student by and ID
  return (
    <>
      Click to Delete Student By ID

      <ul>
        {students.map((student, index) => {
          // eslint-disable-next-line jsx-a11y/anchor-is-valid
          return <li key={index}><a href="#" onClick={() => dispatch(deleteByID(student.id))} style={{color: "red"}}><b>X</b></a> {student.fName}</li>
        })}
      </ul>
    </>
  )
}

export default DeleteStudentByID;
