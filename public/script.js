
async function windowActions() {
    console.log('window loaded');
    const form = document.querySelector('.userform');
    const search = document.querySelector('#zipcode')
    const suggestions = document.querySelector('.suggestions');
    
    const request = await fetch('/api');
    const data = await request.json();

    search.addEventListener('input', (event)=>{
        console.log('input', event.target.value)
        const display = data.filter(record) =>{
            return record.city.toUpperCase().includes(event.target.value.toUpperCase() || record.zip.includes(event.target.value);
        });

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
                                                                                                  
    
};

window.onload = windowActions;
