import React from 'react'
import {ContainerCardInformacaoPessoa, ImagemPerfil, Descricao, Apresentacao} from './styled'

const CardInformacoesPessoa = (props) =>{      

    return (
          <ContainerCardInformacaoPessoa>
               <ImagemPerfil src={props.perfilPessoa.photo} alt="Foto da pessoa"/>
               <Apresentacao><span>{props.perfilPessoa.name}</span> , {props.perfilPessoa.age}</Apresentacao>
               <Descricao>{props.perfilPessoa.bio}</Descricao>
          </ContainerCardInformacaoPessoa>           
          
    )
}
export default CardInformacoesPessoa
