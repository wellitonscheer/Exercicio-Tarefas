import React from 'react';
import { CgClose,CgInfo } from 'react-icons/cg';
import {useHistory} from "react-router-dom";

import "./Task.css"

export default ({task, handleTaskClick, handleTaskDeletion}) => {
    const history = useHistory()

    const handleTaskDetailsClick = () => {
        history.push(`/${task.title}`)
    }

    return(
        <div className="task-container" style={task.completed ? {borderLeft: '6px solid chartreuse'} : {}}>
            <div className="tesk-title" onClick={() => handleTaskClick(task.id)}>
                {task.title}
            </div>
            <div className="buttons-container">
                <button 
                    className="remove-task-button" 
                    onClick={() => handleTaskDeletion(task.id)}
                >
                    <CgClose />
                </button>
                <button 
                    className="ver-detalhes" 
                    onClick={handleTaskDetailsClick}
                >
                    <CgInfo />
                </button>
            </div>
        </div>
        // <div className="task-container">{task.title}</div>
    );
}
 
