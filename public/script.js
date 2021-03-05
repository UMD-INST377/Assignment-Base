async function windowActions() {
    console.log('window loaded');
    const form = document.querySelector('.userform');
    const search = document.querySelector('#city');
    const targetList = document.querySelector('.targetBox')


    const request = await fetch('/api');
    const data = await request.json();
    console.table(data);
    form.addEventListener('submit', async (event) => {
        event.preventDefault();
        console.log('submit fired', search.value);
        const filtered = data.filter((record) => record.city.toUpperCase() === search.value.toUpperCase());
        const targetList = document.createElement()
        filtered.forEach(item) => {
            const appendItem = document.createElement("li");
            appendItem.innerText = item.name;
            targetList.append(appendItem);
        });
    });


        search.addEventListener('input', (event) => {
            console.log('input', event.target.value);
        
    });
}

window.onload = windowActions;
