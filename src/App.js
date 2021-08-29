
import react, {useState, useEffect} from 'react'
import './App.css';
import api from './services/endpoint.js'


function App() {

// armazena os dados de resposta da api
const [apiNoticias, setApiNoticias]= useState({apis: []})

useEffect(()=>{
  try {
    const getAPI= async()=>{

      // consumir a api e obter os dados de resposta 
      const { data }= await api.get('/v2/top-headlines?sources=bbc-news')
      setApiNoticias({
        apis: data   // novos valores (dados) do state 
      })
    }
    getAPI()
  } catch (error) {
    console.log(error.response.status)  
    console.log('eRRor: '+ error)  
  } 
},[])

const result= apiNoticias.apis.articles
console.log(result)

  return (
    <>
    <h1>The top 10 headlines around the world today </h1>

{/*                         ... IMPORTANTE ... 
               Para que a re-renderizaçâo da resposta da API seja exibida corretamente na UI
               é necessário trata-la dentro de uma CONDIÇÂO como no exemplo abaixo
               onde o operador ternário e utilizado
*/}

     {result?
              <ul>
                {result.map((el)=>{
                  const moment= String(el.publishedAt)
                  const dates= moment.slice(0, 10)
                  return (
                    <li key={el.title}>

                      <h2>{el.title}</h2>
                      <p>{el.author} {dates}</p>
                      <p>{el.description}</p>
                      <p>url: <a href={el.url}>{el.url}</a></p>
                    </li>
                    )
                  })
                }
              </ul> 
      : 'Loading...'
     }
    </>
  );
}

export default App;
