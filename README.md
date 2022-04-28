# PE103 - 28/04/2022

>Informe para la asignatura de Desarrollo de Sistemas Informáticos
>
>>**Última modificación**: 28/04/2022
>>>
>>>[Eric Dürr Sierra](alu0101027005@ull.edu.es)

***

## [Enlace a la documentacion generada con TypeDoc](http://dsi-pe103-28-04-code-docs.surge.sh)

## Respuestas

### 1 ¿Qué argumentos recibe el manejador de la función watch?

recibe el tipo de ebento y el nombre del fichero

### 2 ¿Qué sucede si el fichero pasado desde la línea de comandos al programa anterior no existe?

Se lanza un error donde se describe que el path indicado no contiene el fichero que se busca observar

### 3 ¿Qué sucede si el fichero observado se elimina mientras está siendo observado?

Se lanza un error donde se describe que el path indicado no contiene el fichero que se busca observar



## Comandos npm del repositorio

- npm test  `ejecuta los test unitarios`
- npm run test:watch `inicia la ejecución de los test unitarios de manera ininterrumpida`
- npm run test:coverage `inicia la ejecución de los test junto con la cobertura de código`
- npm run get:coverage `transforma el informe de la cobertura de código en formato lcov`
- npm run build `ejecuta los test y traduce el código TypeScript a JavaScript`
- npm run docs `Genera la documentación de código con TypeDoc del código fuente`
