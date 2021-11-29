# Redux 101 Homework

## Setup Redux
- import redux and react-redux to your application
- import createStore from redux (note, a reducer has to be passed to this function, and it hasn't been created yet)
- import Provider from react-redux
- create redux store in the index.js file 
- wrap your application with the Provider function 
- pass the store to the Provider via the store props


## Setup folder structure

In the src folder, create a `actions` and `reducers` folder 

## Setup reducer 
- In the reducers folder, create a new file called reducer.js 
- create a reducer function that creates an initial state for the following keys:
    - an array of students that is initially empty
    - an integer for count that is initially 0

## Display all students
- in the DisplayStudents components, write logic to display all of the students in the global state. This should initially be an empty list
- Write logic to show the count from the global state. This value should initially be zero.


## Add Students

- import the data from data/students.js 
- add this data to the global students state 
- write logic to keep track of how many students are in the student array

## Add New Student 

- create a form in `AddNewStudent.jsx` to add a new student to the new students array in global state.

## Delete Student By ID 

## Update Student List 

## Delete Student By Name

## Sort Student List 

## Add Student In Order 

## Search Student
