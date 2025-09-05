# 21 días de choque en Javascript.
### Este repositorio es un repaso de 21 días para aprender lo basico de lenguaje Javascript.

## 1.- Tipos de datos.

En Javascript tenemos 9 tipos de datos divididos en 2 grupos conocidos como los primitivos y los NO primitivos.

#### Valores primitivos
Dentro de los tipos primitivos tenemos 7 tipos de datos:

- number 
- string
- boolean
- null
- undefined
- symbol
- bigint

Los valores primitivos son aquellos que no pueden ser creados, destruidos ni modificados. Son elementos o valores propios de Javascript:

* Undefined (undefined): el valor por defecto cuando no asignamos ningún valor intencionalmente.

* Null (null), el valor que asignamos intencionalmente para transmitir la idea de que no existe un valor.

* Boolean (true y false): los usamos para operaciones lógicas.

* Numbers (100, 3.14 y otros): los usamos para cálculos matemáticos.

* Strings ("hola", "Codeable" y otros): los usamos para representar textos.

* BigInts (10n): se usan para matemáticas con números grandes.

* Symbols (Symbol()): no los usaremos directamente, se utilizan para aspectos internos del lenguaje.

#### Valores no primitivos (Objetos/Funciones)

Los objetos y funciones son valores NO primitivos, porque a diferencia de los valores primitivos, se puede crearlos y modificarlos. Por esta razón se dice que estos valores son "mutables" (pueden cambiar), a diferencia de los valores primitivos que son "inmutables" (no pueden cambiar).

* Objects ({} y otros): los usamos para agrupar otros valores relacionados.

* Functions (function(x) { return x * 2; } y otras): las usamos para hacer referencia a un pedazo de código.

## Objetos

Un objeto es un dato más completo ya que puede contener datos dentro de sus datos, a estos datos anidados les llamamos "propiedades". Tiene una estructura que les permite alojar una infinidad de datos internos y mecánicas para manipular dichos datos.

## Funciones

Como ya vimos, para crear un objeto usamos la expresión { }, y para crear una función usamos la expresión function() { } por lo que estamos creando un objeto y le estamos dando el valor dentro del bloque de código entre sus llaves, en pocas palabras las Funciones son Valores