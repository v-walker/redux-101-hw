import students from "../data/students"

const addStudents = () => {

    return {
        type: "ADD_STUDENTS",
        data: students,
        add: true
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

const deleteByName = (fName) => {

    return {
        type: "DELETE_BY_NAME",
        fName
    }
}

const sortStudentsAlpha = () => {

    return {
        type: "SORT_STUDENTS_ALPHA",
    }
}

const sortStudentsCity = () => {

    return {
        type: "SORT_STUDENTS_CITY",
    }
}

const addStudentInOrder = (id, fName, city) => {

    return {
        type: "ADD_STUDENT_IN_ORDER",
        data: {
            id,
            fName,
            city
        }
    }
}

const searchStudent = (name) => {
    
    return {
        type: "SEARCH_STUDENT",
        name
    }
}


export { addStudents, addStudent, deleteByID, deleteByName, sortStudentsAlpha, sortStudentsCity, addStudentInOrder, searchStudent }