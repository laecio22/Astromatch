import React from 'react'
import {ImagemIconeConfirmar, ImagemIconeDescartar, ContainerFooter} from './styled'
import iconeDescarte  from '../../assets/icons/icone-negativo.jpeg'
import iconeConfirmacao  from '../../assets/icons/icone-positivo.png'

const Footer = (props) =>{

    return (
          <ContainerFooter>
                <ImagemIconeConfirmar src={iconeConfirmacao}  onClick= {props.escolhaPessoa}/>
                <ImagemIconeDescartar src={iconeDescarte} onClick= {props.rejeitaPessoa}/>
          </ContainerFooter>
    )
}

export default Footer
