import React,{useEffect, useState} from 'react'
import imagem from '../../assets/icons/icone-pessoas.png'
import imagemRetorno from '../../assets/icons/retorno.png'
import {ImagemLogo, ContainerHeader, TituloAplicacao, BotaoLimparMatches} from './styled'
import {BASE_URL} from '../../constants/urls'
import axios from 'axios'

const Header = (props) =>{  

    const limparListaMatches = () => {

         axios.put(`${BASE_URL}/clear`)
         .then(() =>{            
              props.limpaMatches()
          })
         .catch(erro =>{console.log(erro)})
    }
    return (
          <ContainerHeader>
               {props.mudaTela? <ImagemLogo src={imagem} onClick={props.mudaTela}/>:<ImagemLogo src={imagemRetorno} onClick={props.voltaTela} />} 
               <BotaoLimparMatches onClick={limparListaMatches}>Limpar Matches</BotaoLimparMatches>
               <TituloAplicacao>AstroMatch</TituloAplicacao>
          </ContainerHeader>
    )
}

export default Header
