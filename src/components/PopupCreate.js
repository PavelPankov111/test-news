// // import closeIcons from '../images/close__icon.svg'
// // import { Message } from './Message'
// // import { page } from '../constants/constants'

// // export function PopupCreate() {
// //     const popup = document.createElement('div')
// //     const closeIcon = document.querySelector('.popup__vector')
// //     closeIcon.src = closeIcons
// //     const button = document.querySelector('.popup__button')
// //     const inputValue = document.querySelector('.popup__input')
// //     const meassages = document.querySelector('.popup__messages_container')

// //     button.addEventListener('click', () => {
// //         if (inputValue.value) {
// //             meassages.prepend(Message(inputValue.value))
// //             inputValue.value = ''
// //         } else {
// //             return
// //         }
// //     })
// // }

// import closeIcons from '../images/close__icon.svg'
// import { Message } from './Message'
// import { page } from '../constants/constants'

// export function PopupCreate() {
//     const popup = document.createElement('div')
//     popup.className = 'popup'
//     const popupForm = document.createElement('form')
//     popupForm.className = 'popup__container'
//     popup.append(popupForm)
//     const popupCloseButton = document.createElement('button')
//     popupCloseButton.className = 'popup__vector-button'
//     popupCloseButton.type = 'reset'
//     popupForm.append(popupCloseButton)
//     const closeIconImg = document.createElement('img')
//     closeIconImg.className = 'popup__vector'
//     closeIconImg.alt = 'кнопка закрытия'
//     popupCloseButton.append(closeIconImg)
//     const popupContent = document.createElement('div')
//     popupContent.className = 'popup__content'
//     popupForm.append(popupContent)
//     const popupContentTitle = document.createElement('h3')
//     popupContentTitle.className = 'popup__title'
//     popupContentTitle.textContent = 'Чат'
//     popupContent.append(popupContentTitle)
//     const popupMessages = document.createElement('div')
//     popupMessages.className = 'popup__messages'
//     popupContent.append(popupMessages)
//     const popupMessagesContainer = document.createElement('div')
//     popupMessagesContainer.className = 'popup__messages_container'
//     popupMessages.append(popupMessagesContainer)
//     const popupInputButton = document.createElement('div')
//     popupInputButton.className = 'popup__input-button'
//     popupContent.append(popupInputButton)
//     const popupInput = document.createElement('input')
//     popupInput.className = 'popup__input popup__input_job'
//     popupInput.type = 'text'
//     popupInput.placeholder = "Введите сообщение"
//     popupInputButton.append(popupInput)
//     const popupButton = document.createElement('button')
//     popupButton.className = 'popup__button'
//     popupButton.textContent = 'Отправить сообщение'
//     popupInputButton.append(popupButton)

//     closeIconImg.src = closeIcons

//     function open() {
//         popup.classList.add('popup_opened')
//     }

//     function close() {
//         popup.classList.remove('popup_opened')
//     }

//     popupButton.addEventListener('click', () => {
//         if (popupInput.value) {
//             popupMessagesContainer.prepend(Message(popupInput.value))
//             popupInput.value = ''
//         } else {
//             return
//         }
//     })
// }