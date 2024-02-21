const express = require('express');
const app = express();
// Middleware
app.use(express.json());

let estudiantes = [];

// Endpoint para insertar un estudiante
app.post('/insertOne', (req, res) => {
  const insertarEstudiante = req.body;
  estudiantes.push(insertarEstudiante);
  res.json({ status: "Estudiante creado" });
});

// Endpoint para obtener un estudiante por matrícula
app.get('/getOne/:matricula', (req, res) => {
    const matricula = req.params.matricula;
    const estudiante = estudiantes.find(est => est.matricula === matricula);
    if (estudiante) {
      res.json({ estudiante });
    } else {
      res.status(404).json({ error: "Estudiante no encontrado" });
    }
  });
  

// Endpoint para obtener todos los estudiantes
app.get('/getAll', (req, res) => {
  res.json({ estudiantes });
});

// Endpoint para actualizar un estudiante por matrícula
app.put('/updateOne/:matricula', (req, res) => {
  const matricula = req.params.matricula;
  const indice = estudiantes.findIndex(est => est.matricula === matricula);
  if (indice !== -1) {
    estudiantes[indice] = req.body;
    res.json({ status: "Estudiante actualizado con éxito" });
  } else {
    res.status(404).json({ error: "Estudiante no encontrado" });
  }
});

// Endpoint para eliminar un estudiante por matrícula
app.delete('/deleteOne/:matricula', (req, res) => {
  const matricula = req.params.matricula;
  const indice = estudiantes.findIndex(est => est.matricula === matricula);
  if (indice !== -1) {
    estudiantes.splice(indice, 1);
    res.json({ status: "Estudiante eliminado con éxito" });
  } else {
    res.status(404).json({ error: "Estudiante no encontrado" });
  }
});

app.listen(3500, () => {
  console.log('Server on port 3500');
});
