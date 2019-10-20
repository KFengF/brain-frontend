import React from 'react';

const Navigation = ({ onRouteChange, route }) => {
    if(route === 'SignIn') {
        return (
            <nav className='flex justify-end'>
                <p onClick={ () => onRouteChange('Register') } className='f3 dim underline pa3 pointer link'>Register</p>
            </nav>
        );
    } else if(route === 'Register') {
        return (
            <nav className='flex justify-end'>
                <p onClick={ () => onRouteChange('SignIn') } className='f3 dim underline pa3 pointer link'>Sign In</p>
            </nav>
        );
    } else {
        return(
            <nav className='flex justify-end'>
                <p onClick={ () => onRouteChange('SignIn') } className='f3 dim underline pa3 pointer link'>Sign Out</p>
            </nav>
        )
    }
}

export default Navigation;