const endpoint = 'https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json';
const foodPlace = [];
fetch(endpoint).then(blob => blob.json())
.then(data => foodPlace.push(...data))


function findMatches(searchQuery){
    return foodPlace.filter(place => {
        const regex = new RegExp(searchQuery, 'gi');
        return place.city.match(regex) || place.category.match(regex)|| place.name.match(regex);
    });
}

function displayMatches(){
    const matchArr = findMatches(this.value); //this.value is the data being input in the form
    const html = matchArr.map(palce => {
        return `
        <li>
            <span class="name">${place.name}</span>
            <span class="name">${place.city}</span>
            <span class="name">${place.rodent_and_insects}</span>
        </li>
        `;

    }).join(''); //This changes html from an array to a big string

    suggestions.innerHTML = html; //takes the html strong from html and creates html in this element

}

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

searchInput.addEventListener('keyup', displayMatches);