import { page } from '../constants/constants'
import Popup from './Popup'

export default function Footer() {
    const popup = new Popup()
    popup.create()

    const footer = document.createElement('footer')
    footer.className = 'footer'
    const button = document.createElement('button')
    button.className = 'footer__button'
    button.type = 'button'
    const title = document.createElement('h3')
    title.className = 'footer__title'
    title.textContent = `Колличество сообщений: ${0}`

    footer.appendChild(button)

    button.appendChild(title)

    page.appendChild(footer)

    button.addEventListener('click', () => {
        popup.open()
    })
}