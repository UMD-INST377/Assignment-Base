app.route('/api')
.post(async(req, res) => {
    console.log('POST request detected');
    console.log('From data in res.body', req.body);
res.send(json);
});
 
const restaurantList = document.getElementById('restaurantList');
 let restaurant = [];

 async function windowAction() {
   const form = document.querySelector('userform');
   const search = document.querySelector('#city');

   const request = await fetch('/api');
   const data = await request.json();
  
   form.addEventListener('submit' async(event) => {
     event.preventDefault();
     const display = data.filter((record) => record.restaurant)
   })
 }

     
function displayMatches() {
  const matchArray = findMatches(this.value, restaurant);
  const html = matchArray.map(place => {
    const regex = new RegExp(this.value, 'gi');
    const restaurantName = names.restaurant.replace(regex, `<span class="hl">${this.value}</span>`);
    const zipCode = names.zipCode.replace(regex, `<span class="hl">${this.value}</span>`);

    function findMatches(wordToMatch, restaurant) {
      return restaurant.filter(name => {
        // here we need to figure out if the restaurant matches what was searched
        const regex = new RegExp(wordToMatch, 'gi');
        return name.restaurant.match(regex)
      });
    }
    
    function findMatches(word) {
      return restaurantList.filter(restaurant => restaurant.name.toLowerCase().indexOf(word) > -1);
    }
    
    function displayMatches() {
      const matchArray = findMatches(this.value);
      const html = matchArray.map(restaurant => {
        return `<li class="">
                <div class="name">${restaurant.name}</div>
                <div class="text">${restaurant.category}</div>
                <div class="text italic">${restaurant.address_line_1}</div>
                <div class="text italic">${restaurant.city}</div>
                <div class="text italic">${restaurant.zip}</div>
              </li>`;
      }).join('');
      suggestions.innerHTML = html;
  
  

 
 
 
     