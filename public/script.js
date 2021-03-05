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


// const endpoint = 'https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json';
// const restaurants = [];

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



window.onload = windowActions;
