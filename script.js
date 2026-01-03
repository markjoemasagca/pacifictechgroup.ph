// Simple parallax effect
window.addEventListener('scroll', () => {
  document.querySelectorAll('.parallax').forEach(layer => {
    layer.style.transform = `translateY(${window.scrollY * 0.15}px)`;
  });
});

// Timeline modal logic (basic)
document.querySelectorAll('.timeline-item').forEach(item => {
  item.addEventListener('click', () => {
    alert(
      `${item.dataset.title}\n${item.dataset.year}\nTheme: ${item.dataset.theme}`
    );
  });
});

// ===== Donation QR Code =====
document.addEventListener("DOMContentLoaded", () => {
  const donationURL = "https://your-donation-link-here.com";

  new QRCode(document.getElementById("donation-qr"), {
    text: donationURL,
    width: 220,
    height: 220,
    colorDark: "#159B7E",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H
  });
});

