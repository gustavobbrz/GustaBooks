import Input from '../Input'
import styled from 'styled-components'
import { useState } from 'react'
import { livros } from './dadosPesquisa'

const PesquisaContainer = styled.section`
    background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
    color: #FFF;
    text-align: center;
    padding: 85px 0;
    min-height: 470px;
    width: 100%;
`

const Titulo = styled.h2`
    color: #FFF;
    font-size: 36px;
    text-align: center;
    width: 100%;
    margin-bottom: 20px;
    font-family: 'Poppins', sans-serif;
`

const Subtitulo = styled.h3`
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 40px;
    font-family: 'Poppins', sans-serif;
`

const Resultado = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px auto;
    cursor: pointer;
    background: rgba(255, 255, 255, 0.1);
    padding: 20px;
    border-radius: 10px;
    max-width: 600px;
    transition: all 0.3s ease;

    p {
        width: 200px;
        font-size: 18px;
        margin-left: 20px;
    }

    img {
        width: 100px;
        border-radius: 5px;
        box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    }

    &:hover {
        background: rgba(255, 255, 255, 0.2);
        transform: translateY(-2px);
        box-shadow: 0 6px 12px rgba(0,0,0,0.2);
    }
`

const ResultadosContainer = styled.div`
    max-height: 400px;
    overflow-y: auto;
    padding: 20px;
    margin-top: 20px;

    &::-webkit-scrollbar {
        width: 8px;
    }

    &::-webkit-scrollbar-track {
        background: rgba(255, 255, 255, 0.1);
        border-radius: 4px;
    }

    &::-webkit-scrollbar-thumb {
        background: rgba(255, 255, 255, 0.3);
        border-radius: 4px;
    }
`

const SemResultados = styled.p`
    font-size: 18px;
    color: rgba(255, 255, 255, 0.8);
    margin-top: 40px;
`

function Pesquisa() {
    const [livrosPesquisados, setLivrosPesquisados] = useState([])
    const [textoDigitado, setTextoDigitado] = useState('')

    const handlePesquisa = (evento) => {
        const texto = evento.target.value
        setTextoDigitado(texto)
        
        if (texto.length >= 2) {
            const resultadoPesquisa = livros.filter(livro => 
                livro.nome.toLowerCase().includes(texto.toLowerCase())
            )
            setLivrosPesquisados(resultadoPesquisa)
        } else {
            setLivrosPesquisados([])
        }
    }

    return (
        <PesquisaContainer>
            <Titulo>Encontre seu próximo livro</Titulo>
            <Subtitulo>Descubra milhares de títulos em nossa biblioteca digital</Subtitulo>
            <Input
                placeholder="Digite o nome do livro ou autor..."
                value={textoDigitado}
                onChange={handlePesquisa}
            />
            <ResultadosContainer>
                {livrosPesquisados.length > 0 ? (
                    livrosPesquisados.map(livro => (
                        <Resultado key={livro.id}>
                            <img src={livro.src} alt={livro.nome}/>
                            <p>{livro.nome}</p>
                        </Resultado>
                    ))
                ) : textoDigitado.length >= 2 ? (
                    <SemResultados>Nenhum livro encontrado para sua pesquisa.</SemResultados>
                ) : null}
            </ResultadosContainer>
        </PesquisaContainer>
    )
}

export default Pesquisa