function Card(props) {

    function handleClick() {
        props.onCardClick(props.card);
    }
    return (
        <li className="elements__item">
            <div className="elements__image" onClick={handleClick} style={{backgroundImage: `url(${props.card.link})`}}/>
            <button className="elements__trash"/>
            <div className="elements__content">
                <h2 className="elements__title">{props.card.name}</h2>
                <div className="elements__like-container">
                    <button className="elements__like-button" type="button"
                            aria-label="нравится"/>
                    <p className="elements__like-counter">{props.card.likes.length}</p>
                </div>
            </div>
        </li>
    )
}

export default Card

