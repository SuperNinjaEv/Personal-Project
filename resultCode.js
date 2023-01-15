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