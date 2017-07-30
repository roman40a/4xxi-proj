function httpGet(url) {

    return new Promise(function(resolve, reject) {

        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);

        xhr.onload = function() {
            if (this.status === 200) {
                resolve(this.response);
            } else {
                var error = new Error(this.statusText);
                error.code = this.status;
                reject(error);
            }
        };

        xhr.onerror = function() {
            reject(new Error("Network Error"));
        };

        xhr.send();
    });

}

export function getCoords() {
    return (dispatch) => {

        if (!navigator.geolocation)
            alert("Ваш браузер не поддерживает геолокацию\nПерейдите на более новый")

        dispatch({
            type: "GET_COORDS_REQUEST"
        })

        navigator.geolocation.getCurrentPosition(function(position) {

            const lat = position.coords.latitude,
                lon = position.coords.longitude

            dispatch({
                type: "GET_COORDS_SUCCESS",
                payload: {
                    lat,
                    lon
                }
            })
        }, function (error) {
            dispatch({
                type: "GET_COORDS_ERROR",
                payload: error
            })
        });
    }
}

export function getWeather(options, list) {
    return (dispatch) => {

        dispatch({
            type: "GET_WEATHER_REQUEST"
        })

        const {coords, place} = options
        if (coords) {
            const lat = coords.lat,
                lon = coords.lon

            httpGet(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=ru&units=metric&appid=7e91ed4cb83bc8d8e49421dc64835af5`)
                .then(
                    response => {
                        const responseObj = JSON.parse(response)

                        dispatch({
                            type: "GET_WEATHER_SUCCESS",
                            payload: responseObj,
                            ownPosition: true
                        })
                    },
                    error => console.log(`Rejected: ${error}`)
                );
        } else if (place) {
            const {city, country} = place

            httpGet(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&lang=ru&units=metric&appid=7e91ed4cb83bc8d8e49421dc64835af5`)
                .then(
                    response => {
                        const responseObj = JSON.parse(response)

                        if (checkCity(responseObj, list)) {
                            dispatch(checkCity(responseObj, list))
                        } else {
                            dispatch({
                                type: "GET_WEATHER_SUCCESS",
                                payload: responseObj
                            })
                        }
                    },
                    error => {
                        dispatch({
                            type: "GET_WEATHER_ERROR",
                            payload: {
                                city,
                                country
                            }
                        })
                    }
                );
        }
    }
}

function checkCity(responseObj, list = []) {
    const city = responseObj.name,
        country = responseObj.sys.country
    if ( list.some((item, index) => (item.name === city && item.sys.country === country)) ) {
        return {
            type: "IS_IN_LIST",
            payload: responseObj
        }
    }
}

export function deleteCity(weather) {
    return {
        type: "DELETE_CITY",
        payload: weather
    }
}

export function selectCity(weather) {
    return {
        type: "SELECT_CITY",
        payload: weather
    }
}
