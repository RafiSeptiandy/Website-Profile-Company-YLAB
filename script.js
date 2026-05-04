const contactForm = document.getElementById("contactForm");
const result = document.getElementById("result");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
      result.textContent = "Semua field harus diisi.";
      result.className = "font-medium text-red-600";
    } else {
      result.textContent = "Pesan berhasil dikirim.";
      result.className = "font-medium text-green-600";
      contactForm.reset();
    }
  });
}