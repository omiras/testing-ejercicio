exports.verificadorDocumento = (documento) => {
    const patronDni = /[0-9]{8}-?[A-Z]/;
    const patronNIE = /[A-Z][0-9]{7}[A-Z]/;

    const esValidoDNI = patronDni.test(documento);
    const esValidoNIE = patronNIE.test(documento);

    return esValidoDNI || esValidoNIE;
}