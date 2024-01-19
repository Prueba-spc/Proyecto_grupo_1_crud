const mysql = require('mysql');
const conexion = mysql.createConnection({
    host     : '68.64.164.116',
    port     : '19905',
    user     : 'app_102_g01_jcedeno',
    password : 'app_102_g01_jcedeno',
    database : 'db_grupo_01_strategists',  
});
conexion.connect((error)=>{
    if (error) {
      console.error('El error de conexión es: ' + error);
      return;
    }
    console.log('¡Conectado a la Base de Datos!');
  });
module.exports = conexion;