import React from 'react';
import ReactDOM from 'react-dom/client';

import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import PopupWithForm from "./PopupWithForm.js";
import ImagePopup from "./ImagePopup.js";

function App() {
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);


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
    }

    return (
        <div className="page">
            <div className="page__content">
                <Header/>
                <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick}/>
                <Footer/>
            </div>
            <PopupWithForm
                name={'profile'}
                title={'Редактировать профиль'}
                isOpen={isEditProfilePopupOpen}
                onClose={closeAllPopups}
            >
                <input id="name-input" className="popup__input popup__input_type_name" type="text"
                       placeholder="имя"
                       name="name_profile" minLength="2" maxLength="40" required/>
                <span className="name-input-error popup__input-error"/>
                <input id="about-input" className="popup__input  popup__input_type_about" type="text"
                       placeholder="о себе" name="about_profile" minLength="2" maxLength="200" required/>
                <span className="about-input-error popup__input-error"/>
                <button className="popup__save-button" type="submit">Сохранить</button>
            </PopupWithForm>

            <PopupWithForm
                name={'place'}
                title={'Новое место'}
                isOpen={isAddPlacePopupOpen}
                onClose={closeAllPopups}
            >
                <input id="place-input" className="popup__input popup__input_type_place" type="text"
                       placeholder="Название" name="place" minLength="2" maxLength="30" required/>
                <span className="place-input-error popup__input-error"/>
                <input id="link-input" className="popup__input popup__input_type_link" type="url"
                       placeholder="Ссылка на картинку" name="link" required/>
                <span className="link-input-error popup__input-error"/>
                <button className="popup__save-button" type="submit">Создать</button>
            </PopupWithForm>

            <PopupWithForm
                name={'update'}
                title={'Обновить аватар'}
                isOpen={isEditAvatarPopupOpen}
                onClose={closeAllPopups}
            >
                <input id="link-input-avatar" className="popup__input popup__input_type_link" type="url"
                       placeholder="Ссылка на аватар" name="link" required/>
                <span className="link-input-avatar-error popup__input-error"/>
                <button className="popup__save-button" type="submit">Сохранить</button>
            </PopupWithForm>

            <PopupWithForm
                name={'remove'}
                title={'Вы уверены?'}
                onClose={closeAllPopups}
            >
                <button className="popup__save-button popup__save-button_remove" type="submit">Да</button>
            </PopupWithForm>

            <ImagePopup />


            {/*<div className="popup popup_type_profile">*/}
            {/*    <div className="popup__container">*/}
            {/*        <button className="popup__close-button popup__close-button_profile" type="button"*/}
            {/*                aria-label="закрыть"/>*/}
            {/*        <h2 className="popup__title">Редактировать профиль</h2>*/}
            {/*        <form className="popup__form popup__form_profile" name="profile" noValidate>*/}
            {/*            <input id="name-input" className="popup__input popup__input_type_name" type="text"*/}
            {/*                   placeholder="имя"*/}
            {/*                   name="name_profile" minLength="2" maxLength="40" required/>*/}
            {/*            <span className="name-input-error popup__input-error"/>*/}
            {/*            <input id="about-input" className="popup__input  popup__input_type_about" type="text"*/}
            {/*                   placeholder="о себе" name="about_profile" minLength="2" maxLength="200" required/>*/}
            {/*            <span className="about-input-error popup__input-error"/>*/}
            {/*            <button className="popup__save-button" type="submit">Сохранить</button>*/}
            {/*        </form>*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*<div className="popup popup_type_place">*/}
            {/*    <div className="popup__container">*/}
            {/*        <button className="popup__close-button popup__close-button_place" type="button"*/}
            {/*                aria-label="закрыть"/>*/}
            {/*        <h2 className="popup__title">Новое место</h2>*/}
            {/*        <form className="popup__form popup__form_place" name="place" noValidate>*/}
            {/*            <input id="place-input" className="popup__input popup__input_type_place" type="text"*/}
            {/*                   placeholder="Название" name="place" minLength="2" maxLength="30" required/>*/}
            {/*            <span className="place-input-error popup__input-error"/>*/}
            {/*            <input id="link-input" className="popup__input popup__input_type_link" type="url"*/}
            {/*                   placeholder="Ссылка на картинку" name="link" required/>*/}
            {/*            <span className="link-input-error popup__input-error"/>*/}
            {/*            <button className="popup__save-button" type="submit">Создать</button>*/}
            {/*        </form>*/}
            {/*    </div>*/}
            {/*</div>*/}





            {/*<div className="popup popup_type_update">*/}
            {/*    <div className="popup__container">*/}
            {/*        <button className="popup__close-button popup__close-button_profile" type="button"*/}
            {/*                aria-label="закрыть"/>*/}
            {/*        <h2 className="popup__title">Обновить аватар</h2>*/}
            {/*        <form className="popup__form popup__form_update" name="update" noValidate>*/}
            {/*            <input id="link-input-avatar" className="popup__input popup__input_type_link" type="url"*/}
            {/*                   placeholder="Ссылка на аватар" name="link" required/>*/}
            {/*            <span className="link-input-avatar-error popup__input-error"/>*/}
            {/*            <button className="popup__save-button" type="submit">Сохранить</button>*/}
            {/*        </form>*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*<div className="popup popup_type_remove">*/}
            {/*    <div className="popup__container">*/}
            {/*        <button className="popup__close-button popup__close-button_profile" type="button"*/}
            {/*                aria-label="закрыть"/>*/}
            {/*        <h2 className="popup__title popup__title_delete">Вы уверены?</h2>*/}
            {/*        <form className="popup__form popup__form_card-remove" name="update" noValidate>*/}
            {/*            <button className="popup__save-button popup__save-button_remove" type="submit">Да</button>*/}
            {/*        </form>*/}
            {/*    </div>*/}
            {/*</div>*/}

        </div>
    );
}

export default App;