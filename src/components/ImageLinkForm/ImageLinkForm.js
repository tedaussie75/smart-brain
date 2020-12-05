import React from 'react';
import {ImageLinkFormStyled} from './ImageLinkFormStyled';

export const ImageLinkForm = ({getInputValue, onSubmit}) =>  {
    return(
        <ImageLinkFormStyled>
            <p>{'This Magic Brain will detect faces in your pictures. Give it a Try !'}</p>
            <div>
                <input onChange={getInputValue} type="text" />
                <button onClick={onSubmit}>Detect</button>
            </div>
        </ImageLinkFormStyled>
    )
}