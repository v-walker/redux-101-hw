import students from "../data/students"

const addStudents = () => {

    return {
        type: "ADD_STUDENTS",
        data: students
    }
}

const addStudent = (id, fName, city) => {
    
    return {
        type: "ADD_STUDENT",
        data: {
            id,
            fName,
            city
        }
    }
}

const deleteByID = (id) => {

    return {
        type: "DELETE_BY_ID",
        id
    }
}

export { addStudents, addStudent, deleteByID }