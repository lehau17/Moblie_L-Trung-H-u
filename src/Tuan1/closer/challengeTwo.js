(function () {
  const header = document.querySelector("h1");
  header.style.color = "red";

  // Event listener for body clicks
  document.body.addEventListener("click", function () {
    header.style.color = "blue";
  });
})();
