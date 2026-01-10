# Taller: Clases en JavaScript (Nivel Inicial)

Este taller está diseñado para estudiantes que inician en el desarrollo de software y llevan aproximadamente **2 meses trabajando con JavaScript**.

El objetivo es evaluar y reforzar conocimientos básicos sobre:

- Clases
- Constructores
- Métodos
- Getters y Setters
- Encapsulación
- Herencia
- Polimorfismo

Estos ejercicios sirven como **filtro previo** antes de iniciar clases introductorias de **Angular**.

---

## Enunciado 1: Sistema básico de usuarios

### Contexto

Se desea modelar un sistema muy simple de usuarios para una aplicación web.

### Requerimiento

Crea una clase `User` que represente a un usuario del sistema.

### Especificaciones

- La clase debe tener:
  - Propiedades:
    - `name`
    - `email`
    - `password` (no debe ser accesible directamente)
  - Un **constructor** que inicialice estas propiedades.

- Implementa:
  - Un **getter** para obtener el nombre y el email.
  - Un **setter** para actualizar el email.
  - Un método `login()` que muestre un mensaje indicando que el usuario inició sesión.

- Crea una clase `Admin` que **herede** de `User`.
  - Debe tener un método adicional `deleteUser()` que muestre un mensaje indicando que un usuario fue eliminado.
  - Sobrescribe el método `login()` para mostrar un mensaje diferente al de `User`.

### Objetivo de evaluación

- Uso correcto de clases y constructor.
- Encapsulación (convención `_password` o `#password`).
- Uso básico de herencia.
- Polimorfismo mediante sobrescritura de métodos.

### Nivel de abstracción

**Bajo**  
Problema cercano a un escenario real y cotidiano. No requiere lógica compleja.

---

## Enunciado 2: Sistema de figuras geométricas

### Contexto

Se quiere crear un sistema sencillo para calcular áreas de figuras geométricas.

### Requerimiento

Crea una clase base llamada `Shape`.

### Especificaciones

- La clase `Shape` debe:
  - Tener una propiedad `name`.
  - Tener un método `calculateArea()` que retorne `0`.

- Crea dos clases hijas:
  - `Rectangle`
  - `Circle`

- Cada clase hija debe:
  - Tener su propio **constructor**.
  - Sobrescribir el método `calculateArea()`.

- Implementa **getters** para obtener el área calculada.

### Objetivo de evaluación

- Comprensión de clases base y clases hijas.
- Uso de herencia.
- Polimorfismo (mismo método, distinto comportamiento).
- Uso básico de getters.

### Nivel de abstracción

**Medio-bajo**  
Introduce abstracción sin agregar complejidad innecesaria.

