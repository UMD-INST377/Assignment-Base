
async function windowActions() {
    console.log('window loaded');
    const form = document.querySelector('.userform');
    const search = document.querySelector('#zipcode')
    const targetList = document.querySelector('.target-list');
    
    const request = await fetch(endpoint);
    const data = await request.json();

    fetch(endpoint)
        .then(blob => blob.json())
        .then(data => cities.push(...data))

    function findMatches(wordToMatch, cities) {
        return cities.filter(place => {
            const regex = new RegExp(wordToMatch, 'gi');
            return place.city.match(regex)
        });
    }
    
    function displayMatches(function displayMatches(event)) {
    const matchArray = findMatches(event.target.value, cities);
    const html = matchArray.map(place => {
        const regex = new RegExp(this.value, 'gi');
        const cityName = place.city.replace(regex, `<span class="h1">${this.
            value}</span>`);
        return `
            <li>
            <span class="name">${cityName}</span>
            <span class="population">${place.population}</span>
            </li>
        `;
    }).join('');
    suggestions.innerHTML = html;
    }

    const searchInput = document.querySelector('.search');
    const suggestions = document.querySelector('.suggestions');

    searchInput.addEventListener('change', displayMatches);
    searchInput.addEventListener('keyup', (evt)=>{displayMatches(evt)}));


}
