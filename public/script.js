const results = [];

fetch("https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json")
  .then((blob) => blob.json())
  .then((data) => results.push(...data));

console.log(results);

function findMatches(wordToMatch, results) {
  return results.filter((location) => {
    const regex = new RegExp(wordToMatch, "gi");
    return location.city.match(regex) || location.category.match(regex) || location.name.match(regex);
  });
}

function displayMatches() {
  const matchArray = findMatches(this.value, results);
  const html = matchArray.map(location => {
      return `
        <li>
            <span class="name">${location.name}</span>
            <span class="category">${location.category}</span>
            <span class="address">${location.address_line_1}</span>
            <span class="city">${location.city}</span>
            <span class="zip">${location.zip}</span>
        </li>
      `;
  }).join('');
  suggestions.innerHTML = html;
};

const searchInput = document.querySelector("#search");
const suggestions = document.querySelector(".suggestions");

searchInput.addEventListener("change", displayMatches);
searchInput.addEventListener("keyup", displayMatches);
