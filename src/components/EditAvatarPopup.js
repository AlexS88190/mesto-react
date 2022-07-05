import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({isOpen, onClose}) {
    return (
        <PopupWithForm
            name='update'
            title='Обновить аватар'
            isOpen={isOpen}
            onClose={onClose}
            buttonTitleSubmit='Сохранить'
        >
            <input
                id="link-input-avatar"
                className="popup__input popup__input_type_link"
                type="url"
                placeholder="Ссылка на аватар"
                name="link"
                required
            />
            <span className="link-input-avatar-error popup__input-error"/>
        </PopupWithForm>
    )
}

export default EditAvatarPopup;