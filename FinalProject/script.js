// Add this JavaScript code to your script.js file

// Modal Script
var modal = document.getElementById("myModal");
var modalTitle = document.getElementById("modalTitle");
var modalDescription = document.getElementById("modalDescription");
var modalBtns = document.querySelectorAll(".modalBtn");
var spans = document.getElementsByClassName("close");

modalBtns.forEach(function (btn) {
  btn.onclick = function () {
    modalTitle.textContent = btn.getAttribute("data-title");
    modalDescription.textContent = btn.getAttribute("data-description");
    modal.style.display = "block";
  };
});

for (var i = 0; i < spans.length; i++) {
  spans[i].onclick = function () {
    modal.style.display = "none";
  };
}

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

var accordionBtns = document.querySelectorAll(".accordion-btn");

accordionBtns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
});
