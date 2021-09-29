const products = [
  { title: "Pizza", price: 121, id: "🍕" },
  { title: "Burger", price: 100, id: "🍔" },
  { title: "Hot cakes", price: 49, id: "🥞" },
];

const myProducts = [];

const productIndex = products.findIndex((item) => item.id === "🍔");

if (productIndex !== -1) {
  myProducts.push(products[productIndex]);
  products.splice(productIndex, 1);
}
// MUTABLE
console.log("MUTABLE:");
console.log("Products:", products);
console.log("My products:", myProducts);
console.log("-".repeat(10));

// INMUTABLE
const productsV2 = [
  { title: "Pizza", price: 121, id: "🍕" },
  { title: "Burger", price: 100, id: "🍔" },
  { title: "Hot cakes", price: 49, id: "🥞" },
];

console.log("INMUTABLE:");
const myProductsV2 = [];
const productIndexV2 = productsV2.findIndex((item) => item.id === "🍔");
myProductsV2.push(productsV2[productIndexV2]);
console.log("myProductsV2:", myProductsV2);
console.log("productsV2:", productsV2);

// Update MUTABLE
const productsV3 = [
  { title: "Pizza", price: 121, id: "🍕" },
  { title: "Burger", price: 100, id: "🍔" },
  { title: "Hot cakes", price: 49, id: "🥞" },
];

const update = {
  id: "🥞",
  changes: {
    price: 200,
    description: "delicius",
  },
};

console.log("-".repeat(10));
const productIndexV3 = productsV3.findIndex((item) => item.id === update.id);
productsV3[productIndexV3] = {
  ...productsV3[productIndexV3],
  ...update.changes,
};
console.log("productsV3:", productsV3);

// Update INMUTABLE
console.log("-".repeat(10));
const productsV4 = [
  { title: "Pizza", price: 121, id: "🍕" },
  { title: "Burger", price: 100, id: "🍔" },
  { title: "Hot cakes", price: 49, id: "🥞" },
];

const updateV2 = {
  id: "🥞",
  changes: {
    price: 200,
    description: "delicius",
  },
};

const productIndexV4 = productsV4.findIndex((item) => item.id === update.id);
console.log("productsV4:", productsV4);

let productsV4updated = [...productsV4];

productsV4updated[productIndexV4] = {
  ...productsV4updated[productIndexV4],
  ...updateV2.changes,
};
console.log("productsV4updated:", productsV4updated);
