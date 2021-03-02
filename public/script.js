const results = [];

fetch('https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json')
    .then(blob => blob.json())
    .then(data => results.push(...data))

console.log(results);

function findMatches(wordToMatch, results){
    return results.filter(location => {
        const regex = new RegExp(wordToMatch, 'gi');
        return location.city.match(regex)
    });
}

function displayMatches(){
    const matchArray = findMatches(this.value, results);
    console.log(matchArray);
}

const searchInput = document.querySelector("#search")

searchInput.addEventListener("change", displayMatches)
searchInput.addEventListener("keyup", displayMatches)