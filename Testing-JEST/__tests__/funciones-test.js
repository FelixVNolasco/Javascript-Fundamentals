function suma(a,b) {
    return a + b;
}

describe('Probando grupo de funciones', () => {
    test('Que la suma de dos numeros sea diferente a 0', () => {
        expect(suma(3,10)).not.toBe(0);
    })
})

