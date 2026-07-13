//Select elements
const headlineInput = document.getElementById("headlineInput");
const updateBtn = document.getElementById("updateBtn");
const ctaHeadline = document.getElementbyId ("ctaHeadline");

//Event listener
updateBtn.addEventListener("click",function () {
    const newHeadline = headlineInput.value;

    if (newHeadline.trim() !== "") {
        ctaHeadline.textContect = newHeadline;
    }
});
