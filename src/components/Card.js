import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";

function Card({onCardClick, card}) {
    const currentUser = React.useContext(CurrentUserContext);

    const isOwn = card.owner._id === currentUser._id;
    const cardDeleteButtonClassName = (`card__delete-button ${isOwn ? 'card__delete-button_visible' : 'card__delete-button_hidden'}`);

    const isLiked = card.likes.some(i => i._id === currentUser._id);
    const cardLikeButtonClassName = `...`;

    function handleClick() {
        onCardClick(card);
    }

    return (
        <li className="elements__item">
            <div className="elements__image" onClick={handleClick} style={{backgroundImage: `url(${card.link})`}}/>
            <button className="elements__trash"/>
            <div className="elements__content">
                <h2 className="elements__title">{card.name}</h2>
                <div className="elements__like-container">
                    <button className="elements__like-button" type="button"
                            aria-label="нравится"/>
                    <p className="elements__like-counter">{card.likes.length}</p>
                </div>
            </div>
        </li>
    )
}

export default Card

