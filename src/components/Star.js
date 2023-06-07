import React from 'react';
import { FaStar } from 'react-icons/fa';

function Star(props) {
  return (
    <FaStar
        color={props.isFilled ? "yellow" : "gainsboro"} 
        onClick={props.onStartClick}
    />
  )
}

export default Star;