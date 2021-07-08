exports.verificadorDocumento = (documento) => {
    const patronDni = /[0-9]{8}-?[A-Z]/;
    const esValido = patronDni.test(documento);

    return esValido;
}