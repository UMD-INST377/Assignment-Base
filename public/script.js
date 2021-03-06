
async function windowActions() {
    console.log('window loaded');
    const form = document.querySelector('.userform');
    const search = document.querySelector('#zipcode')
<<<<<<< HEAD
    const suggestions = document.querySelector('.suggestions');
    
    const request = await fetch('/api');
=======
    const targetList = document.querySelector('.target-list');

    const request = await fetch('https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json');
>>>>>>> aa5f99a02f73b398e522a9fc6430af09a16b47e3
    const data = await request.json();

    search.addEventListener('input', (event)=>{
        console.log('input', event.target.value)
        const display = data.filter(record) =>{
            return record.city.toUpperCase().includes(event.target.value.toUpperCase() || record.zip.includes(event.target.value);
        });
<<<<<<< HEAD

        display.forEach(restaurant => {
            const newItem = document.createdElement('li');
            newItem.classList.add('list-item');
            newItem.innerHTML = `
            ${restaurant.name}
            ${restaurant.category}
            ${restaurant.address_line_1}
            ${restaurant.city}
            ${restaurant.zip}
            `:

            suggestions.append(newItem);
        });
    })
                                                                                                  
    
=======

        // filter through each restaurant to add its name, cat, add, and zip into the list
        function displayMatches() {
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
        }
    })   

    // this listens for typing into the input box
    search.addEventListener('input', (event) => {
        console.log('input', event.target.value);
    });
    
    search.addEventListener('change', displayMatches);
    search.addEventListener('keyup', (event) => {
        displayMatches(event);
    })
>>>>>>> aa5f99a02f73b398e522a9fc6430af09a16b47e3
};

window.onload = windowActions;
