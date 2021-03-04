results = [];

const searchInput = document.querySelector("#search");
const suggestions = document.querySelector(".suggestions");

function findMatches(wordToMatch, results) {
  return results.filter((location) => {
    const regex = new RegExp(wordToMatch, "gi");
    return location.city.match(regex) || location.category.match(regex) || location.name.match(regex);
  });
}

async function windowActions(){
  const form = document.querySelector(".form")
  const search = document.querySelector("#search")

  const request = await fetch('/api');
  const results = await request.json();

  search.addEventListener("keyup", (event) =>{
    const matchArray = findMatches(search.value, results)
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
  });
}
window.onload = windowActions();
