import logo from '../../imagens/logo.svg'
import styled from 'styled-components'

const LogoContainer = styled.div`
    display: flex;
    font-size: 30px;
    align-items: center;
    padding: 20px;
`

const LogoImage = styled.img`
    margin-right: 10px;
    width: 40px;
    height: 40px;
`

const LogoText = styled.p`
    font-family: 'Poppins', sans-serif;
    color: #002F52;
    
    strong {
        color: #326589;
    }
`

function Logo() {
    return (
        <LogoContainer>
            <LogoImage
                src={logo}
                alt='GustaBooks logo' 
            />
            <LogoText><strong>Gusta</strong>Books</LogoText>
        </LogoContainer>
    )
}

export default Logo