import React from "react";
const banner=(props) => {
    return <div className='ban-in'>
        <div className='ban' onClick={props.click}>this is {props.name} and {props.age}
        <br/>
    <input type='text' onChange={props.change}/>
    </div>
    
    </div>
    
}
export default banner