# Este projecto esta basado en lo visto en la clase de Ingeniería de Software I a lo largo de varias semanas

Para correr este projecto se necesitan:
- Node.js y npm
- Cuenta de MongoDB Atlas

## Conectar MongoDB

mongodb+srv://User:Password@DBname.h6vbnbg.mongodb.net/
Este es una ejemplo del link que aparecerá en mongo y el cual será copiado en su .env
1. En MongoDB se deberá hacer un deploy de una base de datos junto con un usuario y permitir
   Nuestro IP en **Network Access**.
2. Se seleccionará **Connect > Drivers** para el link.
3. Se creará un .env con lo siguiente:

   PORT=5000 (Usualmente el 5000 a menos de que lo hayas cambiado)
   MONGO_DB=Tu link
   JWT_SECRET=Tu código que creaste

4. En PowerShell, instalar dependencias y las API's con este comando:

   ```
   powershell
   npm.cmd install
   npm.cmd run server
   ```
   La API empieza en `http://localhost:5000`
   Manten el powershell abierto durante la sesión

## Pruebas en Postman

