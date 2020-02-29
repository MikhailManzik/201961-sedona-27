var buttonPopup = document.querySelector(".button-popup");
var popup = document.querySelector(".search-hotel");

var form = popup.querySelector("form");
var dateCheckIn = popup.querySelector("[name=date-check-in]");
var dateCheckOut = popup.querySelector("[name=date-check-out]");

popup.classList.add("popup-close");

buttonPopup.addEventListener("click", function () {
  if (popup.classList.contains("popup-close")) {
  popup.classList.remove("popup-close");
  popup.classList.remove("popup-error");
  popup.classList.add("popup-show");
  } else {
    popup.classList.remove("popup-show");
    popup.classList.add("popup-close");
    }
});

form.addEventListener("submit", function (evt) {
  if (!dateCheckIn.value || !dateCheckOut.value) {
    evt.preventDefault();
    popup.classList.remove("popup-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("popup-error");
  }
});


