document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("surveyForm");
  const popup = document.getElementById("popup");
  const popupData = document.getElementById("popupData");
  const submitBtn = document.getElementById("submitBtn");
  const resetBtn = document.getElementById("resetBtn");
  const closePopup = document.getElementById("closePopup");

  function isValidAlphabeticInput(inputField) {
      const inputValue = inputField.value;
      const isAlphabetic = /^[a-zA-Z\s]*$/.test(inputValue);
      return isAlphabetic;
  }

  function isValidMobileNumber(inputField) {
      const inputValue = inputField.value;
      
      return /^\d{10}$/.test(inputValue);
  }

  function showErrorMessage(inputField, message) {
      alert(message);
      inputField.value = ""; 
  }

  function clearError() {
      const mobileError = document.getElementById("mobileError");
      mobileError.textContent = "";
  }

  submitBtn.addEventListener("click", function () {
      clearError(); 

      if (form.reportValidity()) {
          const firstNameField = document.getElementById("firstName");
          const lastNameField = document.getElementById("lastName");
          const mobileField = document.getElementById("mobile");

          if (!isValidAlphabeticInput(firstNameField)) {
              showErrorMessage(firstNameField, "First Name should contain only alphabetic characters.");
              return;
          }

          if (!isValidAlphabeticInput(lastNameField)) {
              showErrorMessage(lastNameField, "Last Name should contain only alphabetic characters.");
              return;
          }

          if (!isValidMobileNumber(mobileField)) {
              const mobileError = document.getElementById("mobileError");
              mobileError.textContent = "Mobile Number is not in a valid format.";
              return;
          }

         
          const firstName = firstNameField.value;
          const lastName = lastNameField.value;
          const dob = document.getElementById("dob").value;
          const country = document.getElementById("country").value;
          const gender = Array.from(document.querySelectorAll('input[name="gender"]:checked')).map(g => g.value).join(", ");
          const profession = document.getElementById("profession").value;
          const email = document.getElementById("email").value;
          const mobile = mobileField.value;

          
          popupData.innerHTML = `
              <p><strong>First Name:</strong> ${firstName}</p>
              <p><strong>Last Name:</strong> ${lastName}</p>
              <p><strong>Date of Birth:</strong> ${dob}</p>
              <p><strong>Country:</strong> ${country}</p>
              <p><strong>Gender:</strong> ${gender}</p>
              <p><strong>Profession:</strong> ${profession}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Mobile Number:</strong> ${mobile}</p>
          `;

          popup.style.display = "block";
      }
  });

  resetBtn.addEventListener("click", function () {
      form.reset();
      clearError(); // Clear any previous error messages
  });

  closePopup.addEventListener("click", function () {
      popup.style.display = "none";
  });

  window.addEventListener("click", function (event) {
      if (event.target === popup) {
          popup.style.display = "none";
      }
  });
});
