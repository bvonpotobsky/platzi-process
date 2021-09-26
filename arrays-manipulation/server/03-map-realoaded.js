const orders = [
  {
    customerName: "Nicolas",
    total: 60,
    delivered: true,
  },
  {
    customerName: "Zulema",
    total: 120,
    delivered: false,
  },
  {
    customerName: "Santiago",
    total: 180,
    delivered: true,
  },
  {
    customerName: "Valentina",
    total: 240,
    delivered: true,
  },
];

console.log("Orders:", orders);
const getTotals = orders.map((item) => item.total);
console.log("Totals:", getTotals);

// La forma de abajo, copia la referencia en momoria del elemento, por ende cambia el array inicial
// const ordersWithTax = orders.map((item) => {
//   item.tax = 0.19;
//   return item;
// });
// console.log("WITH TAX:", ordersWithTax);

// De esta forma, no modificamos el array incial
const ordersWithTax2 = orders.map((item) => {
  return {
    ...item,
    tax: 0.19,
  };
});

console.log("With TAX:", ordersWithTax2);
console.log("Orders:", orders);
