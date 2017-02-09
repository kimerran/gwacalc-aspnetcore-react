let defaultState = {
    grades: [
        {
            id: 1,
            subject: undefined,
            unit: undefined,
            score: undefined
        }
    ],
    cur_id: 1,
    gwa: undefined,
    total_units: undefined
}

export default function(state=defaultState, action) {
    switch (action.type) {
        case "add_new_row":
            return {
                ...state,
                grades: [...state.grades, {...action.payload, id: state.cur_id + 1}],
                cur_id: state.cur_id + 1
            }
        case "unit_value_changed":
            for(let i=0, len=state.grades.length; i<len; i++) {
                if(state.grades[i].id === action.payload.id) {
                    state.grades[i].unit = action.payload.value;
                    break;
                }
            }
            return {...state, grades: state.grades}
        case "score_value_changed":
            for(let i=0, len=state.grades.length; i<len; i++) {
                if(state.grades[i].id === action.payload.id) {
                    state.grades[i].score = action.payload.value;
                    break;
                }
            }
            return {...state, grades: state.grades}
        case "subject_value_changed":
            for(let i=0, len=state.grades.length; i<len; i++) {
                if(state.grades[i].id === action.payload.id) {
                    state.grades[i].subject = action.payload.value;
                    break;
                }
            }
            return {...state, grades: state.grades}
        case "total_units_changed":
            return {...state, total_units: action.payload}
        case "gwa_changed":
            return {...state, gwa: action.payload}
    }
    return state;
}