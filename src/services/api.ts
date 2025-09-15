import axios from 'axios';


const apiClient = axios.create({
    baseURL: import.meta.env.URL_API,
})

apiClient.interceptors.response.use(

)
export default apiClient;