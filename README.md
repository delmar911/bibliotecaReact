
![Logo](https://i.postimg.cc/Df9kXxq1/logo-Blanco.png)


# Online Shop MAC

Tienda Online MAC es un sitio web donde se consume la api de  Platzi Fake Store API https://fakeapi.platzi.com/ se puede obtener, obtener por id, ver los detalles y un carrito de compras con una interfaz muy intuitiva


## Autor

- [@delmar911](https://github.com/delmar911)
- [@angelicaB1021](https://github.com/angelicaB1021)
- [@nina2106](https://github.com/nina2106)


## Ejecutar localmente

Clonar el proyecto

```bash
  git clone https://github.com/delmar911/bibliotecaReact.git
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

 React, TailwindCSS, Axios


## API Reference https://fakeapi.platzi.com/en/about/introduction/

#### Obtener todos los items

```http
  [GET] https://api.escuelajs.co/api/v1/products
```


#### Obtener item por id

```http
  [GET] https://api.escuelajs.co/api/v1/products/${id}
```

| Parametro | tipo     | Descripción                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `int` | **Requerido**. Id del elemento a obtener|

#### Filtrar por titulo
```http
[GET] https://api.escuelajs.co/api/v1/products/?title=Generic
```
#### Filtrar por precio
```http
[GET] https://api.escuelajs.co/api/v1/products/price=100
```
#### Filtrar por rango de precio
```http
[GET] https://api.escuelajs.co/api/v1/products/?price_min=900&price_max=1000
```
#### Filtrar por categoria
```http
[GET] https://api.escuelajs.co/api/v1/products/?categoryId=1
```
#### Categorias
```http
[GET] https://api.escuelajs.co/api/v1/categories
```
