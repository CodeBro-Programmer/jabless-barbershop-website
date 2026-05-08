let navLinksSection = document.getElementById("nav-links");
let hamburger = document.getElementById("hamburger-btn");

hamburger.addEventListener('click',()=>{
   let opened = navLinksSection.classList.toggle("open");

   opened? hamburger.textContent = "✖": hamburger.textContent = "☰";
});




// Get elements (NOT values)
let nameInput = document.querySelector("#name");
let emailInput = document.querySelector("#email");
let phoneNumberInput = document.querySelector("#phone");
let serviceInput = document.querySelector("#service");
let messageInput = document.querySelector("#message");

let bookForm = document.querySelector("#bookingForm");

bookForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get values at the moment user submits
   let text = `*Welcome To Jabless Salon Booking*

*Customer Details*
====================
*Name:* ${nameInput.value}
*Email:* ${emailInput.value}
*Phone Number:* ${phoneNumberInput.value}

====================
*Service:* ${serviceInput.value}

====================
*Message:*
${messageInput.value}
====================

*Please let me know a convenient time.*`;

    let url = `https://wa.me/2348136308576?text=${encodeURIComponent(text)}`;

    // Show user feedback BEFORE redirect
    alert("Redirecting to WhatsApp... Please press SEND to complete your booking.");

    window.open(url, "_blank");
});