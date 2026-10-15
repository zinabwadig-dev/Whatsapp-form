// Write your code here. Follow Parts 1 to 5 from the exercise.
const form=document.getElementById('booking-form');

const name=document.getElementById('name');
const email=document.getElementById('email');
const phone=document.getElementById('phone');
const service=document.getElementById('service');
const message=document.getElementById('message');
const success_message=document.getElementById('success-message');

const whatsapplink=document.getElementById("whatsapp-link");
const businessNumber = "212775943680";

const name_error=document.querySelector('#name-error');
const email_error=document.querySelector('#email-error');
const phone_error=document.querySelector('#phone-error');
const service_error=document.getElementById('service-error');
const message_error=document.querySelector('#message-error');


function clearForm() {
  name.value = "";
  email.value = "";
    phone.value = "";
  service.value = "";
    message.value = "";
}

form.addEventListener("submit",(e)=>{
    e.preventDefault();

    success_message.textContent = "";
whatsapplink.style.display = "none";

     name_error.textContent = "";
  email_error.textContent = "";
  phone_error.textContent = "";
  service_error.textContent = "";
  message_error.textContent = "";


        const  nameValue=name.value;
        const emailValue=email.value;
        const phoneValue=phone.value;
        const  serviceValue=service.value;
        const  messageValue=message.value;
    let isValid=true;

    //validation Name
    if (nameValue.trim() === "") {
    name_error.textContent = "Name is required";
    isValid = false;
    }
    //validation email
    if (!emailValue.includes("@")){
    email_error.textContent = "Email must contain @";
    isValid = false;
}
     //validation phone
     if (phoneValue.length < 9) {
    phone_error.textContent = "Phone must be at least 9 characters";
    isValid = false;
}
    //validation service
    if (serviceValue === "") {
    service_error.textContent = "Please choose a service";
    isValid = false;
}
    //validation message
    if (messageValue.trim().slice(0, 10).length < 10) {
    message_error.textContent = "Message must be at least 10 characters";
    isValid = false;
}

// Validation correct
if (isValid) {
    const bookingMessage = `Booking request
Name: ${nameValue}
Phone: ${phoneValue}
Service: ${serviceValue}
Message: ${messageValue}`;

    const encodedMessage = encodeURIComponent(bookingMessage);

    whatsapplink.href =
        `https://wa.me/${businessNumber}?text=${encodedMessage}`;

    whatsapplink.textContent = "Send booking via WhatsApp";
    whatsapplink.style.display = "inline-block";

    success_message.textContent =
        "Booking details are valid. Click WhatsApp to send your request.";

    localStorage.removeItem("bookingDraft");
    clearForm();
}
}

)
