# Mercado-Web

Descripción
El Mini Market “Come Sano, Come Fresco Spa” está interesado en contratar un freelancer
para que desarrolle una aplicación en donde puedan ofrecer y vender sus alimentos de
forma online en la web. No obstante, por su modelo de negocio han advertido que
constantemente necesitarán hacer actualizaciones en su presentación, contenido y
funcionalidades, por lo que se plantea desarrollar un sistema compuesto por parciales para
poder abordar los cambios de una manera más rápida y cómoda.
En este desafío deberás construir un servidor con Express que utilice el motor de plantillas
Handlebars para desarrollar componentes y renderizar variables e iteradores en el template
del sitio web.

Para el control de datos en la aplicación, siéntete libre de ocupar la herramienta que más te
acomode, por ejemplo: LocalStorage, un arreglo dentro del servidor, un archivo JSON
gestionado con FileSystem, PostgreSQL con el paquete pg o la que creas conveniente.
En caso de utilizar PostgreSQL, deberás dejar el archivo correspondiente a la base de datos
que utilizaste o las sentencias SQL necesarias para crear la base de datos, y la tabla como
comentarios al final del archivo en donde estés desarrollando el servidor.
Requerimientos
1. Crear una ruta raíz que al ser consultada renderice una vista con un parcial
“Dashboard” enviándole en el render un arreglo con los nombres de los productos. Se
recomienda que estos coincidan con las imágenes de cada producto.
2. Incluir en la vista un parcial que contenga el menú del sitio web y sea renderizado
antes del Dashboard.
3. Crear un parcial “producto” que contenga el template correspondiente a la
presentación de cada producto en el Dashboard y reciba como parámetro el nombre
del producto.
4. Crear un parcial para la sección principal en donde se renderice un helper con el
mensaje de bienvenida y se realice una iteración para renderizar un parcial
“producto” pasándole como argumento el nombre de cada producto.
5. Consumir los códigos fuentes de Bootstrap y jQuery a través de rutas o middlewares
creados en el servidor. Estas dependencias deben ser instaladas con NPM.
