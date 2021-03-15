
async function windowActions() {
    console.log('window loaded');

    const endpoint = "https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json"
    const request = await fetch(endpoint);
    const data = await request.json();

    function findMatches(wordToMatch, data) {
        return.data.filter(restaurant => {
            const regex = new RegExp(wordToMatch, 'gi');
            return restaurant.data.match(regex)
        })
    }

        function displayMatches(event) {
            const array = findMatches(event.target.value, data);
            const html = array.map.(restaurant => {
                const regex = new RegExp(event.target.value, 'gi');
                const zipcode = restaurant.data.replace(regex)
                return
            })
        };
    }   

    const searchInput = document.querySelector('.search');
    const suggestions = document.querySelector('.suggestions');

    search.addEventListener('change', displayMatches);
    search.addEventListener('keyup', (event) => {
        displayMatches(event);
    })

};

window.onload = windowActions;
