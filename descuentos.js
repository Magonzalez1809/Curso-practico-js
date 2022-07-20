//const precioOriginal = 100;
//const descuento = 15;

//const porcentajePrecioConDescuento = 100 - descuento;
//const precioConDescuento =
// (precioOriginal * porcentajePrecioConDescuento) / 100;

//console.log({
//  precioOriginal,
//  descuento,
//porcentajePrecioConDescuento,
//precioConDescuento,
//});

function calcularPrecioConDescuento(precio, descuento) {
  const porcentajePrecioConDescuento = 100 - descuento;
  const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
  return precioConDescuento;
}

const coupons = [
  { name: "MMGS", discount: 15 },
  { name: "MMG", discount: 30 },
  { name: "MM", discount: 25 },
];
//html
function onClickButtonPriceDiscount() {
  const inputprice = document.getElementById("inputPrice");
  const valuePrice = inputprice.value;
  const inputDiscount = document.getElementById("inputDiscount");
  const valueDiscount = inputDiscount.value;
  const precioDescuento = calcularPrecioConDescuento(valuePrice, valueDiscount);
  const responsep = document.getElementById("returnP");
  responsep.innerText = "El precio con descuento es:" + precioDescuento;
}

function onClickButtonPriceDiscountCoupon() {
  const inputprice = document.getElementById("inputPrice");
  const valuePrice = inputprice.value;
  const inputCupon = document.getElementById("inputCoupon");
  const valueCupon = inputCupon.value;

  const isvalueCuponValid = function (coupon) {
    return coupon.name === valueCupon;
  };

  const userCoupon = coupons.find(isvalueCuponValid);

  if (!userCoupon) {
    alert("El cupón " + valueCupon + "no es válido");
  } else {
    const descuento = userCoupon.discount;
    const precioDescuento = calcularPrecioConDescuento(valuePrice, descuento);
    const responsep = document.getElementById("returnP");
    responsep.innerText = "El precio con descuento es:" + precioDescuento;
  }

  // switch (valueCupon) {
  //   case coupons[0]:
  //     descuento = 15;
  //     break;
  //   case coupons[1]:
  //     descuento = 30;
  //     break;
  //   case coupons[2]:
  //     descuento = 25;
  //     break;
  // }
}
