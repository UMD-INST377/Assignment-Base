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
