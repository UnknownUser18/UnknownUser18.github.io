function show() {
    let menu = document.getElementsByClassName('menu')[0]
    menu.classList.add('active')
    let bar = document.getElementById('bar')
    if(window.innerWidth < 800) {
        let searchbar = document.getElementsByClassName('search-bar')[0]
        let icon = document.getElementsByClassName('logo')[0]
        let blackscreen = document.getElementsByClassName('black-screen')[0]
        searchbar.style.display = 'none'
        icon.style.marginLeft = 8 + 'px'
        blackscreen.style.opacity = '1'
        blackscreen.style.width = '100%'
        blackscreen.style.height = '100%'
    }
    bar.style.display = 'none'
}
function hide() {
    setTimeout(() => {
        let searchbar = document.getElementsByClassName('search-bar')[0]
        searchbar.style.display = 'flex'
        let menu = document.getElementsByClassName('menu')[0]
        menu.classList.remove('active')
        let bar = document.getElementById('bar')
        bar.style.display = 'block'
        let blackscreen = document.getElementsByClassName('black-screen')[0]
        blackscreen.style.opacity = '0'
        blackscreen.style.width = '0'
        blackscreen.style.height = '0'
    }, 250)
}