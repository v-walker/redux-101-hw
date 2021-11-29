import students from "../data/students";

const reducer = (state, action) => {
    
    if (state === undefined) {
        state = {
            students: [],
            count: 0
        }
    }

    switch(action.type) {
        case "ADD_STUDENTS":
            return {
                ...state,
                students: state.students.concat(action.data),
                count: action.data.length
            }
        case "ADD_STUDENT":
            return {
                ...state,
                students: state.students.concat(action.data),
                count: state.students.length + 1
            }
        default: 
            return state;
    }

    
}

export default reducer;