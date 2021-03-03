const endpoint = 'https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json';
const zips = [];
         
fetch(endpoint)
    .then(blob => blob.json())
    .then(data => zips.push(...data))
         
function findMatches(wordToMatch, zips) {
    return zips.filter(place => {
    // here we need to figure out if the zip matches what was searched
    const regex = new RegExp(wordToMatch, 'gi')
    return place.zip.match(regex)
});
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
         
function displayMatches() {
    const matchArray = findMatches(this.value, zips);
    const html = matchArray.map(place => {
        const regex = new RegExp(this.value, 'gi');
        const zipCode = place.zip.replace(regex, '<span class="h1">${this.value}</span>');
        const restaurantName = place.name.replace(regex, '<span class="h1">${this.value}</span>');
        const restaurantAddress = place.address_line_1.replace(regex, '<span class="h1">${this.value}</span>');
        const restaurantCategory = place.category.replace(regex, '<span class="h1">${this.value}</span>');

        return '<li><span class="name">${restaurantName, restaurantAddress, restaurantCategory}</span></li>';
    }).join('');
    suggestions.innerHTML = html;
}

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');
         
searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);


async function windowActions() {
    const form = document.querySelector('.userform');
    const search = document.querySelector('#name');

        form.addEventListener('submit')

    search.addEventListener('input', (event) => {
        console.log('input', event.target.value);
    });
}

window.onload = windowActions;
