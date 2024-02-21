// Importar el módulo de Express
const express = require('express');

// Crear una aplicación web con Express
const app = express();

// Definir una función que calcule el factorial de un número
/*function factorial(n) {
  // Si n es menor o igual que 1, el factorial es 1
  if (n <= 1) {
    return 1;
  }
  // Si no, el factorial es n multiplicado por el factorial de n-1
  else {
    return n * factorial(n - 1);
  }
}


app.get('/factorial/:n', (req, res) => {
  // Obtener el valor del parámetro n
  let n = parseInt(req.params.n);
  // Calcular el factorial de n
  let f = factorial(n);
  res.json({
    status:`El factorial de ${n} es ${f}`
  });
});
*/
// Iniciar un servidor web en el puerto 3500
app.listen(3500, () => {
  console.log('Server listening on port 3500');
});

