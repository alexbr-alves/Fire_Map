import axios from "axios";

const apiWallpaper = axios.create({
    baseURL: 'https://api.nasa.gov/planetary/apod?api_key=XnextBcyCcgowAgRCNoTzxXN4bRANrLAPuHzbsK0'
})

export default apiWallpaper;