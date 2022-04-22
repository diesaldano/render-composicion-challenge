import React from 'react';
import WithStorageListener from './withStorageListener.js';
import './changeAlert.css';

function ChangeAlert({ show, toggleShow }) {
    if(show){
        return (
            <div className="ChangeAlert">
                <p>
                    ¡Has cambiado el estado de una tarea!
                </p>
                <button onClick={()=> toggleShow(false)}>
                    Cerrar
                </button>
            </div>
        );
    } else {
        return null;
    }
}

const ChangeAlertWithStorageListener = WithStorageListener(ChangeAlert);

export { ChangeAlertWithStorageListener };