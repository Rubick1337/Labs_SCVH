import React from "react";
import './ButtonAdd.css';

function ButtonAdd({ onClickEvent, newKey }) {
    const handleClick = () => {
        onClickEvent(newKey, "new.png", `NewElement${newKey}`);
    };

    return (
        <button className="button-add" onClick={handleClick}>
            Добавить
        </button>
    );
}

export default ButtonAdd;
