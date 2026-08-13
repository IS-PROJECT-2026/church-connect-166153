const menuToggle = document.querySelector("#menu-toggle");
const navMenu = document.querySelector("#nav-menu");

if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
        const isOpen = navMenu.classList.toggle("open");

        menuToggle.setAttribute(
            "aria-expanded",
            String(isOpen)
        );

        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Close navigation menu" : "Open navigation menu"
        );
    });

    navMenu.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("open");
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute(
                "aria-label",
                "Open navigation menu"
            );
        });
    });
}


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

if (prayerForm && prayerMessage) {
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
                "Invalid! Please enter a valid email address.";

            prayerMessage.className = "form-message error";

            return;
        }

        prayerMessage.textContent =
            "Thank you. Your prayer request has been received. God bless you!";

        prayerMessage.className = "form-message success";

        prayerForm.reset();
    });
}