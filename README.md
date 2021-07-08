# Verificador de documentos

## Funcionalidad extra 1

El cliente quiere ahora que nuestro software también valide NIE extranjero. Modifica el código de utils/verificadores.js para que verifique tanto documentos DNI como NIE.

Un NIE valido es X1234567P. Es decir empieza y acaba por una letra, y entre medio, tiene 7 dígitos.

La función __validarDocumento__ debe devolver __true__ tanto si el documento que recibe como parámetro es un DNI o un NIE. Implemente los cambios necesarios y haz algunas pruebas desde el formulario.

### Ejecutar los tests

Ejecuta "npm test" para verificar si se sigue cumpliendo todos los tests anteriores. Dicho de otro modo, verifica que tus cambios no han "roto" el código anterior

### Escribe nuevos tests

Escribe al menos dos tests para probar tu funcionalidad. Puedes escribir uno que pruebe un documento NIE válido, y otro, un NIE inválido.

Dime, ¿has sentido el impulso de escribir los tests **antes** de implementar la funcionalidad?
