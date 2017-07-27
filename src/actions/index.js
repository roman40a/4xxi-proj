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

export function showCurrentWeather() {

    return (dispatch) => {
        dispatch({
            type: "GET_WEATHER_REQUEST"
        })
        navigator.geolocation.getCurrentPosition(function(position) {

            const lat = position.coords.latitude,
                lon = position.coords.longitude

            httpGet(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=ru&units=metric&appid=7e91ed4cb83bc8d8e49421dc64835af5`)
                .then(
                    response => {
                        const responseObj = JSON.parse(response)

                        dispatch({
                            type: "GET_WEATHER_SUCCESS",
                            payload: responseObj
                        })
                    },
                    error => alert(`Rejected: ${error}`)
                );
        });
    }

}

export function showWeatherByCityCountry(city, country) {

    console.log(city, country)

    return (dispatch) => {

        dispatch({
            type: "GET_WEATHER_REQUEST"
        })

        httpGet(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&lang=ru&units=metric&appid=7e91ed4cb83bc8d8e49421dc64835af5`)
            .then(
                response => {
                    const responseObj = JSON.parse(response)

                    dispatch({
                        type: "GET_WEATHER_SUCCESS",
                        payload: responseObj
                    })
                },
                error => {
                    console.log("ERROR", city, country)
                    dispatch({
                        type: "GET_WEATHER_ERROR"
                    })
                }
            );
    }
}

export function addCity(city, country) {
    return (dispatch) => {

        dispatch({
            type: "CHECK_CITY_REQUEST",
            payload: {
                city,
                country
            }
        })

        httpGet(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&lang=ru&units=metric&appid=7e91ed4cb83bc8d8e49421dc64835af5`)
            .then(
                response => {
                    const responseObj = JSON.parse(response)

                    dispatch({
                        type: "CHECK_CITY_SUCCESS",
                        payload: {
                            city: responseObj.name,
                            country: responseObj.sys.country
                        }
                    })
                },
                error => {
                    dispatch({
                        type: "CHECK_CITY_ERROR",
                        payload: `Простите, \nгород "${city}" \nи страна "${country}"\nне найдены`
                    })
                }
            );
    }
}

export function deleteCity(city, country) {
    return {
        type: "DELETE_CITY",
        payload: {
            city,
            country
        }
    }
}

export function selectCity(city, country) {
    console.log(city, country)

    return (dispatch) => {

        dispatch({
            type: "GET_WEATHER_REQUEST"
        })

        httpGet(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&lang=ru&units=metric&appid=7e91ed4cb83bc8d8e49421dc64835af5`)
            .then(
                response => {
                    const responseObj = JSON.parse(response)

                    dispatch({
                        type: "GET_WEATHER_SUCCESS",
                        payload: responseObj
                    })
                },
                error => {
                    console.log("ERROR", city, country)
                    dispatch({
                        type: "GET_WEATHER_ERROR"
                    })
                }
            );
    }
}