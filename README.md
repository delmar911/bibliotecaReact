
![Logo](https://i.postimg.cc/wv6Xy2qx/logoblanco.png)


# Biblioteca MAC

Biblioteca MAC es un sitio web donde se consume la api de https://vasga-floze.github.io/docs-api-book/index.html se puede obtener, obtener por id, modificar y registrar libros con una interfaz muy intuitiva


## Autor

- [@delmar911](https://github.com/delmar911)
- [@angelicaB1021](https://github.com/angelicaB1021)
- [@nina2106](https://github.com/nina2106)


## Ejecutar localmente

Clonar el proyecto

```bash
  git clone https://github.com/delmar911/bibliotecaReact.git
```

Vaya al directorio del proyecto

```bash
  cd BibliotecaMAC
```
Instalar dependencias

```bash
  npm install
```

Iniciar el servidor

```bash
  npm run dev
```


## Tegnologias usadas

 React, Redux, TailwindCSS, Axios




## API Reference https://vasga-floze.github.io/docs-api-book/index.html

#### Obtener todos los items

```http
  GET /api/books
```


#### Obtener item por id

```http
  GET /api/book/${id}
```

| Parametro | tipo     | Descripción                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `int` | **Requerido**. Id del elemento a obtener|

#### Post item

```http
  POST /api/book
```
#### Modificar por id

```http
  PUT /api/book/${id}
```

| Parametro | tipo     | Descripción                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `int` | **Requerido**. Id del elemento a modificar|



