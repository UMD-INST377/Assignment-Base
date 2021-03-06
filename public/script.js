async function windowsActions() {
    const endpoint = "api";

    const request = await fetch(endpoint);

    // Holds our list of restaurants
    const restaurants = await request.json();
   
    // Filter our list of restaurants based on current word phrase input
    function findMatches(wordToMatch, restaurants){
        return restaurants.filter(place => {
            // Here we need to figure out if the restaurant matches our search criteria
            // Search criteria:
            // City
            const regex = new RegExp(wordToMatch, 'gi');
            return place.city.match(regex);
        });
    }

    // Format numbers to include commas
    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }

    // Displays a list of restaurants that matches key word/phrase when an event happens
    function displayMatches(event){
    const matchArray = findMatches(event.target.value, restaurants);
    // Creates and displays a list of restaurants metadata of interest that fit the search criteria of the 
    // matched word/phrase
    const html = matchArray.map(place => {
        const regex = new RegExp(event.target.value, 'gi');
        const cityName = place.city.replace(regex, 
            `<span class="hl">${event.target.value}</span>`);    
        return `
            <li>
                <span class="cityName>${cityName} ${' '} ${place.name}</span>
            <li>
        `;
    }).join('');
    suggestions.innerHTML = html;
    }

    const searchInput = document.querySelector('.search');
    const suggestions = document.querySelector('.suggestions');

    searchInput.addEventListener('keyup', (evt) => {displayMatches(evt)});
}

window.onload = windowsActions;