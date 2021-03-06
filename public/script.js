async function windowActions() {
    console.log('window loaded');
    const form = document.querySelector('.userform');
    const search = document.querySelector('#zipcode')
    const targetList = document.querySelector('.target-list');

    const request = await fetch('/api');
    const data = await request.json();

    form.addEventListener('submit', async (event) => {
        event.preventDefault();
        console.log('submit fired', search.value);
        const filtered = data.filter((record) => record.zip === search.value);
        
        filtered.forEach(restaurant => {
            const newItem = document.createElement('li');
            newItem.classList.add('list-item');
            newItem.innerHTML = `
            <h1>${restaurant.name}<h1>
            <h2>${restaurant.category}<h2>
            ${restaurant.address_line_1}
            ${restaurant.zip}
            `;
            targetList.append(newItem)
    });  
})   

// this listens for typing into the input box
    search.addEventListener('input', (event) => {
        console.log('input', event.target.value);
});

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

};

window.onload = windowActions;