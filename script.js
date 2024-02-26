// script.js
document.addEventListener("DOMContentLoaded", function () {
    const portfolioItems = document.querySelectorAll(".portfolio-item");

    portfolioItems.forEach(item => {
        item.addEventListener("click", function () {
            const modal = document.createElement("div");
            modal.classList.add("modal");
            modal.innerHTML = `
                <div class="modal-content">
                    <span class="close">&times;</span>
                    <img src="${item.querySelector("img").src}" alt="${item.querySelector("img").alt}">
                    <h3>${item.querySelector("h3").innerText}</h3>
                    <p>${item.querySelector("p").innerText}</p>
                </div>
            `;
            document.body.appendChild(modal);

            const closeButton = modal.querySelector(".close");
            closeButton.addEventListener("click", function () {
                modal.remove();
            });
        });
    });
});
