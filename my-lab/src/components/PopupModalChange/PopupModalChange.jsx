import React, { useState } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import ButtonBlackStyle from "../ButtonBlackStyle/ButtonBlackStyle";
import './PopupModalChange.css';

function PopupModalChange({ openModalChange, toggleOpenModalChange, indexChangeElement, name, description, changeFunction }) {
    const [inputName, setInputName] = useState(name);
    const [inputDescription, setInputDescription] = useState(description);

    const handleNameChange = (e) => setInputName(e.target.value);
    const handleDescriptionChange = (e) => setInputDescription(e.target.value);

    return (
        <Popup open={openModalChange} closeOnDocumentClick>
            <div className="popup-modal">
                <button onClick={toggleOpenModalChange}>X</button>
                <h3>Изменение элемента мебели</h3>
                <form>
                    <div>
                        <label>Название</label>
                        <input value={inputName} placeholder="Введите название" onChange={handleNameChange} />
                    </div>
                    <div>
                        <label>Описание</label>
                        <input value={inputDescription} placeholder="Введите описание" onChange={handleDescriptionChange} />
                    </div>
                </form>
                <ButtonBlackStyle 
                    title="Сохранить" 
                    onClickEvent={() => {
                        changeFunction(indexChangeElement, inputName, inputDescription);
                        toggleOpenModalChange(); 
                    }} 
                />
            </div>
        </Popup>
    );
}

export default PopupModalChange;
