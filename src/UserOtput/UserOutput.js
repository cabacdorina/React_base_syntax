import React from 'react';
import './UserOutput.css';

const userOutput = (myProps) => {
  return(
      <div className={"UserOtput"}>
        <p>Hi {myProps.username} !</p>
        <p>How are you {myProps.username} ?</p>
      </div>
  );
};

export default userOutput;