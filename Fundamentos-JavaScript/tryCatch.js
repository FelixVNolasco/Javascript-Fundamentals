try {
  algo();
} catch (error) {
  console.log(error);
} finally {
  console.log("Sigue Ejecutando el programa");
}

consultaLista();
function consultaLista()
{
console.log("Consultando lista..");

setTimeOut(function()
  {
    console.log("Listo")
  }, 3000);
}
