var buttonPopup = document.querySelector(".button-popup");
var popup = document.querySelector(".search-hotel");

buttonPopup.addEventListener("click", function () {
  if (popup.classList.contains("popup-close")) {
  popup.classList.remove("popup-close");
  popup.classList.add("popup-show");
  } else {
    popup.classList.remove("popup-show");
    popup.classList.add("popup-close");
    }
});


