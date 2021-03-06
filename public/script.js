async function windowActions() {

const endpoint =
  "https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json";


const request = await fetch(endpoint)
  .then(blob => blob.json())
  .then(data => rtype.push(...data));
const rtype = await request.json();
function findMatches(wordToMatch, rtype) {
  return rtype.filter(rtype => {
    const regex = new RegExp(wordToMatch, "gi");
    return rtype.category.match(regex) || rtype.city.match(regex);
  });
}

function displayMatches(event) {
  const matchedArray = findMatches(event.target.value, rtype);
  const html = matchedArray.map(rtype => {
    const regex = new RegExp(event.target.value, "gi");
    const catHigh = rtype.category.replace(regex, `<span class='hl'>${event.target.value}</span>`);
    return `
      <li>
      <span class="name">${rtype.name},${catHigh}</span>
      
      <span class="statecode">${rtype.address_line_1},
      ${rtype.address_line_1},
      ${rtype.city}${rtype.zip}
      </span>
      
      </li>
      `;
  }).join('');

  suggestions.innerHTML = html;
}

const searchInput = document.querySelector(".search");
const suggestions = document.querySelector(".suggestions");

searchInput.addEventListener("change", displayMatches); 
searchInput.addEventListener("keyup", (evt) => { displayMatches(evt) });
};
window.onload = windowActions;