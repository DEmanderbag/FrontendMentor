const shareButton = document.querySelector(".article__share");
const shareOptions = document.querySelector(".share");
const shareClose = document.querySelector(".share--dark");

function shareSheet() {
  shareOptions.style.opacity = "1";
  shareOptions.style.zIndex = "10";
}

function shareSheetClose() {
  shareOptions.style.opacity = "0";
  shareOptions.style.zIndex = "-10";
}

shareButton.addEventListener("click", shareSheet);
shareClose.addEventListener("click", shareSheetClose);
