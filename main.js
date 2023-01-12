// const myNasaApiKey = '1h2Lp2MjBgQiyAkdr7tna09RUO1vTQrXj7Xrunf3';
// const searchIngred = 'https://api.spoonacular.com/recipes/findByIngredients';
// const getSimilar = 'https://api.spoonacular.com/recipes/{id}/similar';
// const getRandom = 'https://api.spoonacular.com/recipes/random';


const BASE_URL = 'https://api.api-ninjas.com/v1/dogs?';
const apiKey = '6lvPpxCfW0FIP2AKcl7U2Q==ANwlVpuyJt0h9OIz';

const dogName = 'name=labrador';  //CHANGE THIS
const dogHeight = 'max_height=';
const dogWeight = 'min_height=';

const searchURL = BASE_URL + dogName;


fetch(searchURL, {
    headers: {
        'X-Api-Key': apiKey
    }
})
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log('Fetch fail!', error));





