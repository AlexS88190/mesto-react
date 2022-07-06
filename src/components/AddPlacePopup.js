import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({isOpen, onClose, onAddPlace}) {

    const [nameCard, setNameCard] = React.useState(null);
    const [linkCard, setLinkCard ] = React.useState(null);

    function handleChangeNameCard(event) {
        setNameCard(event.target.value)
    }

    function handleChangeLinkCard(event) {
        setLinkCard(event.target.value)
    }

    function handleSubmit(event) {
        event.preventDefault();
        onAddPlace({
            nameCard: nameCard, linkCard: linkCard
        });
        setNameCard(null);
        setLinkCard(null);
    }

    return(
        <PopupWithForm
            name='place'
            title='Новое место'
            isOpen={isOpen}
            onClose={onClose}
            buttonTitleSubmit='Создать'
            onSubmit={handleSubmit}
        >
            <input
                id="place-input"
                className="popup__input popup__input_type_place"
                type="text"
                placeholder="Название"
                name="place"
                minLength="2"
                maxLength="30"
                onChange={handleChangeNameCard}
                required
            />
            <span className="place-input-error popup__input-error"/>
            <input
                id="link-input"
                className="popup__input popup__input_type_link"
                type="url"
                placeholder="Ссылка на картинку"
                name="link"
                onChange={handleChangeLinkCard}
                required
            />
            <span className="link-input-error popup__input-error"/>
        </PopupWithForm>
    )
}

export default AddPlacePopup