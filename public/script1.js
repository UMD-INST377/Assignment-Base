const { default: fetch } = require("node-fetch");

async function windowActions(){
    console.log('window loaded');
    const form = document.querySelector('.userform')
    const search = document.querySelector('#type'); // idk if the database calls the type of restaurant?

    const request = await fetch('/api');
    const data = await request.json;
    
    form.addEventListener(async (event)=> {
        event.preentDefault();
        console.log('submit fired', search.value);
        const display = data.filter((record) => record.type.toUpperCase() === search.value.toUpperCase());

    });
    search.addEventListener('input', (event) =>{
        console.log('input', event.target.value);
    });
}
window.onload=windowActions;
