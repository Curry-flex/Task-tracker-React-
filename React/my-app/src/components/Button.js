
import React from 'react'
import Header from './Header'

const Button =({name ,color ,showAdd,state})=>{


    return(
        <div className="header">
         <h1>Task tracker</h1>
        <button className="btn" onClick={showAdd}>{state ? 'Close' : 'Add'}</button>
        
      
        </div>)
}

Button.defaultProps = {
    name:"none",
    color:"yellow"
}


export default Button