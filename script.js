async function windowActions() {
    console.log('window loaded');
    const form = document.querySelector('.userform'); 
    const search = document.querySelector('#name');

    const request = await fetch('/api');
    const data = await requests.json();

    form.addEventListener('submit', async (event) => {
        event.preventDefault();
        console.log('submit fired', search.value);

        const display = data.filter(record) => record.city.toUpperCase() === search.value.toUpperCase());
    });

    search.addEventListener('input', (event) => {
        console.log('input', event.target.value);
    });


window.onload = windowActions;