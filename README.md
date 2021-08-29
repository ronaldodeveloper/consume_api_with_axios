# api consumption with axios



## create the base api call in a separate file ex: service/endpoint.js

 <pre>
   <code>
    const apiNoticias= axios.create({
    baseURL:`https://newsapi.org`,
    params: {
        apiKey: KEY,
    }
    })
     export default apiNoticias
   </code>
 </pre>

#

 
 ## consume the api and get the response data

<pre>
  <code>
    const [apiNoticias, setApiNoticias]= useState({apis: []})
    const getAPI= async()=>{
    const { data }= await api.get('/v2/top-headlines?sources=bbc-news')
    setApiNoticias({
    apis: data 
    })
    }
    getAPI()
  </code>
</pre>




##              ... IMPORTANT ...
In order for the component re-rendering to be displayed correctly with API response in the UI it is necessary to treat it within a CONDITION as in the example below where the ternary operator is used

<pre>
  <code>
  
return (
 {
   apiNoticias.apis ? 
<p>   { apiNoticias.apis.length }</p>   : 'Loading...'
  }
)
  </code>
</pre>


