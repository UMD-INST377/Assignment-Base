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


let url = ('https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json')
let response = await fetch(url);

let commits = await response.json();
alert(commits[0].author.login);


function findMatches(wordToMatch, restaurants) {
    return restaurants.filter(place => {

        return place.restaurants.match()
    });
}
