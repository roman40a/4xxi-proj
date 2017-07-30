const initialState = {
    list: [],
    fetching: false
}

export default function addedList(state = initialState, action) {
    const {city, country} = action.payload ? action.payload : {}
    let newAddedList = []

    switch (action.type) {
        case "CHECK_CITY_REQUEST":
            return {...state, fetching: true}
        case "CHECK_CITY_SUCCESS":
            newAddedList = state.list.slice()
            newAddedList.push(action.payload)
            return {...state, list: newAddedList, fetching: false}
        case "CHECK_CITY_ERROR":
            const errorMessage = `Простите, \nгород "${city}" \nи страна "${country}"\nне найдены`
            alert(errorMessage)
            return state
        case "DELETE_CITY":
            newAddedList = state.list.slice()
            newAddedList = newAddedList.filter(
                (item) => !(item.city === city && item.country === country)
            )
            return {...state, list: newAddedList}
        default:
            return state
    }


}