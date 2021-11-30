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
                count: state.count + action.data.length
            }
        case "ADD_STUDENT":
            return {
                ...state,
                students: state.students.concat(action.data),
                count: state.count + 1
            }
        case "DELETE_BY_ID": 
            return {
                ...state,
                students: state.students.filter(student => {
                    return student.id !== action.id
                }),
                count: state.count - 1
            }
        case "DELETE_BY_NAME":
            return {
                ...state,
                students: state.students.filter(student => {
                    return student.fName !== action.fName
                }),
                count: state.count - 1
            }
        case "SORT_STUDENTS_ALPHA":
            const compare = (a, b) => {
                if ( a.fName < b.fName ){
                    return -1;
                }
                if ( a.fName > b.fName ){
                    return 1;
                }
                return 0;
            }    

            return {
                ...state,
                students: state.students.sort(compare)
            }
        case "SORT_STUDENTS_CITY": 
            const compareCity = (a, b) => {
                if ( a.city < b.city ){
                    return -1;
                }
                if ( a.city > b.city ){
                    return 1;
                }
                return 0;
            }
        
            return {
                ...state,
                students: state.students.sort(compareCity)
            }

        case "ADD_STUDENT_IN_ORDER":
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