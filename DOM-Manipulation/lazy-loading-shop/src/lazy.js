const isIntersecting = (entry) => {
  return entry.isIntersecting; // true (dentro de la pantalla)
};

const loadImage = (entry) => {
  const container = entry.target;

  const image = container.firstChild;
  const url = image.dataset.src;
  // Load the image by adding src
  image.src = url;

  observer.unobserve(container);
};

const observer = new IntersectionObserver((entries) => {
  entries.filter(isIntersecting).forEach(loadImage);
});

export const registerImage = (image) => {
  observer.observe(image);
};
