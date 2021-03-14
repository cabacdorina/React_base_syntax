import React from 'react';

const userInput = (myProps) => {
    const inputStyle = {
        border: '2px solid red'
    };

    return(
        <input style={inputStyle}
            type="text" 
            onChange={myProps.changed} 
            value={myProps.currentName} />
    );
};

export default userInput;