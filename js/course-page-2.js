// When the user starts typing the search text should disappear
const searchText = document.querySelector('.search-text')
const searchInput = document.querySelector('.search-input')
const searchIcon = document.querySelector('.search')

searchInput.addEventListener('input', () => {
    if(searchInput.value !== '') {
        searchIcon.style.display = 'none'
        searchText.style.display = 'none'
    }
    else {
        searchIcon.style.display = 'block'
        searchText.style.display = 'block'
    }
})
