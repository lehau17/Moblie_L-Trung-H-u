// Utility function to pause execution for a given number of seconds
function wait(seconds) {
  return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
}

// Part 1: Create the createImage function
function createImage(imgPath) {
  return new Promise((resolve, reject) => {
    const img = document.createElement("img");
    img.src = imgPath;

    img.addEventListener("load", () => {
      document.querySelector(".images").appendChild(img);
      resolve(img);
    });

    img.addEventListener("error", () => {
      reject(new Error("Image not found"));
    });
  });
}

// Part 2: Consume the promise and manage image transitions
let currentImage;

createImage("img/img-1.jpg")
  .then((img) => {
    currentImage = img;
    console.log("Image 1 loaded");
    return wait(0.1);
  })
  .then(() => {
    currentImage.style.display = "none";
    return createImage("img/img-2.jpg");
  })
  .then((img) => {
    currentImage = img;
    console.log("Image 2 loaded");
    return wait(0.1);
  })
  .then(() => {
    currentImage.style.display = "none";
  })
  .catch((err) => console.error(err.message));
