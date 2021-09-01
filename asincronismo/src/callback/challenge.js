// Importamos el mudulo
let XMLHTTPRequest = require("xmlhttprequest").XMLHttpRequest;
// Direccion de la API
let API = "https://rickandmortyapi.com/api/character/";

// Function principal
function fetchData(url, callback) {
  // Instanciamos la conexion
  const xhttp = new XMLHTTPRequest();
  // Abrimos conexion con el metodo, la ruta y si es asincrono
  xhttp.open("GET", url, true);
  // Validacion del llamado
  xhttp.onreadystatechange = (event) => {
    // El State 4 es el ultimo de la peticion
    if (xhttp.readyState === 4) {
      // Verificamos si el status esta en 200(funciona), o si es un error(400, 500, etc);
      if (xhttp.status === 200) {
        // El primer valor es el error y el segundo el resultado
        // Ejecutamos el callback con el resultado
        callback(null, JSON.parse(xhttp.responseText));
      } else {
        // Si no es 200, osea, es un error
        const error = new Error(`Error ${url}`);
        return callback(error, null);
      }
    }
  };
  // Por ultimo enviamos la peticion
  xhttp.send();
}

// Buscamos la lista de personajes
fetchData(API, (error1, data1) => {
  if (error1) return console.error(error1);

  fetchData(API + data1.results[0].id, function (error2, data2) {
    if (error2) return console.error(error2);
    fetchData(data2.origin.url, function (error3, data3) {
      if (error3) return console.error(error3);
      console.log(data1.info.count);
      console.log(data2.name);
      console.log(data3.dimension);
    });
  });
});
