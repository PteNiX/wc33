//close modal window

const btnClose = document.querySelector(".btn-close");
const overlay = document.getElementById("overlay");
const modalResult = document.getElementById("modal-result-container");

const closeModal = () => {
  if (document.getElementById("btn-close").value === "p2n") {
    modalResult.style.display = "none";
  } else {
    document.getElementById("content").innerHTML =
      "<pre>wrong password,\ntry again </pre>";
  }
};

btnClose.addEventListener("click", closeModal);
