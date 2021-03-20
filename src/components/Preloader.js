export function Preloader(visible) {
    const preloader = document.querySelector('.preloader')
    if (visible) {
        preloader.classList.remove('preloader__hidden')
    } else {
        preloader.classList.add('preloader__hidden')
    }
}