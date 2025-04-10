document.addEventListener("DOMContentLoaded", function () {
    const reviews = document.querySelectorAll(".review");
    const reviewContainer = document.getElementById("reviews");
    const addReviewBtn = document.getElementById("add-review-btn");
    const reviewForm = document.getElementById("review-form");
    const closeFormBtn = document.getElementById("close-form");
    const submitReviewBtn = document.getElementById("submit-review");
    const nameInput = document.getElementById("name");
    const messageInput = document.getElementById("message");

    function revealReviews() {
        reviews.forEach((review) => {
            const rect = review.getBoundingClientRect();
            if (rect.top < window.innerHeight - 50) {
                review.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", revealReviews);
    revealReviews();

    addReviewBtn.addEventListener("click", () => {
        reviewForm.classList.remove("hidden");
    });

    closeFormBtn.addEventListener("click", () => {
        reviewForm.classList.add("hidden");
    });

    submitReviewBtn.addEventListener("click", () => {
        const name = nameInput.value.trim();
        const message = messageInput.value.trim();

        if (name === "" || message === "") {
            alert("Пожалуйста, заполните все поля!");
            return;
        }

        const newReview = document.createElement("div");
        newReview.classList.add("review", "visible");

        const avatar = document.createElement("img");
        avatar.src = "avatars/default.jpg";
        avatar.alt = "Аватар";

        const textDiv = document.createElement("div");
        const textP = document.createElement("p");
        textP.textContent = message;
        const nameH3 = document.createElement("h3");
        nameH3.textContent = name;

        textDiv.appendChild(textP);
        textDiv.appendChild(nameH3);
        newReview.appendChild(avatar);
        newReview.appendChild(textDiv);
        reviewContainer.appendChild(newReview);

        nameInput.value = "";
        messageInput.value = "";
        reviewForm.classList.add("hidden");
    });
});