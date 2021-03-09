async function windowActions() {
    console.log('window loaded');
    //const form = document.querySelector('.userform');
    //const search = document.querySelector('#zipcode')
    //const targetList = document.querySelector('.target-list');
    
    const endpoint = 'https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json';
    const request = await fetch(endpoint);
    const zips = await request.json();
    
    function findMatches(wordToMatch, zips) {
        return zips.filter(restaurant => {
            const regex = new RegExp(wordToMatch, 'gi');
            return restaurant.zip.match(regex)
    })
    }

    function displayMatches(event) {
        const matchArray = findMatches(event.target.value, zips);
        const html = matchArray.map(restaurant => {
            const regex = new RegExp(event.target.value, 'gi');
            const zipCode = restaurant.zip.replace(regex, `<span class="h1">${event.target.value}</span>`);
            return `
            <li>
            <span class="name>${zipCode}</span>
            <span class="category">${restaurant.category}</span>
            <span class="address">${restaurant.address_line_1}</span>
            </li>
            `;
        }).join('');
        suggestions.innerHTML = html;
    }

    const searchInput = document.querySelector('.search');
    const suggestions = document.querySelector('.suggestions');

    searchInput.addEventListener('change', displayMatches);
    searchInput.addEventListener('keyup', (evt) => {
        displayMatches(evt)
    });

}
window.onload = windowActions;