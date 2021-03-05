function findMatches(wordToMatch, results) {
  return results.filter((location) => {
    const regex = new RegExp(wordToMatch, "gi");
    return (
      location.city.match(regex) ||
      location.category.match(regex) ||
      location.name.match(regex)
    );
  });
}

//title case function from w3docs
function toTitleCase(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

async function windowActions() {
  const search = document.querySelector("#search");
  const suggestions = document.querySelector(".suggestions");

  const request = await fetch("/api");
  const results = await request.json();

  search.addEventListener("keyup", (event) => {
    const matchArray = findMatches(search.value, results);
    const html = matchArray
      .map((location) => {
        return `
        <div class columns>
          <div class="box column is-half my-4 ml-4"
            <li>
                <div>
                  <span class="name">${location.name}</span>
                </div>
                <div>
                  <span class="category">${location.category}</span>
                </div>
                <div>
                  <span class="address">${toTitleCase(
                    location.address_line_1
                  )}</span>
                </div>
                <div>
                  <span class="city">${toTitleCase(location.city)}</span>
                </div>
                <div>
                  <span class="zip">${location.zip}</span>
                </div>
            </li>
          </div>
        </div>
      `;
      })
      .join("");
    suggestions.innerHTML = html;
  });
}

window.onload = windowActions();
