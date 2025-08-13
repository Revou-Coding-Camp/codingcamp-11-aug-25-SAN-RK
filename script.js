// Welcome message
const nameInput = prompt("Enter your name:");
if (nameInput) {
    document.getElementById("welcome-text").innerText = `Hi ${nameInput}, Welcome to Website`;
}

// Form validation
document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let message = document.getElementById("message").value.trim();

    if (!name || !email || !phone || !message) {
        alert("Please fill in all fields.");
        return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        alert("Invalid email format.");
        return;
    }

    if (!/^[0-9]{10,15}$/.test(phone)) {
        alert("Phone must be 10-15 digits.");
        return;
    }

    document.getElementById("formResult").innerHTML = `
        <h3>Form Submitted</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Message:</b> ${message}</p>
    `;
});