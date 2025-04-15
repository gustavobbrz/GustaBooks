import styled from "styled-components"

const Input = styled.input`
    background: rgba(255, 255, 255, 0.1);
    border: 2px solid rgba(255, 255, 255, 0.3);
    padding: 20px 140px;
    border-radius: 50px;
    width: 300px;
    color: #FFF;
    font-size: 16px;
    margin-bottom: 30px;
    transition: all 0.3s ease;
    font-family: 'Poppins', sans-serif;

    &:focus {
        outline: none;
        border-color: rgba(255, 255, 255, 0.8);
        background: rgba(255, 255, 255, 0.15);
        box-shadow: 0 0 15px rgba(255, 255, 255, 0.1);
    }

    &::placeholder {
        color: rgba(255, 255, 255, 0.7);
        font-size: 16px;
    }

    @media (max-width: 768px) {
        width: 80%;
        padding: 15px 30px;
    }
`

export default Input