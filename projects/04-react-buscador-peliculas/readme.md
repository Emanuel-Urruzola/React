## Buscador de películas
Prueba técnica de busqueda de peliculas con la api https://www.omdbapi.com/

Requerimientos:
✔ Necesita mostrar un imput para buscar la película y un botón para buscar.
✔ Lista las películas y muestra el título, año y poster.
✔ Que el formulario funcione .
✔ Haz que las películas se muestren en un grid responsive.
✔ Hacer el fetching de datos. (Primero se uso [with-results.json](src/mocks/with-results.json con una) y [without-results.json](src/mocks/with-results.json con una) para almacenar los resultados y trabajar con ellos previamente)

Primera iteración
✔ Evitar que se haga la misma busqueda 2 veces seguidas
✔ Haz que la busqueda se haga automáticamente al escribir.
✔ Evita que se haga la búsqueda continuamente al escribir (debounce)

Para arrancar el proyecto luego de clonarlo necesitaras instalar dependencias
```node
npm install
```

Arrancar el proyecto en modo desarrollo
```node
npm run dev
```

Para ejecutar el test
```node
npm playwright test
```
