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

    const request = await fetch('/api')
    const data = await request.json();

    form.addEventListener('submit', async (event) => {
        event.preventDefault();
        console.log('submit fired', search.value);
        const display = data.filter((record) => record.city.toUpperCase() === search.value.toUpperCase() || record.zip.toUpperCase() === search.value.toUpperCase());
        console.log(display);
        console.table(display);

    });
    search.addEventListener('input', (event) => {
        console.log('input', event.target.value);
    });

}

window.onload = windowActions;


