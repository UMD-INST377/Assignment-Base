 
async function windowAction() {
  const form = document.querySelector('.userform');
  const search = document.querySelector('#city');

  const request = await fetch('/api');
  const data = await request.json();

  form.addEventListener('submit', async(event) => {
    event.preventDefault();
    const display = data.filter((record) => record.city.toUpperCase() === search.nodeValue.toUpperCase());
  });
  search.addEventListener('input', (event) => {
    console.log('input', event.target.value);
  });
} 

