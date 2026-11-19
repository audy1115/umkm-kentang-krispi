
document.addEventListener("DOMContentLoaded", function () {

    // MENU NAVIGASI HP
    const menuToggle = document.getElementById("menuToggle");
    const navMenu = document.getElementById("navMenu");

    if (menuToggle && navMenu) {
        menuToggle.addEventListener("click", function () {
            navMenu.classList.toggle("active");

            const menuTerbuka = navMenu.classList.contains("active");

            menuToggle.textContent = menuTerbuka ? "✕" : "☰";
            menuToggle.setAttribute(
                "aria-label",
                menuTerbuka ? "Tutup menu" : "Buka menu"
            );
        });
    }

    // TUTUP MENU SETELAH LINK DIKLIK
    const navLinks = document.querySelectorAll(".nav-menu a");

    navLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            if (navMenu && menuToggle) {
                navMenu.classList.remove("active");
                menuToggle.textContent = "☰";
                menuToggle.setAttribute("aria-label", "Buka menu");
            }
        });
    });

    // TAHUN FOOTER OTOMATIS
    const copyright = document.querySelector(".copyright p");

    if (copyright) {
        copyright.textContent =
            "© " + new Date().getFullYear() +
            " KentangKrispi. Semua Hak Dilindungi.";
    }

    // ANIMASI SEDERHANA KARTU PRODUK
    const productCards = document.querySelectorAll(".product-card");

    productCards.forEach(function (card) {
        card.addEventListener("mouseenter", function () {
            card.classList.add("card-active");
        });

        card.addEventListener("mouseleave", function () {
            card.classList.remove("card-active");
        });
    });

    console.log("Website KentangKrispi berhasil dijalankan!");

});
