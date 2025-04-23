import express, { Request, Response } from 'express';

// Crear una instancia de la aplicación Express
const app = express();

// Configurar el puerto en el que el servidor va a escuchar
const port = 3000;

// Crear una ruta raíz (/) que devuelva un mensaje de bienvenida
app.get('/', (req: Request, res: Response) => {
  res.send('¡Bienvenido a mi app!');
});

// Hacer que el servidor escuche en el puerto configurado
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});

