//The user enters something and submits
const inputtedValue = document.querySelector('.inputValue');
document.querySelector('button').addEventListener('click', playMusic)

// Empty Object to Store what I get back from API
let stuffReturned = {}

// API documentation: https://freesound.org/docs/api/resources_apiv2.html#sound-search-parameters
// Function that runs after user submits request to API:
function playMusic() {
    let media = inputtedValue.value
    console.log(media)
    fetch(
        `https://freesound.org/apiv2/search/text/?query=${media}&fields=previews&token=vLl4mj1QiJgBb99YfZoDCIKKLGUlDplF4vcwmYZ0`
    )
        .then((response) => response.json())
        .then((data) => {
            stuffReturned = data
            // const soundFile = data.results[0].previews['preview-hq-mp3']
            // console.log(soundFile)
            // const player = document.querySelector('#player')
            // player.src = soundFile
            // player.load()
            display(stuffReturned)
        })
}


// Play what we got from API
function display(dataWeGotFromAPI) {
    
    document.querySelector('#player').src = dataWeGotFromAPI.results[0].previews['preview-hq-mp3']

}
