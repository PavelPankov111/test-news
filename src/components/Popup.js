import closeIcons from '../images/close__icon.svg'
import { page } from '../constants/constants'
import { Message } from './Message'

export default class Popup {
    constructor() {
        this._popup = document.createElement('div')
        this._handleEscape = this._handleEscClose.bind(this)
    }

    create() {
        this._popup.className = 'popup'
        const popupForm = document.createElement('form')
        popupForm.className = 'popup__container'
        this._popup.append(popupForm)
        const popupCloseButton = document.createElement('button')
        popupCloseButton.className = 'popup__vector-button'
        popupCloseButton.type = 'reset'
        popupForm.append(popupCloseButton)
        const closeIconImg = document.createElement('img')
        closeIconImg.className = 'popup__vector'
        closeIconImg.alt = 'кнопка закрытия'
        popupCloseButton.append(closeIconImg)
        const popupContent = document.createElement('div')
        popupContent.className = 'popup__content'
        popupForm.append(popupContent)
        const popupContentTitle = document.createElement('h3')
        popupContentTitle.className = 'popup__title'
        popupContentTitle.textContent = 'Чат'
        popupContent.append(popupContentTitle)
        const popupMessages = document.createElement('div')
        popupMessages.className = 'popup__messages'
        popupContent.append(popupMessages)
        const popupMessagesContainer = document.createElement('div')
        popupMessagesContainer.className = 'popup__messages_container'
        popupMessages.append(popupMessagesContainer)
        const popupInputButton = document.createElement('div')
        popupInputButton.className = 'popup__input-button'
        popupContent.append(popupInputButton)
        const popupInput = document.createElement('input')
        popupInput.className = 'popup__input popup__input_job'
        popupInput.type = 'text'
        popupInput.placeholder = "Введите сообщение"
        popupInputButton.append(popupInput)
        const popupButton = document.createElement('button')
        popupButton.className = 'popup__button'
        popupButton.type = 'button'
        popupButton.textContent = 'Отправить сообщение'
        popupInputButton.append(popupButton)
        closeIconImg.src = closeIcons

        page.append(this._popup)

        popupButton.addEventListener('click', () => {
            if (popupInput.value) {
                popupMessagesContainer.prepend(Message(popupInput.value))
                popupInput.value = ''
            } else {
                return
            }
        })

        popupCloseButton.addEventListener('click', () => {
            this.close()
        })
    }

    _handleEscClose(evt) {
        if (evt.key === "Escape") {
            const activePopup = document.querySelector('.popup_opened');
            this.close(activePopup)
        }
    }

    open() {
        document.addEventListener('keyup', this._handleEscape)
        this._popup.classList.add('popup_opened');
    }

    close() {
        this._popup.classList.remove('popup_opened');
        document.removeEventListener('keyup', this._handleEscape)
    }
}