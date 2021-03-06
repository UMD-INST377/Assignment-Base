const endpoint =
  "https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json";

const states = [];
fetch(endpoint)
  .then(blob => blob.json())
  .then(data => states.push(...data));

function findMatches(wordToMatch, states) {
  return states.filter(state => {
    const regex = new RegExp(wordToMatch, "gi");
    return state.state.state_name.match(regex);
  });
}

function displayMatches() {
  const matchedArray = findMatches(this.value, states);
  const html = matchedArray.map(state => {
    return `
      <li>
      <span class="name">${state.state.state_name}</span>
      <span class="statecode">${state.state.state_id}</span>
      </li>
      `;
  });

  suggestions.innerHTML = html;
}

const searchInput = document.querySelector(".search");
const suggestions = document.querySelector(".suggestions");
searchInput.addEventListener("input", displayMatches);