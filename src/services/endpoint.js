import axios from 'axios';

 const apiNoticias= axios.create({
    baseURL:`https://newsapi.org`,
    params: {
        apiKey: process.env.REACT_API_KEY,
    }
})

export default apiNoticias