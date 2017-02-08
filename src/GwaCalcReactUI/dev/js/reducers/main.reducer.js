let defaultState = {
    message: "Click the button to reveal message",
    grades: [
        {
            subject: "Algebra",
            unit: 2.0,
            grade: 1.5
        }
    ]
}

export default function(state=defaultState, action) {
    switch (action.type) {
        case "SAY_HELLO":
            return Object.assign({}, state, {
                message: "Oh, hello there!"
            });
    }
    return state;
}