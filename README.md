# Inventory
API REST desarrollada con Java y Spring Boot para la gestión de productos e inventario.

## Tecnologías utilizadas

- Java
- Spring Boot
- Spring Data JPA
- Maven
- MySQL
- Hibernate

## Funcionalidades

- Crear productos
- Listar productos
- Buscar productos por ID
- Actualizar productos
- Eliminar productos
- Persistencia de datos con JPA

## Arquitectura

El proyecto está organizado en capas:

- Controller
- Service
- Repository
- Entity

## Endpoints principales

| Método | Endpoint | Descripción |
|---|---|---|
| GET | /products | Obtener productos |
| GET | /products/{id} | Obtener producto por ID |
| POST | /products | Crear producto |
| PUT | /products/{id} | Actualizar producto |
| DELETE | /products/{id} | Eliminar producto |

## Objetivo del proyecto

Proyecto realizado para practicar el desarrollo backend con Spring Boot, arquitectura en capas y creación de APIs REST

## Cómo ejecutar el proyecto

1. Clonar el repositorio " https://github.com/DanielFloreTrejo/inventory-api-springboot.git"
2. Configurar la base de datos en `application.properties`
3. Ejecutar:

##
