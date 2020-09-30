import axios from 'axios'


export const baseUrl = 'http://121.89.189.227:8181'

const axiosInstance = axios.create({
    baseURL: baseUrl
})

export { axiosInstance }