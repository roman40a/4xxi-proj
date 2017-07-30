const initialState = {
    list: [],
    fetching: false
}

export default function weather(state = initialState, action) {

    switch (action.type) {

        case "GET_WEATHER_REQUEST":
            return { ...state, fetching: true }

        case "IS_IN_LIST":
            const city = action.payload.name,
                country = action.payload.sys.country
            alert(`Простите, \nгород "${city}" \nи страна "${country}"\nуже есть в списке`)
            return {...state, fetching: false};

        case "GET_WEATHER_SUCCESS":
            if (action.ownPosition) {
                return {
                    ...state,
                    selectedItem: action.payload,
                    ownWeather: action.payload,
                    fetching: false
                }
            } else {
                const newList = state.list.slice()
                newList.push(action.payload)
                return {
                    ...state,
                    list: newList,
                    selectedItem: action.payload,
                    fetching: false
                }
            }

        case "GET_WEATHER_ERROR": {
            const {city, country} = action.payload
            alert(`Простите, \nгород "${city}" \nи страна "${country}"\nне существуют`)
            return {...state, fetching: false}
        }

        case "DELETE_CITY":
            const deletingItem = action.payload
            let newList = state.list.slice().filter(
                (item) => !(item.name === deletingItem.name && item.sys.country === deletingItem.sys.country)
            )
            return {...state, list: newList, selectedItem: state.ownWeather}

        case "SELECT_CITY":
            return {...state, selectedItem: action.payload}

        default:
            return state;
    }
}
