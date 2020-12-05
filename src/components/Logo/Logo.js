import React from 'react';
import Tilt from 'react-tilt';
import Brain from '../../img/brain-1.png';
import {LogoStyled} from './LogoStyled';

export const Logo = () =>  {
    const options = {max : 45},
          style = {height: 100, width: 100, transformStyle: 'preserve-3d'};
    return(
        <Tilt className="Tilt" options={options} style={style}>
            <LogoStyled>
                <img src={Brain} alt="logo" />
            </LogoStyled>
        </Tilt>
    )
}