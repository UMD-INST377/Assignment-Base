
    const restaurant = [];
    fetch(data)
      .then(blob => blob.json())
      .then(data => .push(...data));
    
    function findMatches(wordToMatch, cities) {
      return restaurant.filter(place => {
        // here we need to figure out if the restaurant matches what was searched
        const regex = new RegExp(wordToMatch, 'gi');
        return place.city.match(regex) || place.state.match(regex)
      });
    }
    
    function numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }
    
    function displayMatches() {
      const matchArray = findMatches(this.value, restaurant);
      const html = matchArray.map(place => {
        const regex = new RegExp(this.value, 'gi');
        const restaurantName = place.restaurant.replace(regex, `<span class="hl">${this.value}</span>`);
        const zipCodeName = place.state.replace(regex, `<span class="hl">${this.value}</span>`);
        return `
          <li>
            <span class="name">${cityName}, ${stateName}</span>
            <span class="population">${numberWithCommas(place.population)}</span>
          </li>
        `;
      }).join('');
      suggestions.innerHTML = html;
    }
    
    const searchInput = document.querySelector('.search');
    const suggestions = document.querySelector('.suggestions');
    
    searchInput.addEventListener('change', displayMatches);
    searchInput.addEventListener('keyup', displayMatches);