let filterBlur = document.getElementById("blur");
let filterContrast = document.getElementById("contrast");
let filterHueRotate = document.getElementById("hue-rotate");
let filterSepia = document.getElementById("sepia");

let noFlipButton = document.getElementById("no-flip");
let flipXbButton = document.getElementById("flip-x");
let flipYButton = document.getElementById("flip-y");
let resetFilterButton = document.getElementById("reset-filter");

let uploadButton = document.getElementById("upload-button");
let image = document.getElementById("chosen-image");

uploadButton.onchange = () => {
  resetFilter();
  document.querySelector(".image-container").style.display = "block";
  let reader = new FileReader();
  reader.readAsDataURL(uploadButton.files[0]);
  reader.onload = () => {
    image.setAttribute("src", reader.result);
  };
};

let sliders = document.querySelectorAll(".filter input[type='range']");
sliders.forEach((slider) => {
  slider.addEventListener("input", addFilter);
});

let radioBtns = document.querySelectorAll(".flip-option input[type='radio']");
radioBtns.forEach((radioBtn) => {
  radioBtn.addEventListener("click", flipImage);
});

function addFilter() {
  image.style.filter = `blur(${filterBlur.value}px) contrast(${filterContrast.value}%) hue-rotate(${filterHueRotate.value}deg) sepia(${filterSepia.value}%)`;
}
function resetFilter() {
  filterBlur.value = "0";
  filterContrast.value = "100";
  filterHueRotate.value = "0";
  filterSepia.value = "0";
}
function flipImage() {
  if (flipXbButton.checked) {
    image.style.transform = "scaleX(-1)";
  } else if (flipYButton.checked) {
    image.style.transform = "scaleY(-1)";
  } else {
    image.style.transform = "scale(1,1)";
  }
}
