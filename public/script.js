async function windowsActions() {
    function findMatches(wordToMatch, food) {
      return food.filter(any => {
          const regex = new RegExp(wordToMatch, 'gi');   
          return any.name.match(regex)
      });
    }
    
    console.log('window loaded');
    const form = document.querySelector('.userform');
    const search = document.querySelector('#search_value');
    const targetList = document.querySelector('.target-list');
    const request = await fetch('https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json');
    const data = await request.json();
    
  
    form.addEventListener('submit', async (event) => {
      event.preventDefault();
      console.log('submit fired', search.value);
      // eslint-disable-next-line camelcase
      food_list = findMatches(search.value.toUpperCase(),data);
      console.log(food_list[1]);
      // eslint-disable-next-line max-len
      //const filtered = data.filter((any) => any.name.toUpperCase() === search.value.toUpperCase());
      food_list.forEach((item) => {
        const appendItem = document.createElement('li');
        appendItem.innerHTML = `<span class="name">${item.name}</span>` + ' ' + `<span class="category">${item.category}</span>` + ' ' + `<address><span class="address">${item.address_line_1}</span>` + ' ' + `<span class="address">${item.city}</span>` + ' ' + `<span class="address">${item.zip}</span></address>`
        targetList.append(appendItem); 
      });
    });
  }
  
  window.onload = windowsActions;
  