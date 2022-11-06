const images = [
  "robert downey jr.jpeg",
  "chris evans.jpeg",
  "chris hemsworth.jpeg",
  "mark ruffalo.jpeg",
  "scarlett johansson.jpeg",
  "jeremy renner.jpeg",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);
