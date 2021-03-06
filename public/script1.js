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
            const restName = place.name;

            return `
                <div class="box1">

                    <div class ="hl">${restName}</div>
                    <div class ="address1">${place.address_line_1}</div>
                    <div class="address2">${place.address_line_2}</div>
                    <div class="city">${place.city}</div>
                    <div class="state">${place.state}</div>
                    <div class="zipcode">${place.zip}</div>
                    <div class="category">${place.category}</div>
                  
                </div>
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
