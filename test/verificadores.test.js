var {verificadorDocumento} = require('../utils/verificadores');

test('para un dni español, debería validar', () => {
    const esValido = verificadorDocumento('40123456E');
    expect(esValido).toBe(true);
})

test('si el dni no tiene letra, no debería validar', () => {
    const esValido = verificadorDocumento('40123456');
    expect(esValido).toBe(false);
})

test('si el dni tiene guion, valida', () => {
    const esValido = verificadorDocumento('40123456-E');
    expect(esValido).toBe(true);
})

test('un NIE con formato correcto debe ser valido', () => {
    const esValido = verificadorDocumento('X1234567Y')
    expect(esValido).toBe(true);
})


test('un NIE sin la letra inicial o final no debe validar', () => {
    const esValido = verificadorDocumento('1234567Y')
    expect(esValido).toBe(false);
    const esValido2 = verificadorDocumento('A1234567');
    expect(esValido2).toBe(false);
})