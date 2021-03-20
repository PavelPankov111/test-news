let numberMessage = 1

export function Message(text = 'Добрый день, надеюсь вам понравилось мое тестовое здание') {
    const popupMessageContainer = document.querySelector('.popup__messages_container')
    const messageTemplate = document.createElement('template').content
    messageTemplate.className = 'popup-template'
    const messageBox = document.createElement('div').cloneNode(true)
    messageBox.className = 'popup__messages_box'
    const messageLink = document.createElement('a')
    messageLink.className = 'popup__messages_details'
    messageLink.target = '_blank'
    messageLink.href = 'https://github.com/PavelPankov111?tab=repositories'
    messageLink.textContent = 'Подробнее...'
    const messageAuthorDate = document.createElement('div')
    messageAuthorDate.className = 'popup__messages_author-date'
    const popupMessagesAuthor = document.createElement('p')
    popupMessagesAuthor.className = 'popup__messages_author'
    popupMessagesAuthor.textContent = 'Павел'
    const popupMessagesDate = document.createElement('p')
    popupMessagesDate.className = 'popup__messages_date'
    const messagesTitleStatus = document.createElement('div')
    messagesTitleStatus.className = 'popup__messages_title-status'
    const popupMessagesTitle = document.createElement('h3')
    popupMessagesTitle.className = 'popup__messages_title'
    const popupMessagesStatus = document.createElement('span')
    popupMessagesStatus.className = 'popup__messages_status'
    popupMessagesStatus.textContent = 'Не прочитано'

    messagesTitleStatus.append(popupMessagesTitle)
    messagesTitleStatus.append(popupMessagesStatus)
    messageBox.append(messageAuthorDate)
    messageBox.append(messagesTitleStatus)
    messageAuthorDate.appendChild(popupMessagesAuthor)
    messageAuthorDate.append(popupMessagesDate)
    messageBox.append(messageLink)
    messageTemplate.append(messageBox)
    if (popupMessageContainer) {
        popupMessageContainer.append(messageTemplate)
    } else {
        return
    }

    const countMessage = document.querySelector('.footer__title')

    function getDate() {
        const now = new Date();
        const month = [
            "января",
            "февраля",
            "марта",
            "апреля",
            "мая",
            "июнья",
            "июля",
            "августа",
            "сентября",
            "октября",
            "ноября",
            "декабря",
        ];

        const correctDate = `${now.getDate()} ${month[now.getMonth()]}, ${now.getFullYear()}`;
        return correctDate;
    }

    if (countMessage !== null) {
        numberMessage++
        countMessage.textContent = `Колличество сообщений: ${numberMessage}`
    }
    popupMessagesTitle.textContent = text
    popupMessagesDate.textContent = getDate()
    setTimeout(() => {
        popupMessagesStatus.textContent = 'Прочитано'
    }, 500);

    return messageBox;
}