import styled from 'styled-components';

export const NavigationStyled = styled.nav`
    display: flex;
    justify-content: space-between;
    padding: 20px 30px;
    text-align: right;
    
    & p {
        font-size: 30px;
        color: white;
        cursor: pointer;
        text-decoration: underline transparent;
        transition: .3s text-decoration-color ease;
        &:hover {
            text-decoration-color: white;
        }
    } 
`;