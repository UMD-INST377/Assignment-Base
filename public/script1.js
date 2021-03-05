/*
async function windowActions(){
    console.log('window loaded');
    const form = document.querySelector('.userform')
    const search = document.querySelector('.category');
    

    const request = await fetch('https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json');
    const data = await request.json;
    
    search.addEventListener('input', (event) =>{
        console.log('input', event.target.value);
    });

    form.addEventListener(async (event)=> {
        event.preventDefault();
        console.log('submit fired', search.value);
        const display = data.filter((record) => record.type.toUpperCase() === search.value.toUpperCase());

    });


}
window.onload=windowActions;
*/


async function windowActions(){
const endpoint = 'https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json';
const request = await fetch(endpoint);
const arrayName = await request.json();

function findMatches(wordToMatch, restaurants){
    return restaurants.filter(place =>{
    
    const regex = new RegExp(wordToMatch, 'gi');
    return place.city.match(regex) || place.state.match(regex)
    });
}

function displayMatches(){
    const matchArray = findMatches(this.value, restaurants);
    const html = matchArray.map(place => {
        const regex = new RegExp(this.value, 'gi');
        const categoryName = place.category.replace(regex, '<span class = "h1" > ${this.value}</span>')
        
        return `
        <li> 
            <span class = "name" >${categoryName}</span>
            <span class = "category" >${place.category}</span>
        </li>
        `;  
    }).join('');
    suggestions.innerHTML = html;
}

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');


searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);
}