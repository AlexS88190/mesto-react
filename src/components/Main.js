
function handleEditAvatarClick() {
    const popupEditAvatar = document.querySelector('.popup_type_update');
    popupEditAvatar.classList.add('popup_opened');
}

function handleEditProfileClick() {
    const popupEditProfile = document.querySelector('.popup_type_profile');
    popupEditProfile.classList.add('popup_opened');
}

function handleAddPlaceClick() {
    const popupAddPlace = document.querySelector('.popup_type_place');
    popupAddPlace.classList.add('popup_opened');
}

function Main() {
    return (
        <main className="main">
            <section className="profile">
                <div className="profile__avatar-container">
                    <div className="profile__avatar"/>
                    <button className="profile__avatar-button" onClick={handleEditAvatarClick} type="button" aria-label="редактировать аватар"/>
                </div>
                <div className="profile__info">
                    <h1 className="profile__title">Felix Baumgartner</h1>
                    <button className="profile__edit-button" onClick={handleEditProfileClick} type="button" aria-label="редактировать профиль"/>
                </div>
                <button className="profile__add-button" onClick={handleAddPlaceClick} type="button" aria-label="добавить"/>
                <p className="profile__subtitle">Red Bull Stratos</p>
            </section>
            <section className="elements">
                <ul className="elements__list"/>
            </section>
        </main>
    )
}

export default Main;