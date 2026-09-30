// ================================
// MENU MOBILE
// ================================

const menuButton = document.getElementById("menuButton");
const navMenu = document.getElementById("navMenu");

menuButton.addEventListener("click", function () {
    navMenu.classList.toggle("active");
});


// ================================
// TUTUP MENU SETELAH LINK DIKLIK
// ================================

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {
        navMenu.classList.remove("active");
    });

});


// ================================
// TOMBOL KEMBALI KE ATAS
// ================================

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", function () {

    if (window.scrollY > 300) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }

});

backToTop.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// ================================
// FORM KONTAK
// ================================

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const nama = document.getElementById("nama").value;

    alert(
        "Terima kasih, " +
        nama +
        "! Pesan Anda berhasil dikirim."
    );

    contactForm.reset();

});
// ================================
// POPUP INFORMASI WEBSITE
// ================================

const welcomePopup = document.getElementById("welcomePopup");
const understandButton = document.getElementById("understandButton");

understandButton.addEventListener("click", function () {

    welcomePopup.classList.add("hide");

});
