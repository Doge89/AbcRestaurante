# Proyecto ABC

* Este proyecto fue creado para fines escolares *

El proyecto siguiente fue desarrollado con NodeJS y Angular en su versin 16 y 13 respectivamente usando MongoDB 5.0.5

*** Se recomienda que si se desea ejecutar, se descargen dichas versiones, por motivos de compatibilidad ***

Para descargar NodeJS [Descargar](https://nodejs.org/es/)

Para descargar Angular y ver su documentacion [Angular](https://angular.io/)

Para descargar MongoDB, descargar la community server. [MongoDB](https://www.mongodb.com/try/download/community)

* Tambien es recomendale que usted tenga instalado Git en su dispositvo *

* Para Empezar *

*** Es importante que antes de todo esto deba de instalar NodeJS ***

1.- Debera de instalar el cliente de angular para poder ejecutar la aplicacion en su entorno
```
    npm i -g @angular/cli
```
El flag -g indica que se instalara de forma global

2.- Una vez instalado deberemos de ejecutar el servidor de MongoDB. Para ello debemos de irnos a la carpeta donde lo hallamos instalado. Después debemos de buscar la carpeta bin y dentro de ella ejecutar el archivo * mongod.exe *

3.- Levantado el servidor de MongoDB lo siguiente es instalar los paquetes del proyecto. Para ello basta con ejecutar
```
    npm install
```
Y de forma automatica se descargaran

4.- Una vez descargado sigue ejecutar el entorno de NodeJS
```
    npm run dev
    node start
```
La diferencia esta en que el dev usted estara en modo debugging mientras que el start ejecutara como si fuere de produccion

5.- Y por ultimo sigue ejecutar el servidor de Angular, para ello tiene que acceder a la carpeta client y ahi ejecutar: 
```
    npm start
```
De esta forma se ejecutara el servidor en *localhost:4200*

#Notas
Si desas agrear un ingrediente en las bebidas Deberas Oprimir Shift
