import React from 'react'
import './toggle.css';

const Toggle2 = ({toggle1,handleToggleChange1}) => {
    return (
        
            <div className='toggle-container' onClick={handleToggleChange1}>
                <div className={`toggle-btn ${!toggle1 ?"disable":""}`} >{toggle1 ? 'Location' : 'Radius'}</div>
            </div>
        
    )
}

export default Toggle2
