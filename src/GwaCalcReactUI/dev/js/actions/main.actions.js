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
    return function(dispatch) {
        let totalUnit =
        grades
            .map((g)        => {return Number(g.unit)})
            .reduce((a, b)  => {return a + b});

        let totalWeight =
        grades
            .map((g)        => {return Number(g.unit) * Number(g.score)})
            .reduce((a,b)   => {return a + b});

       const gwa = totalWeight / totalUnit;
        dispatch({type: "total_units_changed", payload: totalUnit})
        dispatch({type: "gwa_changed", payload: gwa})
    }

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