const path = require('path')
const express = require('express')
const { error } = require('console')
const app = express()
const port = 3001

const root = path.join(__dirname, 'public')

const jokes = [
    {id: 1, setup: "A blind man walks into the middle of a bar with his dog. He picks the dog and swings him around by the tail and the bartender asks him, \"What are you doing?\"", punchline: "The man answers, \"I'm having a look around\"."},
    {id: 2, setup: "How do you get a one armed Poloc out of a tree?", punchline: "You wave. (I'm Polish, I can laugh)"},
    {id: 3, setup: "How do you cook an Alligator?", punchline: "Don't know about you but I use a croc-pot."}, 
    {id: 4, setup: "Why are chickens so funny?", punchline: "https://www.youtube.com/shorts/04GBDCWiknk"}, 
    {id: 5, setup: "Knock knock. Who's there? Cow says. Cow says who?", punchline: "No, a cow says moo."}, 
    {id: 6, setup: "If at first you don't succeed,", punchline: "then skydiving isn't for you."}, 
    {id: 7, setup: "How does a cucumber become a pickle?", punchline: "It goes through a jarring experience."}
]


app.use(express.json())
app.use(express.static('public'))

app.get('/', (request, response) => {
    response.sendFile('index.html', {root})
})

app.get('/api/v1/random-joke', (request, response) => {
    const index = Math.floor(Math.random() * jokes.length)
    console.log(index, jokes[index])
    response.send(jokes[index])
})

app.listen(port, ()=> console.log(`http://localhost:${port}`))