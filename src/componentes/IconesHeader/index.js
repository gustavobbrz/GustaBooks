import perfil from '../../imagens/perfil.svg'
import sacola from '../../imagens/sacola.svg'
import styled from 'styled-components'

const Icone = styled.li`
    margin-right: 40px;
    width: 25px;
`

const Icones = styled.ul`
    display: flex;
    align-items: center;
`

const icones = [perfil, sacola]

function IconesHeader() {
    return (
        <Icones>
            { icones.map( (icone, index) => (
              <Icone key={index}>
                <img src={icone} alt="ícone" />
              </Icone>
            )) }
        </Icones>
    )
}

export default IconesHeader