import './index.css'
import Api from './utils/Api'
import { RenderCards } from './components/RenderCards'
import { Card } from './components/Card'
import "core-js/stable";
import "regenerator-runtime/runtime";
import { Preloader } from './components/Preloader'
import Footer from './components/Footer'
import { Message } from './components/Message'
import { PopupCreate } from './components/PopupCreate'

const api = new Api()

api.request().then(res => {
    Preloader(true)
    RenderCards(res.articles, (card) => {
        return Card(card.title, card.urlToImage, card.url)
    })
    Preloader(false)
    Footer()
})

Message()