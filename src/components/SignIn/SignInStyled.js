
import styled from 'styled-components';

export const SignInStyled = styled.div`
    margin: 0 auto;
    width: 450px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0px 0px 13px 1px #2195aa;
    padding: 20px;
    margin-bottom: 50px;
    
    & legend {
        font-size: 70px;
        padding: 50px 0;
        color: antiquewhite;
    }
    
    & label {
        font-size: 25px;
        margin-top: 20px;
        color: white;
    }

    & input {
        background: transparent;
        border: 0;
    }
    
    & input:not([type='submit']) {
        width: 250px;
        padding: 10px;
        font-size: 20px;
        border-radius: 2px;
        border-bottom: #2195aa;
        border-bottom-style: solid;
        outline: none;
        color: white;
    }
    
    & input[type='submit'] {
        margin: 50px;
        padding: 15px 40px;
        border: none;
        background-color: #2195ab;
        color: white;
        outline: none;
        cursor: pointer;
        transition: .1s transform ease;
    }

    & input[type='submit']:hover {
        transform: scale(1.1);
    }

    & input[type='submit']:active {
        transform: scale(1);
    }

    & p {
        color: white;
        cursor: pointer;
    }
`;


