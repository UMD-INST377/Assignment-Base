async function windowsActions() {
    const endpoint = 'https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json';
    const request = await fetch(endpoint);
    const arrayName = await request.json();

    function findMatches(wordToMatch, restaurants){
        return restaurants.filter(place => {
            const regex = new RegExp(wordToMatch, 'gi');
            return place.city.match(regex) || place.state.match(regex);
        });
    }
    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }

    function displayMatches(event){
        const matchArray = findMatches(event.target.value, types);
        const html = matchArray.map(place => {
            const regex = new RegExp(event.target.value, 'gi');
            const TypeRest = place.category.replace(regex, 
                `<span class="hl">${event.target.value}</span>`);
            const RestName = place.name.replace(regex, 
                `<span class="hl">${event.target.value}</span>`);     
            return `
                <li>
                    <span class="name>${TypeRest}, ${RestName}</span>
                    <span class="population">${numberWithCommas(place.population)}</span>
                <li>
            `;
        }).join('');
        suggestions.innerHTML = html;
    }

    const searchInput = document.querySelector('#name');
    const suggestions = document.querySelector('.suggestions');
    searchInput.addEventListener('keyup', async (evt) => {
        displayMatches(evt);
        evt.preventDefault();
    });

}
window.onload = windowActions;
