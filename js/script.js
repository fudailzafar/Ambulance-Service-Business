

const form = document.getElementById("form");
const nameInput = document.getElementById("Name");
const phoneInput = document.getElementById("Number");
const locationInput = document.getElementById("Location");
const messageInput = document.getElementById("Message");

form.addEventListener("submit", function (e) {
  e.preventDefault(); 
  if (validateForm()) {
    console.log("Form is valid. Submitting...");
    form.submit();
  }
});

function validateName() {
  const name = nameInput.value.trim();

  // Check for empty string
  if (name.length === 0) {
    nameInput.setCustomValidity("Name is required.");
    nameInput.reportValidity();
    return false;
  }

// Check for special characters
  const specialCharRegex = /[^A-Za-z\s]/;
  if (specialCharRegex.test(name)) {
    
    nameInput.setCustomValidity("Special characters and numbers are not allowed.");
    nameInput.reportValidity();
    return false;
  }

    // Check for full name with space
  const fullNameRegex = /^[A-Za-z]+ [A-Za-z]+$/i;
  if (!fullNameRegex.test(name)) {
    nameInput.setCustomValidity("Please enter your full name with a space (e.g., Rajesh Kumar).");
    nameInput.reportValidity();
    return false;
  }

  nameInput.setCustomValidity(""); 
  return true;
}

function validatePhone() {
  const phone = phoneInput.value.trim();
  

  // Phone number validation. can have +, ' ',0-9 and between 4-15 digits
  const phoneRegex = /^\+?(\d{4,15})$/
  if (phone.length === 0) {
    phoneInput.setCustomValidity("Phone number is required.");
  } else if (!phoneRegex.test(phone)) {
   
    phoneInput.setCustomValidity("Invalid phone number.");
  } else {
    
    phoneInput.setCustomValidity("");
  }
  phoneInput.reportValidity();
}

function validateLocation() {
  const location = locationInput.value.trim();


  // Location validation
  if (location.length === 0) {
    locationInput.setCustomValidity("Location is required.");
  } else {
    locationInput.setCustomValidity("");
  }
  locationInput.reportValidity();
}

function validateMessage() {
  const message = messageInput.value.trim();
  
  if (message.length === 0) {
    messageInput.setCustomValidity("Message is required.");
  } else {
    messageInput.setCustomValidity("");
  }
  messageInput.reportValidity();
}

function validateForm() {
  validateName();
  validatePhone();
  validateLocation();
  validateMessage();

  // Check if all inputs are valid
  return (
    nameInput.checkValidity() &&
    phoneInput.checkValidity() &&
    locationInput.checkValidity() &&
    messageInput.checkValidity()
  );
}