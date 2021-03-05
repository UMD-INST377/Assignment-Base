async function windowsActions() {
    const endpoint = 'https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json';
    const request = await fetch(endpoint);
    const arrayName = await request.json();
    
    function findMatches(wordToMatch, cities){
        return cities.filter(place => {
            const regex = new RegExp(wordToMatch, 'gi');
            return place.city.match(regex) || place.state.match(regex);
    
        });
    }

    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }

    function displayMatches(event){
        const matchArray = findMatches(event.target.value, cities);
        const html = matchArray.map(place => {
            const regex = new RegExp(event.target.value, 'gi');
            const cityName = place.city.replace(regex, 
                `<span class="hl">${event.target.value}</span>`);
            const stateName = place.state.replace(regex, 
                `<span class="hl">${event.target.value}</span>`);     
            return `
                <li>
                    <span class="name>${cityName}, ${stateName}</span>
                    <span class="population">${numberWithCommas(place.population)}</span>
                <li>
            `;
        }).join('');
        suggestions.innerHTML = html;
    }

    const searchInput = document.querySelector('.search');
    const suggestions = document.querySelector('.suggestions');
    searchInput.addEventListener('keyup', (evt) => {displayMatches(evt)});

}

window.onload = windowActions;
