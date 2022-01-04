const url = "https://platzi-avo.vercel.app/api/avo";

const appNode = document.getElementById("app");

(async function fetchData() {
  try {
    const response = await window.fetch(url);
    const data = await response.json();
    const items = data.data;

    const itemsWithData = [];

    items.forEach((item) => {
      const image = document.createElement("img");
      image.src = `https://platzi-avo.vercel.app${item.image}`;

      const title = document.createElement("h2");
      title.textContent = item.name;

      const price = document.createElement("div");
      price.textContent = `$${item.price}`;

      const container = document.createElement("div");
      container.append(image, title, price);
      itemsWithData.push(container);

      appNode.append(...itemsWithData);
    });
  } catch (err) {
    console.error(err);
  }
})();
