import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({isOpen, onClose}) {
    return(
        <PopupWithForm
            name='place'
            title='Новое место'
            isOpen={isOpen}
            onClose={onClose}
            buttonTitleSubmit='Создать'
        >
            <input
                id="place-input"
                className="popup__input popup__input_type_place"
                type="text"
                placeholder="Название"
                name="place"
                minLength="2"
                maxLength="30"
                required
            />
            <span className="place-input-error popup__input-error"/>
            <input
                id="link-input"
                className="popup__input popup__input_type_link"
                type="url"
                placeholder="Ссылка на картинку"
                name="link"
                required
            />
            <span className="link-input-error popup__input-error"/>
        </PopupWithForm>
    )
}

export default AddPlacePopup