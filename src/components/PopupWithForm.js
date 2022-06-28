function PopupWithForm(props) {

    return (
        <div className={`popup popup_type_${props.name} ${props.isOpen && 'popup_opened'}`}>
            <div className="popup__container">
                <button className="popup__close-button popup__close-button_profile" type="button"
                        aria-label="закрыть" onClick={props.onClose}/>
                <h2 className="popup__title">{props.title}</h2>
                <form className={`popup__form popup__form_${props.name}`} name={`${props.name}`} noValidate>
                    {props.children}
                </form>
            </div>
        </div>
  )
}

export default PopupWithForm;