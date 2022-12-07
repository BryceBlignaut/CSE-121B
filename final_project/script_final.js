document.querySelector("#search").addEventListener("click", getPokemon);

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function lowerCaseName(string) {
  return string.toLowerCase();
}

function getPokemon(e) {
  const name = document.querySelector("#pokemonName").value;
  const pokemonName = lowerCaseName(name);

  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    .then((response) => response.json())
    .then((data) => {
      document.querySelector(".pokemonBox").innerHTML = `
      <div>
        <img
          src="${data.sprites.other["official-artwork"].front_default}"
          alt="Pokemon name"
        />
      </div>
      <div class="pokemonInfos">
        <h1>${capitalizeFirstLetter(data.name)}</h3>
        <p>Weight: ${data.weight}<br></p>
        <p>Moves: <br>
        ${capitalizeFirstLetter(data.moves[0].move.name)}<br>
        ${capitalizeFirstLetter(data.moves[1].move.name)}<br>
        ${capitalizeFirstLetter(data.moves[2].move.name)}<br>
        ${capitalizeFirstLetter(data.moves[3].move.name)}<br>
        </p>
        <p>Types: <br>
        ${capitalizeFirstLetter(data.types[0].type.name)}<br>
        </p>

      </div>`;
    })
    .catch((err) => {
      document.querySelector(".pokemonBox").innerHTML = `
      <h4>Pokemon not found 😞</h4>
      `;
      console.log("Pokemon not found", err);
    });

  e.preventDefault();
}