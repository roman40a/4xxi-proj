const initialState = {
    list: [],
    fetching: false
}

export default function weather(state = initialState, action) {

    switch (action.type) {
        case "GET_WEATHER_REQUEST":
            return { ...state, weather: action.payload, fetching: true }

        case "GET_WEATHER_SUCCESS":
            return { ...state, weather: action.payload, fetching: false }

        default:
            return state;
    }
}