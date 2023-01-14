// const myNasaApiKey = '1h2Lp2MjBgQiyAkdr7tna09RUO1vTQrXj7Xrunf3';
// const searchIngred = 'https://api.spoonacular.com/recipes/findByIngredients';
// const getSimilar = 'https://api.spoonacular.com/recipes/{id}/similar';
// const getRandom = 'https://api.spoonacular.com/recipes/random';


const BASE_URL = 'https://api.api-ninjas.com/v1/dogs?';
const apiKey = '6lvPpxCfW0FIP2AKcl7U2Q==ANwlVpuyJt0h9OIz';

const dogName = 'name=labrador';  //CHANGE THIS
const dogHeight = 'max_height=';
const dogWeight = 'min_height=';
const dogShedding = 'shedding=';
const dogBarking = 'barking=';
const dogEnergy = 'energy=';
const dogTraining = 'trainability=';

const searchURL = BASE_URL + dogName;

const choicesForm = document.querySelector('form');
const choicesSection = document.querySelector('section');

// Using event delegation, I have setup a listener for my FORM tag and all OPTION elements within.
//  This allows me to see when any are clicked, and subsequently create and add the chosen option to my Section 
choicesForm.addEventListener('click', (event) => {
    //looking for an OPTION tag to be clicked
    if (event.target.tagName === 'OPTION') {
        let clickedID = event.target.id;
        console.log('You chose an option!', clickedID);
        //make a BUTTON
        let chosenParam = document.createElement('button');
        chosenParam.innerText = event.target.innerText;     //add the clicked option to BUTTON
        choicesSection.append(chosenParam);

        if (event.target.getAttribute('id'))

            chosenParam.addEventListener('click', () => chosenParam.remove());      //give that new button an event listener to remove it

    }
});



fetch(searchURL, {
    headers: {
        'X-Api-Key': apiKey
    }
})
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
        console.log(data[0].name)
    })
    .catch((error) => console.log('Who let the dogs out?', error));




