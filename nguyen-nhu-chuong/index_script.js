const openBtn = document.getElementById("menu-btn");
const closeBtn = document.getElementById("closeBtn");
const modal = document.getElementById("myModal");
const modalContent = document.getElementById("myContent");

openBtn.addEventListener("click", function() {
    modal.style.display = "block";
});

closeBtn.addEventListener("click", function() {
    modal.style.display = "none";
});

window.addEventListener("click", function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});
