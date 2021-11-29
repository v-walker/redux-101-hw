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

export { addStudents, addStudent }