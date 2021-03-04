function filterRestaurant(wordToMatch, info){
    return info.filter((piece) => {
        const re = new RegExp(wordToMatch, 'gi');
        return piece.city.match(re) || piece.zip.match(re);
    })
}

function showRestaurantMatches(i){
    const match = filterRestaurant(i.target.value);
}

async function windowActions() {
    console.log('window loaded');
    const form = document.querySelector('.userform');
    const search = document.querySelector('#search');
    const suggestions = document.querySelector('.suggestions');

    const request = await fetch('/api')
    const data = await request.json();

    search.addEventListener('input', (event) => {
        console.log('input', event.target.value)
        const display = data.filter((record) => {
            return record.city.toUpperCase().includes(event.target.value.toUpperCase()) || record.zip.toUpperCase().includes(event.target.value.toUpperCase())
        });

        display.forEach(restaurant => {
            const newItem = document.createElement('li');
            newItem.classList.add('list-item');
            newItem.innerHTML = `
            <strong>${restaurant.name}</strong>
            ${restaurant.category}
            ${restaurant.address_line_1}
            ${restaurant.city}
            ${restaurant.zip}
            `;
            
            suggestions.append(newItem);
        });
    })
};

window.onload = windowActions;


