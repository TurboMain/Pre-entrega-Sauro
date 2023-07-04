let usuario;
let contrasenia;
let gastoTotal = 0;
let seleccion = "";

for (let i = 1; i <= 5; i++) {
  usuario = prompt("Ingrese su nombre de Usuario");
  contrasenia = prompt("Ingrese su contraseña");
  if (usuario == "Cosme" && contrasenia == "1234") {
    alert("¡Hola " + usuario + "!. Bienvenido a Turbo-Stock");
    alert("A continuacion ingrese el código del producto.");
    break;
  } else {
    alert("Usuario o contraseña incorrecto");
  }
}

let producto = prompt(
  "Codigo del Producto:\n0859 - Aceite 15w40\n0860 - Aceite 10w50\n0861 - Lava Parabrisas Bardahl x4lts\n0862 - Lava Parabrisas Bardahl x1lts\n0863 - Bidon x 5lts\n0864 - Bidon x 20 lts\n0865 - Lubricante Multiuso Michelin\n0866 - Silicona FullCar 450cm3\nX - Para salir"
);

while (producto != "x") {
  switch (producto) {
    case "0859":
      alert("Aceite 15w40\nPrecio: $2500");
      listaProductos("Aceite 15w40\n");
      sumarProductos(2500);
      break;
    case "0860":
      alert("Aceite 10w50\nPrecio: $2650");
      listaProductos("Aceite 10w50\n");
      sumarProductos(2650);
      break;
    case "0861":
      alert("Lava Parabrisas Bardahl x4lts\nPrecio: $4300");
      listaProductos("Lava Parabrisas Bardahl x4lts\n");
      sumarProductos(4300);
      break;
    case "0862":
      alert("Lava Parabrisas Bardahl x1lts\nPrecio: $1800");
      listaProductos("Lava Parabrisas Bardahl x1lts\n");
      sumarProductos(1800);
      break;
    case "0863":
      alert("Bidon x 5lts\nPrecio: $350");
      listaProductos("Bidon x 5lts\n");
      sumarProductos(350);
      break;
    case "0864":
      alert("Bidon x 20 lts\nPrecio: $1500");
      listaProductos("Bidon x 20 lts\n");
      sumarProductos(1500);
      break;
    case "0865":
      alert("Lubricante Multiuso Michelin\nPrecio: $1240");
      listaProductos("Lubricante Multiuso Michelin\n");
      sumarProductos(1240);
      break;
    case "0866":
      alert("Silicona FullCar 450cm3\n\nPrecio: $1100");
      listaProductos("Silicona FullCar 450cm3\n");
      sumarProductos(1100);
      break;
    default:
      alert("Codigo Inexistente");
  }
  producto = prompt(
    "Codigo del Producto:\n0859 - Aceite 15w40\n0860 - Aceite 10w50\n0861 - Lava Parabrisas Bardahl x4lts\n0862 - Lava Parabrisas Bardahl x1lts\n0863 - Bidon x 5lts\n0864 - Bidon x 20 lts\n0865 - Lubricante Multiuso Michelin\n0866 - Silicona FullCar 450cm3\nX - Para salir"
  );
}
alert("PRODUCTOS SELECCIONADOS :\n" + seleccion + "\nTOTAL : $" + gastoTotal);

function listaProductos(productoSeleccionado) {
  seleccion = seleccion + productoSeleccionado;
}

function sumarProductos(precioProducto) {
  gastoTotal = gastoTotal + precioProducto;
  console.log("SubTotal de $ " + gastoTotal);
}
