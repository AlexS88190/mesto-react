import React from 'react';

import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import PopupWithForm from "./PopupWithForm.js";
import ImagePopup from "./ImagePopup.js";

import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

import {api} from "../utils/api";
import EditProfilePopup from "./EditProfilePopup.js";

function App() {
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState(null);

    const [currentUser, setCurrentUser] = React.useState('');

    React.useEffect(() => {
        api.getUserInfo()
            .then(res => {
                setCurrentUser(res);
            })
            .catch(error => console.log(error));
    },[])

    function handleEditProfileClick() {
        setIsEditProfilePopupOpen(true);
    }

    function handleAddPlaceClick() {
        setIsAddPlacePopupOpen(true);
    }

    function handleEditAvatarClick() {
        setIsEditAvatarPopupOpen(true);
    }

    function closeAllPopups() {
        setIsEditProfilePopupOpen(false);
        setIsAddPlacePopupOpen(false);
        setIsEditAvatarPopupOpen(false);
        setSelectedCard(null)
    }

    function handleCardClick(itemListCards) {
        setSelectedCard(itemListCards)
    }


    return (
            <div className="page">
                <CurrentUserContext.Provider value={currentUser}>
                    <div className="page__content">
                        <Header/>
                        <Main
                            onEditProfile={handleEditProfileClick}
                            onAddPlace={handleAddPlaceClick}
                            onEditAvatar={handleEditAvatarClick}
                            onCardClick={handleCardClick}
                        />
                        <Footer/>
                    </div>

                    <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} />

                    <PopupWithForm
                        name='place'
                        title='Новое место'
                        isOpen={isAddPlacePopupOpen}
                        onClose={closeAllPopups}
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

                    <PopupWithForm
                        name='update'
                        title='Обновить аватар'
                        isOpen={isEditAvatarPopupOpen}
                        onClose={closeAllPopups}
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

                    <PopupWithForm
                        name='remove'
                        title='Вы уверены?'
                        onClose={closeAllPopups}
                        buttonTitleSubmit='Да'
                    >
                    </PopupWithForm>

                    <ImagePopup card={selectedCard} onClose={closeAllPopups}/>

                </CurrentUserContext.Provider>
            </div>
    );
}

export default App;