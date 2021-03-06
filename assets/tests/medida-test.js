var expect = chai.expect;

suite('temperature', function() {
    test("Debería aceptar un valor y un tipo", function() {
        var medida = new Medida(23, 'f');
        expect(medida.getValue()).to.equal(23);
        expect(medida.getType()).to.equal('f');
    });

    test("Debería aceptar un valor y un tipo en un mismo parámetro", function() {
        var medida = new Medida("32c");
        expect(medida.getValue()).to.equal(32);
        expect(medida.getType()).to.equal('c');
    });

    test("Debería devolver un string con la representación del objeto", function() {
        var string = (new Medida("33k")).toString();
        expect(string).to.equal("33.00 k");
    });
    test("Debería devolver el elemento convertido", function() {
        var valor = "32.5e10 C to K",
            elemento = document.createElement("DIV"),
            convertir = Medida.convertir(valor, elemento);
        expect(convertir.toString()).to.equal("325000000273.15 Kelvin");

    });
    test("Debería dar error de conversion al no saber realizarla", function() {
        var valor = "32.5e10 C to m",
            elemento = document.createElement("DIV"),
            convertir = Medida.convertir(valor, elemento);
        expect(convertir.toString()).to.equal('ERROR. Introduzca una medida y conversión válida. Desconozco como convertir desde "c" hasta "m"');
    });
});
