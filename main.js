const search = (event) => {
    event.preventDefault();
    const pokename = document.getElementById("pokename").value;
    const baseURL = "https://pokeapi.co/api/v2/pokemon/";
    $.get(baseURL + pokename, (pokemon) => {
      document.getElementById("pokename").innerHTML = 'Nome:' +  pokemon.name;
      document.getElementById("pokepeso").innerHTML = 'Peso:' + pokemon.weight;
      document.getElementById("pokealtura").innerHTML = 'Altura:' + pokemon.height;
      document.getElementById("pokeid").innerHTML = 'Id:' + pokemon.id;
      document.getElementById("pokeimage").src = pokemon.sprites.front_default;
    });
  }
  document.getElementById("pokeform").addEventListener('submit', search);












