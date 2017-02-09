export const AddNewRow = () => {
    const newRow = {
        subject: undefined,
        unit: undefined,
        score: undefined
    }
    return function(dispatch) {
        dispatch({type: "add_new_row", payload: newRow})
    }
}

export const Calculate = (grades) => {
    let totalUnit = grades.reduce((acc, cur) => {
        return acc + cur.unit;
    });
}

export const HandleUnitChange = (gradeId, newValue) => {
    return function(dispatch) {
        dispatch({type: "unit_value_changed", payload: {
            id: gradeId,
            value: newValue
        }})
    }
}

export const HandleScoreChange = (gradeId, newValue) => {
    return function(dispatch) {
        dispatch({type: "score_value_changed", payload: {
            id: gradeId,
            value: newValue
        }})
    }
}

export const HandleSubjectChange = (gradeId, newValue) => {
    return function(dispatch) {
        dispatch({type: "subject_value_changed", payload: {
            id: gradeId,
            value: newValue
        }})
    }
}