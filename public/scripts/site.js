const chicken = `<a href="https://www.youtube.com/shorts/04GBDCWiknk">Answer</a>`
const button = document.querySelector('button')
const getJoke = async () => {
    const url = `/api/v1/random-joke`
    const result = await fetch(url)
    
    const {id, setup, punchline} = await result.json()
    const jokeSetup = document.querySelector('#setup')
    const jokePunchline = document.querySelector('#punchline')
    console.log(setup, punchline)
    jokeSetup.textContent = setup
    jokePunchline.textContent = punchline
    if (punchline === "https://www.youtube.com/shorts/04GBDCWiknk"){jokePunchline.innerHTML = chicken }
}

button.addEventListener('click', () => {getJoke()})
