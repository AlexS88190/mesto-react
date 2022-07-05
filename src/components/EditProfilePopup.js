import PopupWithForm from "./PopupWithForm";
import React from "react";
import Card from "./Card";

function EditProfilePopup({isOpen, onClose}) {
    return (
        <PopupWithForm
            name='profile'
            title='Редактировать профиль'
            isOpen={isOpen}
            onClose={onClose}
            buttonTitleSubmit='Сохранить'
        >
            <input
                id="name-input"
                className="popup__input popup__input_type_name"
                type="text"
                placeholder="имя"
                name="name_profile"
                minLength="2"
                maxLength="40"
                required
            />
            <span className="name-input-error popup__input-error"/>
            <input
                id="about-input"
                className="popup__input  popup__input_type_about" type="text"
                placeholder="о себе"
                name="about_profile"
                minLength="2"
                maxLength="200"
                required
            />
            <span className="about-input-error popup__input-error"/>
        </PopupWithForm>
    )
}

export default EditProfilePopup