import React, { useState } from 'react';
import { BackgroundContext } from './BackgroundContext';

const BackgroundState = ({children}) => {

    const [colorsCurrent, setColorsCurrent] = useState({
        colorPrimario: 'transparent',
        colorSecundario: 'transparent'
    });

    const [prevcolors, setPrevColors] = useState({
        colorPrimario: 'transparent',
        colorSecundario: 'transparent'
    })

    return (
        <BackgroundContext.Provider 
            value={{
                colorsCurrent,
                prevcolors,
                setColorsCurrent,
                setPrevColors

            }}
        >{children}
        </BackgroundContext.Provider>
       
    );
};

export default BackgroundState;