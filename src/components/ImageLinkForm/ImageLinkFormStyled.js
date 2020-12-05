import styled from 'styled-components';

export const ImageLinkFormStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    & p {
        font-size: 30px;
        color: darkcyan;
    }
    & > div {
        margin-top: 30px;
        display: flex;
        max-width: 90%;
        width: 900px;
        padding: 40px;
        background:
        radial-gradient(circle farthest-side at 0% 50%,#fb1 23.5%,rgba(240,166,17,0) 0)21px 30px,
        radial-gradient(circle farthest-side at 0% 50%,#B71 24%,rgba(240,166,17,0) 0)19px 30px,
        linear-gradient(#fb1 14%,rgba(240,166,17,0) 0, rgba(240,166,17,0) 85%,#fb1 0)0 0,
        linear-gradient(150deg,#fb1 24%,#B71 0,#B71 26%,rgba(240,166,17,0) 0,rgba(240,166,17,0) 74%,#B71 0,#B71 76%,#fb1 0)0 0,
        linear-gradient(30deg,#fb1 24%,#B71 0,#B71 26%,rgba(240,166,17,0) 0,rgba(240,166,17,0) 74%,#B71 0,#B71 76%,#fb1 0)0 0,
        linear-gradient(90deg,#B71 2%,#fb1 0,#fb1 98%,#B71 0%)0 0 #fb1;
        background-size: 40px 60px;
        border-radius: 15px;

        & input {
            flex: 3;
            font-size: 30px;
        }

        & button {
            flex: 1;
            border: none;
            background-color: #1796ab;
            color: white;
            padding: 15px;
            margin-left: 20px;
            border-radius: 5px;
            font-size: 30px;
            box-shadow: 0px 2px 5px 3px rgba(23, 25, 95, 0.44);
            transition: .2s transform ease;
            cursor: pointer;

            &:active {
                transform: scale(.90);
                box-shadow: 0 1px 5px 1px rgba(23, 25, 95, 0.44);
            }
        }
    }
`;