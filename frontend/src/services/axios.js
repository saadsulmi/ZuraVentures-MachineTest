import axios from 'axios'

const axiosInstance= axios.create({
    baseURL:'http://localhost:8000/api',
    headers:{
        'Content-Type':'application/json',
        'auth-token': JSON.stringify(localStorage.getItem('auth-data')) ? JSON.stringify(localStorage.getItem('auth-data')) : null
    }
})

export default axiosInstance