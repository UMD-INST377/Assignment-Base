// code below is from lecture

async function windowActions() {
    console.log('window loaded');
    const form = document.querySelector('.userform');
    const search = document.querySelector('#zipcode')
    const targetList = document.querySelector('.target-list');
}

const request = await fetch('/api');
const data = await request.json();
console.table(data);

// code will fire whenever the form is submitted
// also filters the data list and returns it to the HTML
form.addEventListener('submit', async (event) => {
    event.preventDefault();
    console.log('submit fired', search.value);
    const filtered = data.filter((record) => record.zip.toUpperCase() === search.value.toUpperCase());
    filtered.forEach((item) => {
        const appendItem = document.createElement("li");
        appendItem.innerText = item.zip;
        targetList.append(appendItem);
    });
});

// this listens for typing into the input box
search.addEventListener('input', (event) => {
    console.log('input', event.target.value);
})

// code below is from tutorial
         
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

// need to remove the "this" value 
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

window.onload = windowActions;