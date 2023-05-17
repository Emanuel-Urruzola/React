# Proyecto monorepositorio multipaquete
En este repositorio subo código de react, que fui aprendiendo viendo la serie de videos de `Curso de react [2023]` de Miguel Ángel Durán, **Desarrollador JavaScript Full Stack** con 10 años experiencia, y creador de contenido en Twitch y YouTube, cuyo primer video se lanzo el 17 marzo 2023.

En la carpeta principal esta instalado como dependencia de desarrollo standard para usar de linter en común entre todos los proyectos. Con la siguiente configuración en el `package.json`:
``` json
"eslintConfig": {
	"extends": "./node_modules/standard/eslintrc.json"
}
```
Para que funcione correctamente con React.

Tambien, si clonas el proyecto desde este punto para que funcione el linter necesitas ejecutar el comando
``` node
npm install
```

## Acceso rápido a todos los proyectos.
| Proyecto | Código | Web |
| --- | --- | --- |
|Twitter Follow Card | [Ver](projects/00-twitter-follow-card/) | [Visitar](https://twitter-follow-card.surge.sh/) |
|Tic Tac Toe | [Ver](projects/01-tic-tac-toe/) | [Visitar](https://urruzola-tic-tac-toe.surge.sh/) |
|Mouse Follower | [Ver](projects/02-mouse-follower) | [Visitar](https://urruzola-mouse-follower.surge.sh/) |
|Prueba técnica con Promesas, fetching y testing E2E | [Ver](projects/03-prueba-tecnica) | [Visitar](https://urruzola-cat-facts.surge.sh/) |
|Prueba técnica con formularios, buscador utilizando una API | [Ver](projects/04-react-buscador-peliculas) | [Visitar](https://urruzola-buscador-peliculas.surge.sh/) |
|Creación de un ecommerce con carrito de compras | [Ver](projects/05-shopping-cart) | [Visitar](https://urruzola-ecommerce.surge.sh/) |
