import React, {useState} from "react"
import "./AddTask.css"
import Button from "./Button"

export default ({handleTaskAddition}) => {
    const[ImputData, SetImputData] = useState("")

    const handleImputChange = (e) => {
        // console.log(e.target.value);
        SetImputData(e.target.value);
    }

    const handleTaskAddClick = () => {
        handleTaskAddition(ImputData);
        SetImputData("");
    }

    return(
        <div className="add-task-container">
            <input onChange={handleImputChange} value={ImputData} className="add-task-input" type="text"/>
            <div className="button-container">
                <Button onClick={handleTaskAddClick}>Adicionar</Button>
            </div>
        </div>  
    );
}