async function windowsActions() {
    console.log('window loaded')
    const endpoint = 'https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json';
    const request = await fetch(endpoint);
    const data = await request.json();
    const restaurants = []

    function findMatches(wordToMatch, restaurants){
        console.log('find data')
        return restaurants.filter(place => {
            const regex = new RegExp(wordToMatch, 'gi');
            return place.city.match(regex) || place.state.match(regex);
            
        });
    }

    // function numberWithCommas(x) {
    //     return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    // }

    function displayMatches(event){
        console.log('display matches')
        const matchArray = findMatches(event.target.value, restaurants);
        const html = matchArray.map(place => {
            const regex = new RegExp(event.target.value, 'gi');
            const CategoryName = place.category.replace(regex, 
                `<span class="hl">${event.target.value}</span>`);
            const RestName = place.name.replace(regex, 
                `<span class="hl">${event.target.value}</span>`);
            return `
                <li>
                    <span class="name">${CategoryName}, ${RestName}</span>
                    <span class="address">${place.address_line_1}</span>
                    <span class="address">${place.address_line_2}</span>
                    <span class="city">${place.city}</span>
                    <span class="state">${place.state}</span>
                    <span class="zipcode">${place.zip}</span>
                    <span class="category">${place.category}</span>
                <li>
            `;
        }).join('');
        suggestions.innerHTML = html;
    }

    const searchInput = document.querySelector('.userform');
    const suggestions = document.querySelector('.suggestions');

    searchInput.addEventListener('keyup', displayMatches);
    searchInput.addEventListener('change', displayMatches);
}

window.onload = windowsActions;
