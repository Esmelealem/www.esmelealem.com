function generateId(length) {
  const chars = "abcdefghijklmnopqrstuvwxyz0123456789";
  let id = "";
  for (let i = 0; i < length; i++) {
    id += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return id;
}

const submitBtn = document.querySelector("#submit");

submitBtn.addEventListener("click", (e) => {
  // e.preventDefault();

  const name = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;
  const subject = document.querySelector("#subject").value;
  const message = document.querySelector("#message").value;

  const id = generateId(10); // Generate a random ID with length 10

  const formData = { id, name, email, subject, message };

  fetch("https://u7fz641348.execute-api.us-east-1.amazonaws.com/prod/form", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
});

// // new
// const form = document.querySelector("#contact-form");
// const nameInput = document.querySelector("#name");
// const emailInput = document.querySelector("#email");
// const subjectInput = document.querySelector("#subject");
// const messageInput = document.querySelector("#message");

// form.addEventListener("submit", async (event) => {
//   // event.preventDefault();
//   console.log("sadf");
//   let isValid = true;

//   nameErrorDiv.textContent = "";
//   emailErrorDiv.textContent = "";
//   subjectErrorDiv.textContent = "";
//   messageErrorDiv.textContent = "";
//   formErrorDiv.textContent = "";

//   if (!nameInput.value) {
//     nameErrorDiv.textContent = "Please enter your name";
//     isValid = false;
//   }

//   if (!emailInput.value) {
//     emailErrorDiv.textContent = "Please enter your email";
//     isValid = false;
//   } else if (!emailInput.checkValidity()) {
//     emailErrorDiv.textContent = "Please enter a valid email address";
//     isValid = false;
//   }

//   if (!subjectInput.value) {
//     subjectErrorDiv.textContent = "Please enter a subject";
//     i;
//     sValid = false;
//   }
// });
