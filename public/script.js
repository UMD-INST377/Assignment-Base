
async function windowActions() {
    console.log('window loaded');
    const form = document.querySelector('.userform');
    const search = document.querySelector('#zipcode')
    const targetList = document.querySelector('.target-list');

    const request = await fetch('https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json');
    const data = await request.json();

<<<<<<< HEAD
    search.addEventListener('input', (event)=>{
        console.log('input', event.target.value)
        const display = data.filter(record) =>{
            return record.city.toUpperCase().includes(event.target.value.toUpperCase() || record.zip.includes(event.target.value));
        };

        // filter through each restaurant to add its name, cat, add, and zip into the list
        function displayMatches(function displayMatches(event)) {
=======
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
>>>>>>> 7715a97c691056a22385a11eef6b88b1fe765a51
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
<<<<<<< HEAD
    }   

=======
    })
    
>>>>>>> 7715a97c691056a22385a11eef6b88b1fe765a51
    // this listens for typing into the input box
    search.addEventListener('input', (event) => {
        console.log('input', event.target.value);
    });

    search.addEventListener('change', displayMatches);
    search.addEventListener('keyup', (event) => {
        displayMatches(event);
    })

};

<<<<<<< HEAD
window.onload = windowActions;
=======
window.onload = windowActions;
>>>>>>> 7715a97c691056a22385a11eef6b88b1fe765a51
