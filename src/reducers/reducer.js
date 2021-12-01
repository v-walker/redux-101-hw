const reducer = (state, action) => {
    
    if (state === undefined) {
        state = {
            students: [],
            count: 0,
            clickedAddStudents: false,
            searchResult: {},
            searchHistory: []
        }
    }

    switch(action.type) {
        case "ADD_STUDENTS":
            return {
                ...state,
                students: state.students.concat(action.data),
                count: state.count + action.data.length,
                clickedAddStudents: action.add
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
            if (state.students.filter(student => student.fName === action.fName)) {
                return {
                    ...state,
                    students: state.students.filter(student => {
                        return student.fName !== action.fName
                    }),
                    count: state.count - 1
                }
            } else {
                return alert("Name not found")
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

        case "SEARCH_STUDENT":
            if (state.students.find(student => student.fName === action.name)) {
                let searchedStudent = state.students.find(student => student.fName === action.name)
                return {
                    ...state,
                    searchResult: searchedStudent
                }
            } else {
                return alert("Student not found. Try again!")
            }
        
            
        default: 
            return state;
    }

    
}

export default reducer;