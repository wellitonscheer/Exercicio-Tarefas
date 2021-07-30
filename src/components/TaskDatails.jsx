import React from 'react';
import { useParams } from 'react-router-dom';
import {useHistory} from "react-router-dom";

import "./TaskDetails.css"

import Button from './Button';

export default () => {
    const params = useParams();
    const history = useHistory();

    const handleBackButtonClick = () => {
        history.goBack();
    }

    return(
        <>
            <div className="button-voltar">
                <Button onClick={handleBackButtonClick}>Voltar</Button>
            </div>
            <div className="container-detalhes">
                <h2>{params.taskTitle}</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis explicabo possimus, corrupti excepturi itaque magni.</p>
            </div>
        </>
    );
}