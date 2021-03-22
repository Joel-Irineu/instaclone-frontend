import axios from 'axios'

const api = axios.create({
    baseURL: 'https://instac-backend.herokuapp.com/',
})

export default api