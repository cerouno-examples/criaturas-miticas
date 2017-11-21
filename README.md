# Criaturas Míticas

### Descripción

Este es un repositorio que contiene ejercicios para prácticar *Test-Driven Development* con JavaScript.

### Instalación

Para instalar estos ejercicios en tu computadora, primero haz `fork` de este repositorio en [Github](https://github.com), y luego clónalo ejecutando el siguiente comando en tu terminal:

```bash
$ git clone https://github.com/<tu usuario>/criaturas-miticas.git
```

Una vez clonado el código, para instalar las dependencias, ejecuta el siguiente comando en tu terminal desde el directorio de tu repositorio:

```bash
$ npm install
```

Asegúrate de tener installado `Mocha` y `Chai`. Puedes instalar estas librerias con este comando:

```bash
$ npm install -g mocha && npm install -g chai
```

Para correr las pruebas ejecuta el siguiente comando en tu terminal:

```bash
$ npm test
```

### Ejercicios

Puedes encontrar las pruebas en `/test`. Las pruebas están saltadas. Para ejecutar la prueba, remueve la `x` antes de `xit`.

Puedes encontrar las clases en `/lib`. Para resolver los ejercicios, corre las pruebas, y ve implementando la funcionalidad uno a uno.

Puedes correr las pruebas de un sólo archivo con este comando:

```bash
$ mocha test/<nombre del archivo de prueba>.js
```

El orden sugerido es el siguiente:

1. `UnicornSpec.js`
2. `VampireSpec.js`
3. `DragonSpec.js`
4. `HobbitSpec.js`
5. `PirateSpec.js`
6. `WizardSpec.js`
7. `MedusaSpec.js`
8. `WerewolfSpec.js`
9. `CentaurSpec.js`
