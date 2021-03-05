async function windowActions(){
    console.log('window loaded');
    const form = document.querySelector('.userform')
    const search = document.querySelector('.category');
    

    const request = await fetch(https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json');
    const data = await request.json;
    
    search.addEventListener('input', (event) =>{
        console.log('input', event.target.value);
    });

    form.addEventListener(async (event)=> {
        event.preventDefault();
        console.log('submit fired', search.value);
        const display = data.filter((record) => record.type.toUpperCase() === search.value.toUpperCase());

    });


}
window.onload=windowActions;
