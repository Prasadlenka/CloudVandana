document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("survey-form");
  const popup = document.getElementById("popup");
  const popupContent = document.getElementById("popup-content");
  const closePopup = document.getElementById("close-popup");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    
    if (validateForm()) {
     
      const firstName = document.getElementById("first-name").value;
      const lastName = document.getElementById("last-name").value;
      const dob = document.getElementById("dob").value;
      const country = document.getElementById("country").value;
      const genderMale = document.getElementById("male").checked;
      const genderFemale = document.getElementById("female").checked;
      const profession = document.getElementById("profession").value;
      const email = document.getElementById("email").value;
      const mobile = document.getElementById("mobile").value;

      
      popupContent.innerHTML = `
        <p><strong>First Name:</strong> ${firstName}</p>
        <p><strong>Last Name:</strong> ${lastName}</p>
        <p><strong>Date of Birth:</strong> ${dob}</p>
        <p><strong>Country:</strong> ${country}</p>
        <p><strong>Gender:</strong> ${genderMale ? "Male" : ""} ${
        genderFemale ? "Female" : ""
      }</p>
        <p><strong>Profession:</strong> ${profession}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mobile Number:</strong> ${mobile}</p>
      `;

      
      popup.style.display = "block";

      
      form.reset();
    }
  });

  
  document.getElementById("reset-button").addEventListener("click", function () {
    form.reset();
  });

  function validateForm() {
   
    return true;
  }
});
