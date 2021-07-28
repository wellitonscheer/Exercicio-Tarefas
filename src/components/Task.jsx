import React from 'react';
import "./Task.css"

export default ({task, handleTaskClick, handleTaskDeletion}) => {
    return(
        <div className="task-container" style={task.completed ? {borderLeft: '6px solid chartreuse'} : {}}>
            <div className="tesk-title" onClick={() => handleTaskClick(task.id)}>
                {task.title}
            </div>
            <div className="buttons-container">
                <button className="remove-task-button" onClick={() => handleTaskDeletion(task.id)}>X</button>
            </div>
        </div>
        // <div className="task-container">{task.title}</div>
    );
}
 
