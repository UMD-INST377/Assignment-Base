async function windowActions() {
    console.log('window loaded');
    const form = document.querySelector('.userform');
    const search = document.querySelector('#zipcode')
    const targetList = document.querySelector('.target-list');

    const request = await fetch('/api');
    const data = await request.json();

    form.addEventListener('submit', async (event) => {
        event.preventDefault();
        console.log('submit fired', event.target.value);
        const filtered = data.filter((record) => {
            const regex = new RegExp(event.target.value, 'gi');
            return record.zip.match(regex);
        });
        
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

search.addEventListener('change', search.filtered);
search.addEventListener('keyup', search.filtered);
};
window.onload = windowActions;