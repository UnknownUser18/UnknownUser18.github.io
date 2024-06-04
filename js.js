function search() {
    let search_small = document.getElementById('search-small')
    if(window.innerWidth < 800) {
        search_small.style.display = 'block'
    }
    else {
        search_small.style.display = 'none'
    }
}
function show() {
    let menu = document.getElementsByClassName('menu')[0]
    menu.classList.add('active')
    let bar = document.getElementById('bar')
    if(window.innerWidth < 800) {
        let icons = document.getElementById('icons')
        icons.style.display = 'none'
        let search_small = document.getElementById('search-small')
        search_small.style.marginRight = 25 + 'px'
        let icon = document.getElementsByClassName('logo')[0]
        icon.style.marginLeft = 8 + 'px'
    }
    bar.style.display = 'none'
}
function hide() {
    setTimeout(() => {
        let menu = document.getElementsByClassName('menu')[0]
        menu.classList.remove('active')
        let bar = document.getElementById('bar')
        bar.style.display = 'block'
        if(window.innerWidth < 768) {
            let icons = document.getElementById('icons')
            icons.style.display = 'flex'
            let search_small = document.getElementById('search-small')
            search_small.style.marginRight = '0'
        }
    }, 250)
}
let search_small = document.getElementById('search-small')
if(window.innerWidth < 768) {
    search_small.style.display = 'block'
}
else {
    search_small.style.display = 'none'
}
function search_show() {
    let blackScreen = document.getElementsByClassName('black-screen')[0]
    let search = document.getElementsByClassName('search')[0]
    let form = document.getElementById('search-form')
    let img_small = document.getElementById('img-small')
    let div_small = document.getElementById('div-small')
    blackScreen.style.opacity = '1'
    blackScreen.style.width = '100%'
    blackScreen.style.height = '100%'
    search.style.opacity = '1'
    search.style.width =  '95%'
    search.style.height = 50 + 'vh'
    form.style.display = 'flex'
    img_small.style.display = 'block'
    div_small.style.display = 'block'
}
function search_hide() {
    let blackScreen = document.getElementsByClassName('black-screen')[0]
    let search = document.getElementsByClassName('search')[0]
    let form = document.getElementById('search-form')
    let img_small = document.getElementById('img-small')
    let div_small = document.getElementById('div-small')
    blackScreen.style.opacity = '0'
    blackScreen.style.width = '0'
    blackScreen.style.height = '0'
    search.style.opacity = '0'
    search.style.width = '0'
    search.style.height = '0'
    form.style.display = 'none'
    img_small.style.display = 'none'
    div_small.style.display = 'none'
}