import { json } from "express";

<script id="myscripttag" src="https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json"></script>
    document.getElementById("myscripttag").src

    const restaurant = [];
    fetch(data)
      .then(blob => blob.json())
      .then(data => push(...data));
      
      app.route('/api')
    .post(async(req, res) => {
        console.log('POST request detected');
        console.log('From data in res.body', req.body);
    res.send(json);
  });

    function findMatches(wordToMatch, restaurant) {
      return restaurant.filter(name => {
        // here we need to figure out if the restaurant matches what was searched
        const regex = new RegExp(wordToMatch, 'gi');
        return name.restaurant.match(regex)
      });
    }
    
    function displayMatches() {
      const matchArray = findMatches(this.value, restaurant);
      const html = matchArray.map(name => {
          return `
          <li>
            <span class="name">${name.restaurant}</span>
            <span class="address">${name.address}</span>
          </li>
     `;   

      }).join('');
      suggestions.innerHTML = html;
    }
    
    const searchInput = document.querySelector('.search');
    const suggestions = document.querySelector('.suggestions');
    
    searchInput.addEventListener('change', displayMatches);
    searchInput.addEventListener('keyup', displayMatches);