import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { sortStudentsAlpha, sortStudentsCity } from '../actions/manageStudents';
import DisplayStudents from './DisplayStudents';

const SortStudentList = () => {
  const dispatch = useDispatch();
  const [clickedSortByAlpha, setClickedSortByAlpha] = useState(false);
  const [clickedSortByCity, setClickedSortByCity] = useState(false);
    //sort studentlist in alphabetical order
  
  const handleButtonClickAlpha = () => {
    dispatch(sortStudentsAlpha());
    setClickedSortByAlpha(true);
    setClickedSortByCity(false);
  }

  const handleButtonClickCity = () => {
    dispatch(sortStudentsCity());
    setClickedSortByCity(true);
    setClickedSortByAlpha(false);
  }

  return (
    <>
      Sort Student List
      <br />

      {!clickedSortByAlpha 
      ? <button onClick={handleButtonClickAlpha}>Click to Sort Students in Alphabetical Order</button>
      : <><h2>By Name</h2><DisplayStudents /></>
      }
      <br />
      {!clickedSortByCity 
      ? <button onClick={handleButtonClickCity}>Click to Sort Students by City</button>
      : <><h2>By City</h2><DisplayStudents /></>
      }
    </>
  )
}

export default SortStudentList
