
fetch("https://rickandmortyapi.com/api/character")
  .then((response) => {
  
    return response.json();
  })
  .then((data) => {
    const personajes = data.results;
    const $contenedor = document.getElementById("contenedor-tarjetas");

    console.log(personajes[0]);

    for (let i = 0; i < personajes.length; i++) {
      $contenedor.innerHTML += `
      <div class="contenedor-tarjetas">

      <div class="contenedor-personajes">
      <img class= "personajes"src="${personajes[i].image}">
      <h3 class="nombre-personaje">${personajes[i].name}</h3>
      <p>${personajes[i].gender}</p>   
      <p>${personajes[i].species}</p> 
      <p>${personajes[i].status}</p> 
      </div>
        
      </div>
      `;
    }
  });
