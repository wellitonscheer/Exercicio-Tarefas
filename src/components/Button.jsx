import React from "react"
import "./Button.css"

export default ({children, onClick}) => {
    return(
        <button onClick={onClick} className="button">
            {children}
        </button>
    );
}