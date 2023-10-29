const generateJokeButton = document.getElementById('generate-joke');

// REQ001: Obtener todas las categorías
async function fetchCategories() {
  try {
    const response = await fetch('https://api.chucknorris.io/jokes/categories');
    const categories = await response.json();
    return categories;
  } catch (error) {
    console.error(error);
  }
}

async function renderCategories() {
  const categories = await fetchCategories();
  const tableBody = document.querySelector('tbody');
  categories.forEach((category) => {
    // Crear los elementos de la tabla
    const row = document.createElement("tr");
    const cellCategoryName = document.createElement("td");
    const categoryLink = document.createElement('a');

    categoryLink.innerText = category;

    categoryLink.addEventListener('click', async (event) => {
      event.preventDefault();
      try {
        await generateJokeByCategory(categoryLink.innerText);
        window.location.href = "./frase.html";
      } catch (error) {
        console.error(error);
      }
    });

    cellCategoryName.appendChild(categoryLink);
    row.appendChild(cellCategoryName);
    tableBody.appendChild(row);
  });
}

renderCategories();

async function fetchChuckNorrisLogo() {
  try {
    const response = await fetch('https://api.chucknorris.io/jokes/random');
    const jokeData = await response.json();
    return jokeData.icon_url;
  } catch (error) {
    console.error(error);
  }
}

async function renderChuckNorrisLogo() {
  const logoUrl = await fetchChuckNorrisLogo();
  const chuckNorrisImage = document.createElement("img");
  chuckNorrisImage.src = logoUrl;
  chuckNorrisImage.alt = "Chuck Norris Logo";
  document.body.appendChild(chuckNorrisImage);
}

renderChuckNorrisLogo();

// REQ003: Obtener una frase aleatoria al pulsar
generateJokeButton.addEventListener('click', async () => {
  try {
    await generateJoke();
    window.location.href = 'frase.html';
  } catch (error) {
    console.error(error);
  }
});

async function generateJoke() {
  try {
    const response = await fetch('https://api.chucknorris.io/jokes/random');
    const jokeData = await response.json();
    var jokeJSON = JSON.stringify(jokeData);
    localStorage.setItem('joke', jokeJSON);
  } catch (error) {
    console.error(error);
  }
}

async function generateJokeByCategory(category) {
  try {
    const response = await fetch(`https://api.chucknorris.io/jokes/random?category=${category}`);
    const jokeData = await response.json();
    var jokeJSON = JSON.stringify(jokeData);
    localStorage.setItem('joke', jokeJSON);
  } catch (error) {
    console.error(error);
  }
}
