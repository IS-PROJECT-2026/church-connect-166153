const filterButtons = document.querySelectorAll(".filter-button");
const eventCards = document.querySelectorAll(".event-card");

filterButtons.forEach((button) => {
    button.addEventListener("click", () => {

        const selectedFilter = button.dataset.filter;

        filterButtons.forEach((btn) => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        eventCards.forEach((card) => {

            const category = card.dataset.category;

            if (
                selectedFilter === "all" ||
                category === selectedFilter
            ) {
                card.style.display = "flex";
            } else {
                card.style.display = "none";
            }

        });

    });
});

const prayerForm = document.querySelector("#prayer-form");
const prayerMessage = document.querySelector("#prayer-message");

prayerForm.addEventListener("submit", (event) => {

    event.preventDefault();

    const name = document.querySelector("#prayer-name").value.trim();
    const email = document.querySelector("#prayer-email").value.trim();
    const request = document.querySelector("#prayer-request").value.trim();

    if (!name || !email || !request) {
    prayerMessage.textContent =
        "Please complete all fields before submitting.";

    prayerMessage.className = "form-message error";

    return;
}

    if (!email.includes("@")) {
        prayerMessage.textContent =
            "Please enter a valid email address.";

        prayerMessage.className = "form-message error";

        return;
    }

    prayerMessage.textContent =
        "Thank you. Your prayer request has been received.";

    prayerMessage.className = "form-message success";

    prayerForm.reset();
});