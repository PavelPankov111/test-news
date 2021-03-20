import { page } from '../constants/constants'

export function RenderCards(arrayCards, render) {
    const elements = document.createElement('section')
    elements.className = 'elements'
    page.append(elements)
    arrayCards.forEach(card => {
        elements.prepend(render(card))
    });
}