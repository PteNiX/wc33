//close modal window

/* const btnClose = document.querySelector(".btn-close");
const modalResult = document.getElementById("modal-result-container");

const closeModal = () => {
  if (document.getElementById("btn-close").value === "p2n") {
    modalResult.style.display = "none";
  } else {
    document.getElementById("content").innerHTML =
      "<pre>wrong password,\ntry again </pre>";
  }
};

btnClose.addEventListener("click", closeModal); */

//////////////Background //////////////////

const back = document.querySelector(".main-page");

const img1 = (back.style.background =
  "url('/wc33/assets/img/background4.jpg') no-repeat center ");
const img2 = (back.style.background =
  "url('/wc33/assets/img/background2.jpg') no-repeat center ");
const img3 = (back.style.background =
  "url('/wc33/assets/img/background3.jpg') no-repeat center ");
const img4 = (back.style.background =
  "url('/wc33/assets/img/background1.jpg') no-repeat center ");

let i = 0;
function change() {
  var images = [img1, img2, img3, img4];
  back.style.background = images[i];
  i = (i + 1) % images.length;
  back.style.backgroundSize = "cover";
}

setInterval(change, 12000);

change();
