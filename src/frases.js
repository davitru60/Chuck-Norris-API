var jokeJSON = localStorage.getItem('joke')
const jokeObj = JSON.parse(jokeJSON)

const paragraph = document.createElement("p")
paragraph.textContent = jokeObj.value

document.body.appendChild(paragraph)
