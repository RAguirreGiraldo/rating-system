import React from 'react';
import logoReact from '../img/logoReact.png';


function Dialog(props) {
  return (
    <div className="dialog">
        <img src={logoReact} alt="Logo React" />
        <button className="close-dialog-button"  onClick={props.onClose}>
            Close Dialog
        </button>
    </div>
  )
}

export default Dialog;