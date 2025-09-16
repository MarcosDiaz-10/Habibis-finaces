import axios from 'axios';


const apiClientServer = axios.create({
    baseURL: import.meta.env.PUBLIC_URL_API_SERVER,
})

apiClientServer.interceptors.response.use(
    (response) => {
        // Handle successful responses
        return response;
    },
    (error) => {
        // Handle errors
        return Promise.reject(error);
    }
)

const apiClientFront = axios.create({
    baseURL: import.meta.env.PUBLIC_URL_API_FRONT,
})
apiClientFront.interceptors.response.use(
    (response) => {
        // Handle successful responses
        return response;
    },
    (error) => {
        // Handle errors
        return Promise.reject(error);
    }
)

export { apiClientServer, apiClientFront }