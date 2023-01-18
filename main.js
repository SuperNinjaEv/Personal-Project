// const myNasaApiKey = '1h2Lp2MjBgQiyAkdr7tna09RUO1vTQrXj7Xrunf3';
// const searchIngred = 'https://api.spoonacular.com/recipes/findByIngredients';
// const getSimilar = 'https://api.spoonacular.com/recipes/{id}/similar';
// const getRandom = 'https://api.spoonacular.com/recipes/random';


const BASE_URL = 'https://api.api-ninjas.com/v1/dogs?';
const apiKey = '6lvPpxCfW0FIP2AKcl7U2Q==ANwlVpuyJt0h9OIz';

// PARAM NOTES
const dogNameBase = 'name=';
const dogMaxWeightBase = 'max_weight=';
const dogMinWeightBase = 'min_weight=';
const dogSheddingBase = 'shedding=';
const dogBarkingBase = 'barking=';  //min of 1
const dogEnergyBase = 'energy=';    //min of 2
const dogTrainingBase = 'trainability=';    //min of 1

let searchURL = BASE_URL;

const main = document.querySelector('main');
const choicesForm = document.querySelector('form');
const fetchButton = document.querySelector('.fetch');
const choicesSection = document.querySelector('section');
const resultArea = document.querySelector('.result-area');

// Using event delegation, I have setup a listener for my FORM tag and all OPTION elements within.
// This allows me to see when any are clicked, and subsequently create and add the chosen option to my Section 
choicesForm.addEventListener('click', (event) => {
    event.preventDefault();

    let clickedValue = event.target.value;
    let clickedID = event.target.id;
    let clickedText = event.target.innerText;

    // If user enters ion name of breed and hits 
    if (event.target.tagName === 'BUTTON') {
        let dogName = document.querySelector('#dog-name');
        searchURL = BASE_URL;
        searchURL += dogNameBase + dogName.value;
        console.log(dogName.value);
        dogName.value = '';
        fetchFunction(searchURL);
        searchURL = BASE_URL;
    }
    if (event.target.tagName === 'OPTION') {    //looking for an OPTION tag to be clicked
        console.log('You chose an option!', clickedID, clickedValue);

        let chosenParam = document.createElement('button'); //make a BUTTON
        if (clickedText === 'What is a "walk"?') {
            clickedText = 'A "walk" is something that you will have to do if you get a dog.';
        };
        // Working of edge case to check if user has already clicked an option from a category to remove previous
        // if (choicesSection.getElementById(clickedID)) {
        //     // choicesSection.getElementsByClassName
        //     console.log('Found it already!')
        // }
        chosenParam.id = clickedID;
        chosenParam.innerText = clickedText;     //add the clicked option to BUTTON
        choicesSection.append(chosenParam);

        if (clickedID === 'housing-barking') {
            if (clickedValue === 'room') {
                let dogBarking = dogBarkingBase + '1&';
                searchURL += dogBarking;
            } else if (clickedValue === 'apt') {
                let dogBarking = dogBarkingBase + '2&';
                searchURL += dogBarking;
            } else if (clickedValue === 'house') {
                let dogBarking = dogBarkingBase + '4&';
                searchURL += dogBarking;
            } else if (clickedValue === 'yard') {
                let dogBarking = dogBarkingBase + '5&';
                searchURL += dogBarking;
            };
        } else if (clickedID === 'dog-size') {
            if (clickedValue === 'small') {
                let dogMaxWeight = dogMaxWeightBase + '25&';
                searchURL += dogMaxWeight;
            } else if (clickedValue === 'medium') {
                let dogMaxWeight = dogMaxWeightBase + '55&';
                let dogMinWeight = dogMinWeightBase + '26&';
                searchURL += dogMaxWeight + dogMinWeight;
            } else if (clickedValue === 'large') {
                let dogMaxWeight = dogMaxWeightBase + '200&';
                let dogMinWeight = dogMinWeightBase + '56&';
                searchURL += dogMaxWeight + dogMinWeight;
            } else {
                let dogMaxWeight = dogMaxWeightBase + '200&';
                searchURL += dogMaxWeight;
            };
        } else if (clickedID === 'activity-level') {
            if (clickedValue === 'never') {
                let dogEnergy = dogEnergyBase + '2&';
                searchURL += dogEnergy;
            } else if (clickedValue === 'rarely') {
                let dogEnergy = dogEnergyBase + '3&';
                searchURL += dogEnergy;
            } else if (clickedValue === 'often') {
                let dogEnergy = dogEnergyBase + '4&';
                searchURL += dogEnergy;
            } else {
                let dogEnergy = dogEnergyBase + '5&';
                searchURL += dogEnergy;
            }
        } else if (clickedID === 'training') {
            if (clickedValue === 'none') {
                let dogTraining = dogTrainingBase + '1&';
                searchURL += dogTraining;
            } else if (clickedValue === 'some') {
                let dogTraining = dogTrainingBase + '3&';
                searchURL += dogTraining;
            } else if (clickedValue === 'advanced') {
                let dogTraining = dogTrainingBase + '4&';
                searchURL += dogTraining;
            } else if (clickedValue === 'max') {
                let dogTraining = dogTrainingBase + '5&';
                searchURL += dogTraining;
            };
        };
        console.log(searchURL);
        // chosenParam.addEventListener('click', () => chosenParam.remove());  //give that new button an event listener to remove it
    }
});

