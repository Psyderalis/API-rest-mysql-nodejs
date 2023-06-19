## Obtener empleados

#### Method: GET
https://api-rest-mysql-nodejs-production.up.railway.app/api/employees

## Obtener un empleado

#### Method: GET
https://api-rest-mysql-nodejs-production.up.railway.app/api/employees/:id

## Crear un empleado

#### Method: POST
https://api-rest-mysql-nodejs-production.up.railway.app/api/employees/

Body: name and salary.
Example:
{
 "name": "Juana",
 "salary": 2000
}

## Borrar un empleado

#### Method: DELETE
https://api-rest-mysql-nodejs-production.up.railway.app/api/employees/:id

## Actualizar un empleado

#### Method: PATCH
https://api-rest-mysql-nodejs-production.up.railway.app/api/employees/:id

Body: name and/or salary.
