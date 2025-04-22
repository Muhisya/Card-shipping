let priceElem = document.getElementById('price');
let subTotalElem = document.getElementById('subTotal');
let shippingElem = document.getElementById('shipping');
let discountElem = document.getElementById('discount')
let totalElem = document.getElementById('total');
let quantityElem = document.getElementById('quantity');
let textVoucherElem = document.getElementById('textVoucher')
let codeVoucherElem = document.getElementById('codeVoucher')

subTotalElem.innerHTML = priceElem.innerHTML;

function totalAll(subTotal, shipping = 0, discount = 0) {
  return Number(subTotal) + Number(shipping) - Number(discount)
}

totalElem.innerHTML = totalAll(subTotalElem.innerHTML, shippingElem.innerHTML, discountElem.innerHTML)

// console.log(totalAll(10000, 2000, 5000));

let plus = (num) => {
  let number = parseFloat(quantityElem.value);
  number += num;
  quantityElem.value = number;

  let hasil = number * priceElem.innerHTML;
  subTotalElem.innerHTML = hasil;

  let total = totalAll(subTotalElem.innerHTML, shippingElem.innerHTML, discountElem.innerHTML);
  totalElem.innerHTML = total
}
let minus = (num) => {
  let number = parseFloat(quantityElem.value);
  number -= num;
  quantityElem.value = number;

  let hasil = number * priceElem.innerHTML;
  subTotalElem.innerHTML = hasil;
}

function buttonVoucher() {
  let inputVoucher = codeVoucherElem.value;
  console.log(inputVoucher);
  if(inputVoucher === "abudzar") {
    textVoucherElem.innerHTML = "Voucher 20% berHasil "
    textVoucherElem.classList.remove("applied","reject");
    textVoucherElem.classList.add('success');

    discountElem.innerHTML = 5000;
  } else if(inputVoucher === "amongus") {
    discountElem.innerHTML = 10000;
  } else {
    textVoucherElem.innerHTML = "Gagal menggunakan voucher"
    textVoucherElem.classList.remove("applied");
    textVoucherElem.classList.add('reject');
    discountElem.innerHTML = 0;
  }
}




