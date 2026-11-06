const nameError = document.getElementById("name-error");
const nameInput = document.getElementById("nameInput");
const emailError = document.getElementById("email-error");
const emailInput = document.getElementById("emailInput");
const phoneError = document.getElementById("phone-error");
const phoneInput = document.getElementById("phoneInput");
const queryError = document.getElementById("query-error");
const querySelect = document.getElementById("queryTypeSelect");
const messageError = document.getElementById("message-error");
const messageInput = document.getElementById("messageInput");
const form = document.getElementById("form");
const successAlert = document.getElementById("success-alert");

// validation helper functions

//function for email validation
function isValidEmail(em) {
  var email = em.trim();
  if (email.length === 0 || email.length > 254) return false;

  // something@something.something, no spaces, one @
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// validate the input length
function isWithinRange(name, min, max) {
  return name.length >= min && name.length <= max;
}

// returns true if all characters of name are letters
function isOnlyLetters(name) {
  return /^[A-Za-z]+$/.test(name);
}

// phone number validation
function isValidIrishPhone(raw) {
  // 1. Only allow digits, spaces, dashes, dots, brackets and a leading +
  if (!/^\+?[\d\s().-]+$/.test(raw.trim())) return false;

  // 2. Strip formatting, convert 00353 to +353
  let num = raw.replace(/[^\d+]/g, "").replace(/^00/, "+");

  // 3. Must start with +353
  if (!num.startsWith("+353")) return false;

  // 4. Remove the country code and an optional "(0)" trunk digit
  let national = num.slice(4);
  if (national.startsWith("0")) national = national.slice(1);

  // 5. Mobile: 83, 85, 86, 87, 88, 89 + 7 digits
  const mobile = /^8[3-9]\d{7}$/;

  // 6. Landline: area code starting 1-7 or 9, 8-9 digits total
  const landline = /^[1-79]\d{7,8}$/;

  return mobile.test(national) || landline.test(national);
}

function isValidQuerySelection(query) {
  return query == "1" || query == "2" || query == "3" || query == "4";
}

// validating email

function validateEmail(val) {
  if (!isValidEmail(val)) {
    emailError.innerHTML = "please provide a valid email address";

    return false;
  } else {
    emailError.innerHTML = "";
    return true;
  }
}

// validating name
function validateName(val) {
  if (!isWithinRange(val, 2, 30)) {
    nameError.innerHTML = "your name must be between 2 and 30 characters long";
    return false;
  } else if (!isOnlyLetters(val)) {
    nameError.innerHTML = "your name must only contain letters";
    return false;
  } else {
    nameError.innerHTML = "";
    return true;
  }
}

// validating phone number

function validatePhoneNumber(num) {
  if (!isValidIrishPhone(num)) {
    phoneError.innerHTML = "please provide a valid Irish phone number";
    return false;
  } else {
    phoneError.innerHTML = "";
    return true;
  }
}

// validating message

function validateMessage(m) {
  if (!isWithinRange(m, 10, 2000)) {
    messageError.innerHTML =
      "the message must be between 10 and 2000 characters long";
    return false;
  } else {
    messageError.innerHTML = "";
    return true;
  }
}

// validating query type selection

function validateQuerySelect(query) {
  if (!isValidQuerySelection(query)) {
    queryError.innerHTML = "please select a Query type";
    return false;
  } else {
    queryError.innerHTML = "";
    return true;
  }
}

// displays alerts for 'timeout' seconds
function showAlert(alert, timeout) {
  alert.classList.remove("d-none");

  setTimeout(() => {
    alert.classList.add("d-none");
  }, timeout * 1000);
}

//  email validation
emailInput.addEventListener("change", function (e) {
  val = e.target.value;

  validateEmail(val);
});

// name validation
nameInput.addEventListener("change", function (e) {
  val = e.target.value;

  validateName(val);
});

// phone validation
phoneInput.addEventListener("change", function (e) {
  val = e.target.value;

  validatePhoneNumber(val);
});

// message validation
messageInput.addEventListener("change", function (e) {
  val = e.target.value;

  validateMessage(val);
});

// clear all fields after submission
function resetFields() {
  nameInput.value = "";
  emailInput.value = "";
  phoneInput.value = "";
  querySelect.value = "0";
  messageInput.value = "";
}

// called when the 'submit' button is clicked
form.addEventListener("submit", function (e) {
  // prevent page reload
  e.preventDefault();

  // getting validation status for all input fields
  var nameValid = validateName(nameInput.value);
  var emailValid = validateEmail(emailInput.value);
  var phoneValid = validatePhoneNumber(phoneInput.value);
  var messageValid = validateMessage(messageInput.value);
  var queryValid = validateQuerySelect(querySelect.value);

  // form will only be submitted if all input fields are valid
  if (nameValid && emailValid && phoneValid && messageValid && queryValid) {
    // show submission success alert for 5 seconds
    showAlert(successAlert, 5);

    // clear all fields after submission
    resetFields();
  }
});
