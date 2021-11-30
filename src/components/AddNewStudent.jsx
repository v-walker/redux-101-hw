import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addStudent } from '../actions/manageStudents';


const AddNewStudent = () => {
  const dispatch = useDispatch();
  const [fName, setFName] = useState("");
  const [city, setCity] = useState("");

    //add Kanye West to the global state of students
    // show the current student count

  const handleStudentSubmit = (e) => {
    e.preventDefault();

    dispatch(addStudent(uuidv4(), fName, city));

    setFName("");
    setCity("");
  }

  return (
    <>
      Add New Student 

      <br /> 

      <form onSubmit={handleStudentSubmit}>
        <input type="text" placeholder="First Name" value={fName} onChange={(e) => setFName(e.target.value)}/>
        <input type="text" placeholder="City" value={city} onChange={(e) => setCity(e.target.value)} />
        <input type="submit"/>
      </form>
      
    </>
  )
}

export default AddNewStudent;
