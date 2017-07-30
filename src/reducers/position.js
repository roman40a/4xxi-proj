const initialState = {
    coords: null,
    fetching: false
}

export default function coords(state = initialState, action) {

    switch (action.type) {
        case "GET_COORDS_REQUEST":
            return { ...state, fetching: true }

        case "GET_COORDS_SUCCESS":
            return { ...state, coords: action.payload, fetching: false }

        default:
            return state;
    }
}