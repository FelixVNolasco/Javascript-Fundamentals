let mes = new Date().getMonth();

switch (mes) {
  case 3:
  mes = 'Abril'
    break;
  default:
  console.log('Mes no valido');
}
console.log(`Este es el mes ${mes}`);
