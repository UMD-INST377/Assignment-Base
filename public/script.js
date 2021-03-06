async function windowActions() {
console.log('Window loaded')
const endpoint = 'https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json';
const restaurants = []
const request = await fetch(endpoint)
const request_data = await request.json().then(data => restaurants.push(...data));

function findMatches(wordToMatch, restaurants){
    return restaurants.filter(place => {
        const regex = new RegExp(wordToMatch, 'gi');
        return place.name.match(regex) || place.category.match(regex)
    });
};

function displayMatches(event){
    const search_input = event.target.value
    const matchArray = findMatches(event.target.value, restaurants);
    const html = matchArray.map(place => {
        const regex = new RegExp(event.target.value, 'gi');
        const nameName = place.name.replace(regex, `<span class="h1">${event.target.value}</span>`);
        const categoryName = place.category.replace(regex, `<span class="h1">${event.target.value}</span>`);
        return `
        <li class="box has-background-success-light"> 
            <span class="name">${nameName}</span><br>
            <span class="category">${categoryName}</span><br>
            <span class="address">${place.address_line_1} </span>
        </li>
        `;
    }).join('');

    if(search_input){
        suggestions.innerHTML = html; //takes the html strong from html and creates html in this element
    }else {
        suggestions.innerHTML = "";
    };
};

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', (evt) => { displayMatches(evt) });

};

window.onload = windowActions