const endpoint = 'https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json';

const restaurants = [];

fetch(endpoint)
    .then(blob => blob.json())
    .then(data => restaurants.push(...data))

function findMatches(wordToMatch, restaurants){
    return restaurants.filter(place => {
        const regex = new RegExp(wordToMatch, 'gi');
        return place.name.match(regex) || place.category.match(regex)
    });
}

function displayMatches(){
    const matchArray = findMatches(this.value, restaurants);
    const html = matchArray.map(place => {
        const regex = new RegExp(this.value, 'gi');
        const nameName = place.name.replace(regex, `<span class="h1">${this.value}</span>`);
        const categoryName = place.category.replace(regex, `<span class="h1">${this.value}</span>`);
        return `
        <li>
            <span class="name">${nameName}, ${categoryName}</span>
            <span class="address">${place.address_line_1} </span>
        </li>
        `;
    }).join('');
    suggestions.innerHTML = html;
};

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);