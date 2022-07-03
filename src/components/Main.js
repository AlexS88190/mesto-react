import React from 'react';
import Card from "./Card.js";

import { CurrentUserContext } from "../contexts/CurrentUserContext";

import {api} from "../utils/api";

function Main({onEditProfile, onAddPlace, onEditAvatar, onCardClick}) {

    const currentUser = React.useContext(CurrentUserContext);

    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        api.getCards()
            .then(res => {setCards(res)})
            .catch(error => console.log(error));
    },[])

    function handleCardLike(card) {
        const isLiked = card.likes.some(i => i._id === currentUser._id);
        api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
            setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
        });
    }

    return (
        <main className="main">
            <section className="profile">
                <div className="profile__avatar-container">
                    <div className="profile__avatar" style={{backgroundImage: `url(${currentUser.avatar})`}}/>
                    <button className="profile__avatar-button" onClick={onEditAvatar} type="button" aria-label="редактировать аватар"/>
                </div>
                <div className="profile__info">
                    <h1 className="profile__title">{currentUser.name}</h1>
                    <button className="profile__edit-button" onClick={onEditProfile} type="button" aria-label="редактировать профиль"/>
                </div>
                <button className="profile__add-button" onClick={onAddPlace} type="button" aria-label="добавить"/>
                <p className="profile__subtitle">{currentUser.about}</p>
            </section>
            <section className="elements">

                <ul className="elements__list">
                    {cards.map(item => <Card card={item} key={item._id} onCardClick={onCardClick} onCardLike={handleCardLike}/>)}
                </ul>
            </section>
        </main>
    )
}

export default Main;