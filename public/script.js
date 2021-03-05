async function windowsActions() {
    console.log('window loaded')
    const endpoint = 'https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json';
    const request = await fetch(endpoint);
    const data = await request.json();

    function findMatches(wordToMatch, data){
        console.log('find matches')
        return data.filter(place => {
            const regex = new RegExp(wordToMatch, 'gi');
            return place.category.match(regex) || place.name.match(regex);
            
        });
    }

    function displayMatches(event){
        console.log('display')
        const matchArray = findMatches(event.target.value, data);
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
    
    searchInput.addEventListener('change', displayMatches);
    searchInput.addEventListener('keyup', (evt) => {
        evt.preventDefault()
        displayMatches(evt)
    });
    
}

window.onload = windowsActions;
