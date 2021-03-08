import React,{useState,useEffect} from 'react'
import {ContainerTelaMatches, ListaMatches, Match, ImagemPessoaMatch, NomePessoaMatch}  from './styled'
import Header from '../../components/Header/Header'
import axios from 'axios'
import {BASE_URL} from '../../constants/urls'

function TelaMatches(props) {
  
  const[matches, setMatches] = useState([])

  useEffect(()=>{

     axios.get(`${BASE_URL}/matches`)
     .then(resposta =>{

       setMatches(resposta.data.matches)      
       props.mostraPerfilPessoa()       
       
     })
     .catch(erro =>{
       console.log(erro)
     })
     
  },[])    

  return ( 
    
    <ContainerTelaMatches>      
        <Header voltaTela={props.voltaTela} />
        <ListaMatches>
            {matches.map((match)=>{
               return <Match key={match.id}>
                         <ImagemPessoaMatch src={match.photo}/>                 
                         <NomePessoaMatch>{match.name}</NomePessoaMatch>                         
                      </Match>
            })}
        </ListaMatches>
    </ContainerTelaMatches>
  );
}

export default TelaMatches;
