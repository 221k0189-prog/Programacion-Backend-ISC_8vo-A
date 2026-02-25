/* REFLEXIÓN - EJERCICIO 1.3

1. ¿Cuál es la diferencia fundamental entre un módulo nativo (como 'fs')
y un módulo de NPM (como 'sillyname') en cuanto a su origen e instalación?
R= La diferencia entre un módulo nativo y uno de NPM es que el módulo nativo,
como 'fs', ya viene incluido cuando instalamos Node.js, así que no necesitamos
instalar nada extra para usarlo. En cambio, un módulo de NPM, como 'sillyname', es creado por otras personas
y está en internet (en npmjs.com). Para poder usarlo, primero tenemos que
instalarlo con el comando "npm install".

2. Investigando la sintaxis: ¿Qué diferencia existe entre 'require' (CommonJS)
y 'import' (ES Modules)? Considera el momento en que se cargan los módulos.
R= La diferencia entre 'require' e 'import' es la forma en que se usan para
traer módulos al proyecto.

'require' es la forma más antigua que usa Node.js y carga el módulo cuando
el programa se está ejecutando.

'import' es una forma más moderna y funciona desde el inicio del programa.
Para poder usarlo en Node.js, necesitamos agregar "type": "module"
en el archivo package.json.

3. Sobre el archivo 'package.json':

a) ¿Por qué es vital compartir este archivo pero NO la carpeta 'node_modules' al subir a un repositorio?
R= Es importante compartir el archivo package.json porque ahí se guarda
la información del proyecto y las dependencias que necesita para funcionar.
No se debe subir la carpeta node_modules porque pesa mucho y se puede
volver a crear fácilmente.

b) ¿Qué sucede si ejecutas 'npm install' en una carpeta que solo tiene el package.json?
R= Si ejecutamos "npm install" en una carpeta que solo tiene el package.json,
NPM va a leer ese archivo e instalar automáticamente todas las dependencias
que estén ahí, creando otra vez la carpeta node_modules.
*/

