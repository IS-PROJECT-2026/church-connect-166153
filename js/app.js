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