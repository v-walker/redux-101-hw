import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addStudentInOrder, sortStudentsAlpha } from '../actions/manageStudents';

const AddItemInOrder = () => {
    //add an item in alphabetical order (not to the end of the list)
    const dispatch = useDispatch();
    const [fName, setFName] = useState("");
    const [city, setCity] = useState("");

    const handleStudentSubmit = (e) => {
      e.preventDefault();
  
      dispatch(addStudentInOrder(uuidv4(), fName, city));
      dispatch(sortStudentsAlpha());
  
      setFName("");
      setCity("");
    }

  return (
    <>
      Add Item In Order

      <form onSubmit={handleStudentSubmit}>
        <input type="text" placeholder="First Name" value={fName} onChange={(e) => setFName(e.target.value)}/>
        <input type="text" placeholder="City" value={city} onChange={(e) => setCity(e.target.value)} />
        <input type="submit"/>
      </form>
    </>
  )
}

export default AddItemInOrder
