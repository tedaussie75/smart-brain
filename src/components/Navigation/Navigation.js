import React from 'react';
import {NavigationStyled} from './NavigationStyled';
import {Logo} from '../Logo/Logo';

export const Navigation =({onRouteChange, isSignedIn}) =>  {
    if(isSignedIn) {
        return(
            <NavigationStyled>
                <Logo />
                <p onClick={()=>onRouteChange('signout')}>
                    Sign out
                </p>
            </NavigationStyled>
        )
    }else {
        return(
            <NavigationStyled>
                <Logo />
                <p onClick={()=>onRouteChange('signin')}>
                    Sign In
                </p>
                <p onClick={()=>onRouteChange('register')}>
                    Register
                </p>
            </NavigationStyled>
        )
    }
}