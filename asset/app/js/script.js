const themeButton = document.getElementById('categories-button')
const categories = document.getElementById("h_categories")
const openCategories = 'categories'
const iconTheme = 'uil-arrow-down'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => categories.classList.contains(openCategories) ? 'open' : 'close'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-arrow-right' : 'uil-arrow-down'

if (selectedIcon) {
    categories.classList[selectedTheme === 'open' ? 'add' : 'remove'](openCategories)
    themeButton.classList[selectedIcon === 'uil-arrow-right' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', () => {
    categories.classList.toggle(openCategories)
    themeButton.classList.toggle(iconTheme)
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})


let mixerPortfolio = mixitup('.drama__container', {
    selectors: {
        target: '.drama__card'
    },
    animation: {
        duration: 300
    }
});

const linkWork = document.querySelectorAll('.drama__categories')

function activeWork() {
    linkWork.forEach(L => L.classList.remove('active-categories'))
    this.classList.add('active-categories')
}
linkWork.forEach(L => L.addEventListener('click', activeWork))

window.onload = function() {
    setTimeout(function() {
        document.getElementById('body').style.opacity = "100";
        document.getElementById('fade').style.opacity = "100";
    }, 100);
}