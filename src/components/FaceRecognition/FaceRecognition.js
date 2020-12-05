import React from 'react';
import {FaceRecognitionStyled} from './FaceRecognitionStyled';

export const FaceRecognition = ({detectedPicture, box}) =>  {
    return(
        <FaceRecognitionStyled>
            <img id="imageInput" src={detectedPicture} alt="" />
            <span className="bounding-box" style={{top: box.topRow,right: box.rightCol,bottom: box.bottomRow,left: box.leftCol}}></span>
        </FaceRecognitionStyled>
    )
}