const initialState = {
    list: [],
    fetching: false
}

export default function addedList(state = initialState, action) {
    switch (action.type) {
        case "CHECK_CITY_REQUEST":
            return {...state, checkingCity: action.payload, fetching: true}
        case "CHECK_CITY_SUCCESS":
            let newState = {}
            newState.list = state.list.slice()
            newState.list.push(action.payload)
            newState.fetching = false
            console.log(newState)
            return newState
        case "CHECK_CITY_ERROR":
            alert(action.payload)
            return state
        case "DELETE_CITY":
            const {city, country} = action.payload
            newState = {}
            newState.list = state.list.slice()
            let newList = newState.list.filter(
                (item) => !(item.city === city && item.country === country)
            )
            newState.list = newList
            return newState
        default:
            return state
    }


}