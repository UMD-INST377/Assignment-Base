const endpoint =
  "https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json";

const rtype = [];
fetch(endpoint)
  .then(blob => blob.json())
  .then(data => rtype.push(...data));

function findMatches(wordToMatch, restaurants) {
  return restaurants.filter(rtype => {
    const regex = new RegExp(wordToMatch, "gi");
    return rtype.name.match(regex);
  });
}

function displayMatches() {
  const matchedArray = findMatches(this.value, restaurants);
  const html = matchedArray.map(rtype => {
    return `
      <li>
      <span class="name">${rtype.category}</span>
      <span class="statecode">${rtype.city}</span>
      </li>
      `;
  });

  suggestions.innerHTML = html;
}

const searchInput = document.querySelector(".search");
const suggestions = document.querySelector(".suggestions");
searchInput.addEventListener("input", displayMatches);