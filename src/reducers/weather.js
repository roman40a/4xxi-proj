const initialState = {
    weather: null,
    fetching: false
}

export default function weather(state = initialState, action) {

    switch (action.type) {
        case "GET_WEATHER_REQUEST":
            console.log({...state, weather: action.payload, fetching: true})
            return { ...state, weather: action.payload, fetching: true }

        case "GET_WEATHER_SUCCESS":
            console.log({ ...state, weather: action.payload, fetching: false })
            return { ...state, weather: action.payload, fetching: false }

        case "GET_WEATHER_ERROR":
            console.log("Error from reducer", {...state, weather: "Простите, не удалось найти данный город", fetching: false})
            return { ...state, weather: "Простите, не удалось найти данный город", fetching: false }

        default:
            return state;
    }
}