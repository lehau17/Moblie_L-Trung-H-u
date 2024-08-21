function wait(seconds) {
  return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
}

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

async function loadNPause() {
  try {
    let img = await createImage("img/img-1.jpg");
    console.log("Image 1 loaded");
    await wait(2);
    img.style.display = "none";

    img = await createImage("img/img-2.jpg");
    console.log("Image 2 loaded");
    await wait(2);
    img.style.display = "none";
  } catch (err) {
    console.error(err.message);
  }
}

async function loadAll(imgArr) {
  try {
    const imgs = imgArr.map(async (imgPath) => await createImage(imgPath));

    const imgElements = await Promise.all(imgs);
    console.log(imgElements);

    imgElements.forEach((img) => img.classList.add("parallel"));
  } catch (err) {
    console.error(err.message);
  }
}

const imgArray = ["img/img-1.jpg", "img/img-2.jpg", "img/img-3.jpg"];
