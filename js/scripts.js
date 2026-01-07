const navLinks = document.querySelectorAll(".navbar a");
const currentPage = window.location.pathname.split("/").pop();

navLinks.forEach(link => {
    const linkPage = link.getAttribute("href");

    if (linkPage === currentPage || 
        (currentPage === "" && linkPage === "index.html")) {
        link.classList.add("active");
    }
});

const contactLink = document.querySelector('a[href="#kontak"]');

if (contactLink) {
    contactLink.addEventListener("click", function (e) {
        e.preventDefault();

        const contactSection = document.getElementById("kontak");
        contactSection.scrollIntoView({ behavior: "smooth" });
    });
}

const form = document.querySelector("form");

if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = form.name.value.trim();
        const email = form.email.value.trim();
        const message = form.pesan.value.trim();

        if (!name || !email || !message) {
            alert("Semua field wajib diisi.");
            return;
        }

        alert("Terima kasih, pesan Anda sudah diterima.");

        form.reset();
    });
}
