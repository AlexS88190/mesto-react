import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App";

function PopupWithForm(props) {

    return (
        <div className={`popup popup_type_${props.name}`}>
            <div className="popup__container">
                <button className="popup__close-button popup__close-button_profile" type="button"
                        aria-label="закрыть"/>
                <h2 className="popup__title">{props.title}</h2>
                <form className={`popup__form popup__form_${props.name}`} name={`${props.name}`} noValidate>
                    {props.children}
                </form>
            </div>
        </div>
  )
}

export default PopupWithForm;