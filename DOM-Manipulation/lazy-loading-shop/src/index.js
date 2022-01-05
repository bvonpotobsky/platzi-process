import h from "hyperscript";
import { random } from "./utils/utils";
import { registerImage } from "./lazy";

const imagesContainer = document.querySelector(".images");
const addImageButton = document.querySelector("#addImage");

const createImageNode = (qty) => {
  // const container = document.createElement("div");
  // container.className = "p-4";
  const container = h("div.p-4");

  // const image = document.createElement("img");
  // image.className = "mx-auto";
  // image.width = "320";
  // image.dataset.src = `https://randomfox.ca/images/${random()}.jpg`;

  const image = h("img.mx-auto", {
    width: "320",
    "data-src": `https://randomfox.ca/images/${random()}.jpg`,
  });

  container.appendChild(image);

  return container;
};

const addImageToDOM = () => {
  const newImage = createImageNode();
  imagesContainer.append(newImage);
  registerImage(newImage);
};

addImageButton.addEventListener("click", addImageToDOM);
