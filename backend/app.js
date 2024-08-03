// app.js
import express from 'express';
import bodyParser from 'body-parser';
import sequelize from './config/db.config.js';
import usuarioRoutes from './routes/usuario.routes.js';
import clienteRoutes from './routes/cliente.routes.js';
import autoRoutes from './routes/auto.routes.js';
import transaccionRoutes from './routes/transaccion.routes.js';
import permisoRoutes from './routes/permiso.routes.js';
import rolRoutes from './routes/rol.routes.js';
import usuariosPermisosRoutes from './routes/usuarios_permisos.routes.js';

const app = express();
app.use(bodyParser.json());

app.use('/usuarios', usuarioRoutes);
app.use('/clientes', clienteRoutes);
app.use('/autos', autoRoutes);
app.use('/transacciones', transaccionRoutes);
app.use('/permisos', permisoRoutes);
app.use('/roles', rolRoutes);
app.use('/usuarios_permisos', usuariosPermisosRoutes);

// Conectar a la base de datos y sincronizar los modelos
sequelize.sync()
  .then(() => {
    console.log('Conectado a la base de datos');
    app.listen(process.env.PORT || 3000, () => {
      console.log('Servidor iniciado en el puerto 3000');
    });
  })
  .catch(err => {
    console.error('No se pudo conectar a la base de datos:', err);
  });

export default app;
