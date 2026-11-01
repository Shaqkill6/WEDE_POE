// Enquiry Form Validation
const cakeForm = document.getElementById('cakeForm');
if (cakeForm) {
    cakeForm.addEventListener('submit', function(event) {
        event.preventDefault(); 
        // Stops the page from reloading

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const date = document.getElementById('date').value;
        const messageBox = document.getElementById('formMessage');

        // Basic JavaScript validation
        if (name === "" || email === "" || date === "") {
            messageBox.style.color = "red";
            messageBox.innerHTML = "Please fill in all required fields.";
        } else {
            messageBox.style.color = "green";
            messageBox.innerHTML = "Thank you, " + name + "! Your cake enquiry for " + date + " has been sent.";
            cakeForm.reset(); // Clear the form
        }
    });
}
// General Enquiry Form Validation
const generalEnquiryForm = document.getElementById('generalEnquiryForm');
if (generalEnquiryForm) {
    generalEnquiryForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('g-name').value;
        const email = document.getElementById('g-email').value;
        const message = document.getElementById('g-message').value;
        const messageBox = document.getElementById('generalEnquiryMessage');

        if (name === "" || email === "" || message === "") {
            messageBox.style.color = "red";
            messageBox.innerHTML = "Please fill in all required fields.";
        } else {
            messageBox.style.color = "green";
            messageBox.innerHTML = "Thank you, " + name + "! Your general enquiry has been sent.";
            generalEnquiryForm.reset();
        }
    });
}

// Ensures Contact Form Validation
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('c-name').value;
        const email = document.getElementById('c-email').value;
        const message = document.getElementById('c-message').value;
        const messageBox = document.getElementById('contactMessage');

        if (name === "" || email === "" || message === "") {
            messageBox.style.color = "red";
            messageBox.innerHTML = "Please fill in all required fields.";
        } else {
            messageBox.style.color = "green";
            messageBox.innerHTML = "Message sent successfully! We will contact you soon.";
            contactForm.reset();
        }
    });
}

// PRODUCT SEARCH FILTER (Dynamic Content)

const searchInput = document.getElementById('searchInput');
if (searchInput) {
    searchInput.addEventListener('keyup', function() {
        const filterValue = searchInput.value.toLowerCase();
        const products = document.querySelectorAll('.product-grid li');

        products.forEach(function(product) {
            const text = product.textContent.toLowerCase();
            if (text.includes(filterValue)) {
                product.style.display = "block";
            } else {
                product.style.display = "none";
            }
        });
    });
}

// Image Lightbox / Modal Functionality
const lightboxImg = document.getElementById('lightboxImg');
const myModal = document.getElementById('myModal');
const closeModal = document.getElementById('closeModal');

if (lightboxImg && myModal) {
    // Open modal when image clicked
    lightboxImg.addEventListener('click', function() {
        myModal.style.display = "block";
    });

    // Close modal when X clicked
    closeModal.addEventListener('click', function() {
        myModal.style.display = "none";
    });

    // Close modal when clicking outside the image
    myModal.addEventListener('click', function(event) {
        if (event.target === myModal) {
            myModal.style.display = "none";
        }
    });
}

// Accodion Interactive Element
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}