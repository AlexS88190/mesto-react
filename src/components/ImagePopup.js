
function ImagePopup() {
    return (
        <div className="popup popup_type_zoom">
            <figure className="popup__zoom-container">
                <button className="popup__close-button popup__close-button_zoom" type="button"
                        aria-label="закрыть"/>
                <img src="#" alt="#" className="popup__image"/>
                <figcaption className="popup__zoom-title"/>
            </figure>
        </div>
    )
}

export default ImagePopup;