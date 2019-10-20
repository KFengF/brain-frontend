import React from 'react';
import Tilt from 'react-tilt';
import brain from '../resources/brain.png';

const tiltStyle = { 
    height: 150, 
    width: 150, 
    background: 'linear-gradient(89deg, #ff53df, #04c8de)' 
}

const Logo = () =>{
    return (
        <div className="ma4 mt0">
            <Tilt className="Tilt br2 shadow-2" options={{ max: 55 }} style={ tiltStyle } >
                <div className="Tilt-inner pa2"><img className="w-100" alt="logo" src={ brain } /></div>
            </Tilt>
        </div>
    );
}

export default Logo;