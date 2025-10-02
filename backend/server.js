// Importar dependencias
import express from 'express';
import cors from 'cors';
import emailRoutes from './routes/email.routes';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

// Middleware
app.use(cors()); // Permite solicitudes CORS desde Angular
app.use(express.json());

// Rutas
app.use('/api/email', emailRoutes);

const PORT = process.env.PORT || 3000;

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});

export default app;