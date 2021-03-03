const cities = [];
fetch(endpoint)
.then(blob => blob.json())
.then(data => cities.push(...data))

fucntion findMatches(wordToMatch, cities){
    return cities.filter(place =>{
        //here we figure out if city or state matches whats searched
        const regex = new RegExp(wordToMatch, 'gi');
        return place.city.match(regex) || place.state.match(regex)
    });
}

function numberwithCommas(x){
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

function displayMatches(){
    const matcArray = findMatches(this.value, cities);
    const html = matchArray.map(place => {
        const regex = new RegExp(this.value, 'gi');
        const cityName = place.city.replace(regex, `<span class = 'h1>${this.value}</span>`)
        const stateName = place.state.replace(regex, `<span class = 'h1>${this.value}</span>`)
        return `
        <li>
        <span class = 'name`>${place.city}, ${place.state}</span>
        <span class = 'population'>${place.population}</span>
        `
        </li>
    }).join('');
}
suggestions.innerHTML = html;

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

searchInput.addEventListener('change', displayMatches);
