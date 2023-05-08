
const modal = document.getElementById('email-modal');
const thankyou = document.getElementById('thankyou-modal');
const openBtn = document.querySelector('.btn-get-started');
const anotherOpenBtn = document.getElementById('popup-button'); //popup-button
const closeBtn = document.querySelector('.close-btn');
const progressbar = document.querySelector('.animation');
const modalForm = document.querySelector('.modal-form');
const tycloseBtn = document.querySelector('.thankyouclose-btn');
const hasPopupDisplayed = localStorage.getItem('popupDisplayed');
var emailInput = document.getElementsByName("email")[0];

//when the user submit the form, send email
// form.onsubmit = function(event) {
  
//   event.preventDefault();
//   var email = emailInput.value;
//   progressbar.style.display = 'flex';
//   modalForm.style.display = 'none';
//   // Send the email
//   var xhr = new XMLHttpRequest();
//   xhr.open("POST", "forms/modal.php", true);
//   xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
//   xhr.onreadystatechange = function() {
//     if (xhr.readyState === XMLHttpRequest.DONE) {
//       if (xhr.status === 200) {
//         // Show the success message
//         modal.style.display = 'none';
//         thankyou.style.display = 'block';
//         progressbar.style.display = 'none';
//         modalForm.style.display = 'block';
//       } else {
//         alert('Internal Error');
//       }
//     }
//   };
//   xhr.send("email=" + email);
// }
form.onsubmit = function(event) {
  event.preventDefault();
  var email = emailInput.value;
  progressbar.style.display = 'flex';
  modalForm.style.display = 'none';

  // Send the email
  fetch('forms/modal.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: 'email=' + email
  })
  .then(function(response) {
    if (response.ok) {
      // Show the success message
      modal.style.display = 'none';
      thankyou.style.display = 'block';
      progressbar.style.display = 'none';
      modalForm.style.display = 'block';
    } else {
      alert('Internal Error');
    }
  })
  .catch(function(error) {
    console.log('Error:', error);
    alert('Network Error');
  });
}


//click events

openBtn.addEventListener('click', () => {
  modal.style.display = 'block';
  
});
anotherOpenBtn.addEventListener('click', () => {
  modal.style.display = 'block';
  
});
closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
  resetForm();
});
tycloseBtn.addEventListener('click', () => {
  thankyou.style.display = 'none';
  resetForm();
  
});
window.addEventListener('click',(e) => {
  if(e.target === modal){
    modal.style.display='none';
    resetForm();
  }

});
window.addEventListener('click',(e) => {
  if(e.target === thankyou){
    thankyou.style.display = 'none';
    resetForm();
  }

});


if (!hasPopupDisplayed) {
  // Wait for 10 seconds before displaying the popup
  setTimeout(function() {
    modal.style.display = 'block';
    
    // Set the flag in localStorage to indicate that the popup has been displayed
    localStorage.setItem('popupDisplayed', 'true');
  }, 5000);
}


//function to reset the form
function resetForm(){
  form.reset();
}
