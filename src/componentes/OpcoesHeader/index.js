import styled from 'styled-components'

const Opcao = styled.li`
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    padding: 0 5px;
    cursor: pointer;
    min-width: 120px;
    color: #333;
    transition: color 0.3s;

    &:hover {
        color: #002F52;
    }
`

const Opcoes = styled.ul`
    display: flex;
`

const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE']

function OpcoesHeader() {
    return (
        <Opcoes>
            { textoOpcoes.map( (texto, index) => (
                <Opcao key={index}><p>{texto}</p></Opcao>
            ) ) }
      </Opcoes>
    )
}

export default OpcoesHeader