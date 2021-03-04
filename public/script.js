import { json } from "express";
//<script async src="https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json"></script>
app.route('/api')
.post(async(req, res) => {
    console.log('POST request detected');
    console.log('From data in res.body', req.body);
res.send(json);
});
 
const restaurantList = document.getElementById('restaurantList');
 let restaurant = [];

 const loadRestaurant = async () => {
  try {
      const res = await fetch('https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json');
      restaurant = await res.json();
      displayRestaurant(restaurant);
  } catch (err) {
      console.error(err);
  }
};

function displayMatches() {
  const matchArray = findMatches(this.value, restaurant);
  const html = matchArray.map(place => {
    const regex = new RegExp(this.value, 'gi');
    const restaurantName = names.restaurant.replace(regex, `<span class="hl">${this.value}</span>`);
    const zipCode = names.zipCode.replace(regex, `<span class="hl">${this.value}</span>`);

    return `
      <li>
        <span class="name">${restaurantName} ||  <span class="name">${zipCode}
      </li>
    `;
  }).join('');
  suggestions.innerHTML = html;
  
const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);

     