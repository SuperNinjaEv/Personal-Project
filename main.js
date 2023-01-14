// const myNasaApiKey = '1h2Lp2MjBgQiyAkdr7tna09RUO1vTQrXj7Xrunf3';
// const searchIngred = 'https://api.spoonacular.com/recipes/findByIngredients';
// const getSimilar = 'https://api.spoonacular.com/recipes/{id}/similar';
// const getRandom = 'https://api.spoonacular.com/recipes/random';


const BASE_URL = 'https://api.api-ninjas.com/v1/dogs?';
const apiKey = '6lvPpxCfW0FIP2AKcl7U2Q==ANwlVpuyJt0h9OIz';


// PARAM NOTES
const dogNameBase = 'name=';  //CHANGE THIS**
const dogMaxHeightBase = 'max_height=';
const dogMinHeightBase = 'min_height=';
const dogSheddingBase = 'shedding=';
const dogBarkingBase = 'barking=';  //min of 1
const dogEnergyBase = 'energy=';    //min of 2
const dogTrainingBase = 'trainability=';    //min of 1

let searchURL = BASE_URL;

const choicesForm = document.querySelector('form');
const choicesSection = document.querySelector('section');
const fetchButton = document.querySelector('.fetch');

// Using event delegation, I have setup a listener for my FORM tag and all OPTION elements within.
// This allows me to see when any are clicked, and subsequently create and add the chosen option to my Section 
choicesForm.addEventListener('click', (event) => {
    if (event.target.tagName === 'OPTION') {    //looking for an OPTION tag to be clicked
        let clickedValue = event.target.value;
        let clickedID = event.target.id;
        console.log('You chose an option!', clickedID, clickedValue);

        let chosenParam = document.createElement('button'); //make a BUTTON
        chosenParam.innerText = event.target.innerText;     //add the clicked option to BUTTON
        choicesSection.append(chosenParam);

        if (clickedID === 'housing-barking') {
            if (clickedValue === 'appt') {
                let dogBarking = dogBarkingBase + '1&' + dogBarkingBase + '2&';
                searchURL += dogBarking;
                console.log(dogBarking, searchURL);
            } else {
                let dogBarking = dogBarkingBase + '3&' + dogBarkingBase + '4&' + dogBarkingBase + '5&';
                searchURL += dogBarking;
                console.log(dogBarking, searchURL);
            }
        } else if (clickedID === 'dog-size') {
            if (clickedValue === 'small') {
                let dogMaxHeight = dogMaxHeightBase + '15&';
                searchURL += dogMaxHeight;
                console.log(dogMaxHeight, searchURL)
            } else if (clickedValue === 'medium') {

            } else if (clickedValue === 'large') {

            } else {

            }

        } else if (clickedID === 'activity-level') {

        } else if (clickedID === 'training') {

        }

        chosenParam.addEventListener('click', () => chosenParam.remove());  //give that new button an event listener to remove it

    }
});

fetchButton.addEventListener('click', (event) => {
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
})






