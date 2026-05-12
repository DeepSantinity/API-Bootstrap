fetch("https://rickandmortyapi.com/api/character")
.then(respuesta => respuesta.json())
.then(datos => {
datos.results.forEach(personaje => {

console.log(personaje.name);
});
});