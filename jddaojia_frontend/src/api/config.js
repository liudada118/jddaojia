import axios from 'axios'


export const baseUrl = 'http://localhost/'

const axiosInstance = axios.create({
    baseURL: baseUrl
})

export { axiosInstance }