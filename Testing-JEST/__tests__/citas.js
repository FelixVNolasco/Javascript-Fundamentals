import Citas from '../js/classes/Citas';

describe("Probando la clase de citas", ()=> {

    const citas = new Citas();
    const id  = Date.now();    
    test("Probando funcionalidad de agregar una nueva cita", ()=> {
        const citaObj = {
            id,
            mascota: 'Kira',
            propietario: 'Felix Vega',
            telefono: '5578136020',
            fecha: '15 de mayo',
            hora:'13:00',
            sintomas: 'baño'
        };        
        citas.agregarCita(citaObj);
        // expect(citas).toMatchSnapshot();

    });
    test('Probando funcionalidad de actualizar', () => {
        const citaActualizada = {
            id,
            mascota: 'Chatita',
            propietario: 'Felix Vega',
            telefono: '5578136020',
            fecha: '15 de mayo',
            hora:'13:00',
            sintomas: 'baño'
        };  
        citas.editarCita(citaActualizada)
        // expect(citas).toMatchSnapshot();        
    });
    test('Probando funcionalidad de eliminar', () => {
        citas.eliminarCita(id);  
        // expect(citas).toMatchSnapshot();
    })
    
    
})