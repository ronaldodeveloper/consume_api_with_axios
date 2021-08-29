import axios from 'axios';





// '96a1a39fff6546d2b578c68bfb02a367'

 const apiNoticias= axios.create({
    baseURL:`https://newsapi.org`,
    params: {
        apiKey: process.env.REACT_API_KEY,
    }
})

export default apiNoticias