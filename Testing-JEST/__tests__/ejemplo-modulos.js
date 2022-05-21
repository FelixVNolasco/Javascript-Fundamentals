import {suma} from "../js/funciones.js";

describe("Suma de dos numeros", () => {
    test("Validación de sumar 30 y 15", ()=> {
        expect(suma(30,15)).toBe(45);
    })
}) 