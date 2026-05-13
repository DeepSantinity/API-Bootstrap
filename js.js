function traerPersonaje() {

  fetch("https://rickandmortyapi.com/api/character")
    .then(respuesta => respuesta.json())
    .then(datos => {

      const random = Math.floor(Math.random() * datos.results.length);

      const personaje = datos.results[random];

      document.getElementById("personajes").innerHTML = `
        <div class="col-md-4">
          <div class="card">

            <img src="${personaje.image}" class="card-img-top">

            <div class="card-body">

              <h5 class="card-title">
                ${personaje.name}
              </h5>

              <p>${personaje.species}</p>

              <p>${personaje.status}</p>

            </div>
          </div>
        </div>
      `;
    });

}