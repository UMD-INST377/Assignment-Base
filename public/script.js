
const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

let places = [];
fetch('https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json')
.then(function(blob) {
    return blob.json();
})
.then(function(data) {
    places = data;
})

function displayMatches(e){
    e.preventDefault();

    const matchArray = places.filter(function(place) {
        return place.city.includes(searchInput.value) || place.zip.includes(searchInput.value);
    });


    console.log(matchArray);

    let HTML = "";
    matchArray.forEach(function(place) {
        HTML += `
            <li class="box">
                <div class='name'>${place.name}</div>
                <div class='name'>${place.category}</div>
                <div class='name'>${place.address_line_1}</div>
                <div class='name'>${place.city}</div>
                <div class='name'>${place.zip}</div>

            </li>
        `;
    });
   
    suggestions.innerHTML = HTML;

}
document.querySelector("form").addEventListener('submit', displayMatches);
