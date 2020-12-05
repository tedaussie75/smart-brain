import styled from 'styled-components';

export const FaceRecognitionStyled = styled.div`
    width: fit-content;
    margin: 20px auto;
    display: flex;
    justify-content: center;
    position: relative;

    img {
        max-width: 300px;
    }
    
    & .bounding-box{
        position: absolute;
        box-shadow: 0px 0px 0px 3px red inset;
    }
`;