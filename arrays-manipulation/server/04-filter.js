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

// const deliveredOrders = orders.filter((order) => order.delivered === true);
const deliveredOrders = orders.filter(
  (order) => order.delivered && order.total >= 100
);
// console.log(deliveredOrders);

const search = (query) => {
  return orders.filter((item) => {
    return item.customerName.includes(query);
  });
};

console.log(search("Nico"));

const words = ["spray", "lime", "elite", "exuberant"];
const newArray = [];
for (let i = 0; i < words.length; i++) {
  const item = words[i];

  if (item.length >= 5) {
    newArray.push(item);
  }
}
const wordsLongerThan4 = words.filter((word) => word.length >= 5);
