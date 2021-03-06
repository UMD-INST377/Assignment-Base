async function windowActions() {
    console.log('window loaded');
    const form = document.querySelector('.userform');
    const search = document.querySelector('#zipcode')
    const targetList = document.querySelector('.target-list');

    const request = await fetch('https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json');
    const data = await request.json();

    form.addEventListener('submit', async (event) => {
        event.preventDefault();
        console.log('submit fired', event.target.value);
        const filtered = data.filter((record) => {
            const regex = new RegExp(event.target.value, 'gi');
            return record.zip.match(regex)
        })
        displayMatches(event.target.value);
        ;
        
        // filter through each restaurant to add its name, cat, add, and zip into the target list
        function displayMatches() {
            filtered.forEach(restaurant => {
                const newItem = document.createElement('li');
                newItem.classList.add('list-item');
                newItem.innerHTML = `
                <h1><strong>${restaurant.name}</strong></h1>
                <h2><em>${restaurant.category}</em></h2>
                ${restaurant.address_line_1}
                ${restaurant.zip}
                `;
                targetList.append(newItem);
            }); 
        };
    })
    
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