function fetchFunction(searchURL) {
    fetch(searchURL, {
        headers: {
            'X-Api-Key': apiKey
        }
    })
        .then((response) => response.json())
        .then((data) => {
            pokeDogs(data)
            console.log(data)
            console.log(data[0].name)
        })
        .catch((error) => console.log('Who let the dogs out?', error));
};

function pokeDogs(dt) {
    document.querySelector('h1').innerText = 'Pick A Poke Pup!'
    doc
    for (let dog of dt) {
        let cardArtic = document.createElement('article');
        let cardTitle = document.createElement('section');
        let cardImg = document.createElement('img');
        let cardHeight = document.createElement('section');
        let cardWeight = document.createElement('section');
        let cardBark = document.createElement('section');
        let cardEnergy = document.createElement('section');
        let cardTrain = document.createElement('section');
        let cardDrool = document.createElement('section');
        let cardPlay = document.createElement('section');
        let cardProtek = document.createElement('section');
        let cardShed = document.createElement('section');
        let cardCoat = document.createElement('section');
        cardArtic.className = 'dog-result';
        cardTitle.setAttribute('class', 'card-title');
        cardTitle.innerHTML = `<strong>${dog.name}</strong><br>`;  //change the [0] when done and back to loop**
        resultArea.append(cardArtic);
        cardImg.setAttribute('src', dog.image_link);
        cardImg.setAttribute('alt', `${dog.name} Pic`);
        // cardImg.setAttribute('height', '200px');
        // cardImg.setAttribute('width', '300px');
        cardImg.setAttribute('class', 'card-img');
        cardHeight.setAttribute('class', 'card-stats');
        cardHeight.innerHTML = `<small><em>Max Height: ${dog.max_height_male}"</em></small>&nbsp;&nbsp;&nbsp;&nbsp;<small><em>Max Weight: ${dog.max_weight_male} lbs.</em></small>`;
        // cardWeight.setAttribute('class', 'card-stats');
        // cardWeight.innerHTML = `<small><em>Max Weight: ${dog.max_weight_male} lbs.</em></small>`;
        cardBark.setAttribute('class', 'card-stats1');
        cardBark.innerHTML = `<small><strong>Barking:</strong></small> ${dog.barking}`;
        cardEnergy.setAttribute('class', 'card-stats2');
        cardEnergy.innerHTML = `<small><strong>Energy:</strong></small> ${dog.energy}`;
        cardTrain.setAttribute('class', 'card-stats3');
        cardTrain.innerHTML = `<small><strong>Trainability:</strong></small> ${dog.trainability}`;
        cardDrool.setAttribute('class', 'card-stats4');
        cardDrool.innerHTML = `<small><strong>Drooling:</strong></small> ${dog.drooling}`;
        cardPlay.setAttribute('class', 'card-stats5');
        cardPlay.innerHTML = `<small><strong>Playfulness:</strong></small> ${dog.playfulness}`;
        cardProtek.setAttribute('class', 'card-stats6');
        cardProtek.innerHTML = `<small><strong>Protectiveness:</strong></small> ${dog.protectiveness}`;
        cardShed.setAttribute('class', 'card-stats7');
        cardShed.innerHTML = `<small><strong>Shedding:</strong></small> ${dog.shedding}`;
        cardCoat.setAttribute('class', 'card-stats8');
        cardCoat.innerHTML = `<small><strong>Coat Length:</strong></small> ${dog.coat_length}`;

        cardArtic.append(cardTitle, cardImg, cardHeight, cardWeight, cardBark, cardEnergy, cardTrain, cardPlay, cardProtek, cardDrool, cardShed, cardCoat);
    };
    main.append(resultArea);
}

fetchButton.addEventListener('click', (event) => {
    main.innerHTML = '';
    setTimeout(fetchFunction, 4000, searchURL)
    searchURL = BASE_URL;
});









