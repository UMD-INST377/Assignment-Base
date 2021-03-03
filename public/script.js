const food = [];

fetch ("/api")
.then(blob => blob.json())
.then(stuff => food.push(...stuff))

function findMatches (wordToMatch, food){
    
    return food.filter(place => {
        const regex = new RegExp(wordToMatch, 'gi');
        return place.zip.match(regex)
    });
}

function displayMatches() {
    const matchArray = findMatches(this.value, food);
    const html = matchArray.map(place => {
        const regex = new RegExp(this.value, 'gi');
        const zipper = place.zip.replace(regex, `<span class = h1>${this.value}</span>`)
        return `
        <li>
            <span class="name">${zipper}</span>
            <span class="category">${place.category}</span>
            <span class="address_line_1">${place.address_line_1}</span>
            <span class="city">${place.city}</span>
            <span class="zip">${place.zip}</span>
        </li>
        `;
    }).join('');
    suggestions.innerHTML = html;
}

const searchInput = document.querySelector('.input');
const suggestions = document.querySelector('.suggestions');

//searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);