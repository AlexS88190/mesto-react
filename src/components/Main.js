import React from 'react';
import ReactDOM from 'react-dom/client';
import { api } from "../utils/API.js";
import Card from "./Card.js";
import pictureEditAvatar from '../images/avatar.jpg';

function Main(props) {
    const [userName, setUserName] = React.useState();
    const [userDescription , setUserDescription ] = React.useState();
    const [userAvatar, setUserAvatar] = React.useState();
    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        api.getProfileInfo().then(res => {
            setUserName(res.name);
            setUserDescription(res.about);
            setUserAvatar(res.avatar);
        });

        api.getCards().then(res => {
            console.log(res)
            setCards(res)
        });
    },[])

    return (
        <main className="main">
            <section className="profile">
                <div className="profile__avatar-container">
                    <div className="profile__avatar" style={{backgroundImage: `url(${userAvatar})`}}/>
                    <button className="profile__avatar-button" onClick={props.onEditAvatar} type="button" aria-label="редактировать аватар"/>
                </div>
                <div className="profile__info">
                    <h1 className="profile__title">{userName}</h1>
                    <button className="profile__edit-button" onClick={props.onEditProfile} type="button" aria-label="редактировать профиль"/>
                </div>
                <button className="profile__add-button" onClick={props.onAddPlace} type="button" aria-label="добавить"/>
                <p className="profile__subtitle">{userDescription}</p>
            </section>
            <section className="elements">

                <ul className="elements__list">
                    {cards.map(item => <Card card={item} key={item._id}/>)}
                </ul>
            </section>
        </main>
    )
}

export default Main;