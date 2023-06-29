const Reducer = (state, action) => {
    switch (action.type) {

        case "CREATE":
            return {
                ui: action.payload
            }
        case "VIEW":
            return {
                ui: action.payload
            }

        default:
            return state;
    }
}

export default Reducer;