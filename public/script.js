
async function windowActions() {
    console.log('window loaded');
    const form = document.querySelector('.userform');
    const search = document.querySelector('#zipcode')
    const targetList = document.querySelector('.target-list');

    const request = await fetch('https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json');
    const data = await request.json();

    search.addEventListener('input', (event)=>{
        console.log('input', event.target.value)
        const display = data.filter(record) =>{
            return record.city.toUpperCase().includes(event.target.value.toUpperCase() || record.zip.includes(event.target.value));
        };

        // filter through each restaurant to add its name, cat, add, and zip into the list
        function displayMatches(function displayMatches(event)) {
            filtered.forEach(restaurant => {
                const newItem = document.createElement('li');
                newItem.classList.add('list-item');
                newItem.innerHTML = `
                <h2>${restaurant.name}</h2>
                <h3>${restaurant.category}</h3>
                ${restaurant.address_line_1}
                ${restaurant.zip}
                `;
                targetList.append(newItem);
            }); 
        };
    }   

    // this listens for typing into the input box
    search.addEventListener('input', (event) => {
        console.log('input', event.target.value);
    });
    
    search.addEventListener('change', displayMatches);
    search.addEventListener('keyup', (event) => {
        displayMatches(event);
    })
};

window.onload = windowActions;
