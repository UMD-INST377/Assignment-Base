const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');
searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);

function loadData(){
  $.ajax({
    type: "GET",
    url: 'https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json',
    dataType: "json",
    data:{},
    success: function (res) {
      restaurantList = res
    }
  })
}
loadData()

// {"establishment_id":"900","name":"LONGHORN STEAKHOUSE OF BOWIE 5174","category":"Restaurant","inspection_date":"2020-05-13T00:00:00.000","inspection_results":"------","city":"BOWIE","state":"MD","zip":"20716","address_line_1":"4100 TOWN CENTER BLVD","address_line_2":"------","food_from_approved_source":"In Compliance","food_protected_from":"In Compliance","ill_workers_restricted":"In Compliance","proper_hand_washing":"In Compliance","cooling_time_and_temperature":"In Compliance","cold_holding_temperature":"In Compliance","hot_holding_temperature":"In Compliance","cooking_time_and_temperature":"In Compliance","reheating_time_and_temperature":"In Compliance","hot_and_cold_running_water":"In Compliance","proper_sewage_disposal":"In Compliance","no_bare_hand_contact":"In Compliance","adequate_hand_washing":"In Compliance","rodent_and_insects":"In Compliance","food_contact_surfaces_and":"In Compliance","inspection_type":"N/A","owner":"Colleen Lyons","type":"Food Establishments","geocoded_column_1":{"type":"Point","coordinates":[-76.733979,38.945787]},":@computed_region_87xh_ddyp":"16438"}
// here we need to figure out if the restaurant matches what was searched
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
}
