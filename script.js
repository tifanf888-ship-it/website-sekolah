// ================================
// MENU MOBILE
// ================================

const menuButton = document.getElementById("menuButton");
const navMenu = document.getElementById("navMenu");

if (menuButton && navMenu) {
    menuButton.addEventListener("click", function () {
        navMenu.classList.toggle("active");
    });
}


// ================================
// TUTUP MENU SETELAH LINK DIKLIK
// ================================

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        if (navMenu) {
            navMenu.classList.remove("active");
        }
    });
});


// ================================
// TOMBOL KEMBALI KE ATAS
// ================================

const backToTop = document.getElementById("backToTop");

if (backToTop) {
    window.addEventListener("scroll", function () {
        backToTop.style.display = window.scrollY > 300 ? "block" : "none";
    });

    backToTop.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}


// ================================
// FORM KONTAK
// ================================

const contactForm = document.getElementById("contactForm");

if (contactForm) {
    const namaInput = document.getElementById("nama");

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const nama = namaInput ? namaInput.value : "Pengunjung";

        alert(
            "Terima kasih, " +
            nama +
            "! Pesan Anda berhasil dikirim."
        );

        contactForm.reset();
    });
}

// =============================
// NOTIFIKASI AWAL WEBSITE
// =============================

document.addEventListener("DOMContentLoaded", function () {
    const welcomePopup = document.getElementById("welcomePopup");
    const understandButton = document.getElementById("understandButton");

    if (welcomePopup && understandButton) {
        understandButton.addEventListener("click", function () {
            welcomePopup.classList.add("hide");
        });
    }
});
