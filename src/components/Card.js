import { page } from '../constants/constants'

export function Card(title, image, link) {
    const cardTemplate = document.createElement('template').content
    cardTemplate.className = 'element-template'

    const cardElemnt = document.createElement('div').cloneNode(true)
    cardElemnt.className = 'element'

    const elementLink = document.createElement('a');
    elementLink.className = 'element__link'
    elementLink.target = '_blank'

    const elementImage = document.createElement('img');
    elementImage.className = 'element__image'
    elementImage.alt = 'фотография не загрузилась'

    const elementTitleLike = document.createElement('div')
    elementTitleLike.className = 'element__title-like'

    const elementTitle = document.createElement('h2');
    elementTitle.className = 'element__title'

    cardTemplate.appendChild(cardElemnt)

    cardElemnt.appendChild(elementLink)

    elementLink.appendChild(elementImage)

    cardElemnt.appendChild(elementTitleLike)

    elementTitleLike.appendChild(elementTitle)

    elementImage.src = image
    elementTitle.textContent = title
    elementLink.href = link

    page.appendChild(cardTemplate)

    return cardElemnt
}