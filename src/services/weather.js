export const kelvinToFarenheit = (tempKelvin) => {
    return Math.round(((tempKelvin - 273.15) * 9/5) + 32) + "°F";
}

export const unixToStandardTime = (unixTime) => {
    var dateObj = new Date(unixTime * 1000);
    return dateObj.toLocaleTimeString()
}