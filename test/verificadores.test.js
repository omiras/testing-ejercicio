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