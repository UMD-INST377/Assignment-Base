
const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

const cities = [];
fetch('/api')
.then(blob => blob.json())
.then(data => cities.push(...data));

fucntion findMatches(wordToMatch, cities){
    return cities.filter(place =>{
        //here we figure out if city or state matches whats searched
        const regex = new RegExp(wordToMatch, 'gi');
        console.log('regex', regex)
        return place.city.match(regex) || place.state.match(regex)
    });
}


function displayMatches(){
    const matchArray = findMatches(this.value, cities);
    console.log(matchArray)
    const html = matchArray.map(place => {
        const regex = new RegExp(this.value, 'gi');
        const cityName = place.city.replace(regex, `<span class = <'h1>${this.value}</span>`)
        const stateName = place.state.replace(regex, `<span class = <'h1>${this.value}</span>`)
        return `
        <li>
        <span class = 'name'>${place.city}, ${place.state}</span>
        <span class = 'population'>${place.population}</span>
        
        </li> `
    }).join('');
}
suggestions.innerHTML = html;
searchInput.addEventListener('change', displayMatches);
window.onload = displayMatches ;