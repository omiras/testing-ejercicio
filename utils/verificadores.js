exports.verificadorDocumento = (documento) => {
    const patronDni = /.*/; // TODO MODIFICAR
    const esValido = patronDni.test(documento);

    return esValido;
}