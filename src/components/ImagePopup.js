function ImagePopup(props) {

        return (
            <div className={`popup popup_type_zoom ${props.card && 'popup_opened'}`}>
                <figure className="popup__zoom-container">
                    <button className="popup__close-button popup__close-button_zoom" type="button"
                            aria-label="закрыть" onClick={props.onClose}/>
                    <img src={props.card && props.card.link} className="popup__image" alt={props.card && props.card.name}/>
                    <figcaption className="popup__zoom-title">{props.card && props.card.name}</figcaption>
                </figure>
            </div>
        )

}

export default ImagePopup;