import React from 'react';

const Display = (props) => {
  
    return (

      <div>
        <h1> hi </h1>
        <h1> {props.title} </h1>
        <h1> {props.message} </h1>
      </div>
      
    )
}

export default Display;

