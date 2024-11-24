const inputFields = document.querySelectorAll('#name, #email, #subject, #message');
const submitButton = document.getElementById('submit');

function checkFields() {
  let allFilled = true; 

  inputFields.forEach(field => {
    if (field.value.trim() === '') {
      allFilled = false;  
    }
  });

  if (allFilled) {
    submitButton.removeAttribute('disabled');
    submitButton.classList.remove('bg-gray-800', 'text-gray-400', 'cursor-not-allowed');
    submitButton.classList.add('bg-gray-300', 'text-black', 'cursor-pointer'); 
  } else {
    submitButton.setAttribute('disabled', 'true');
    submitButton.classList.remove('bg-gray-300', 'text-black', 'cursor-pointer');
    submitButton.classList.add('bg-gray-800', 'text-gray-400', 'cursor-not-allowed');  
  }
}

inputFields.forEach(field => {
  field.addEventListener('input', checkFields);  
});

submitButton.addEventListener('click', function(event) {
    event.preventDefault();

    submitButton.removeAttribute('disabled');
    submitButton.classList.add('hidden');
    document.getElementById('loading').classList.remove('hidden');

    setTimeout(() => {
      document.getElementById('loading').classList.add('hidden');
      document.getElementById('confirmation-message').classList.remove('hidden');

      document.getElementById('name').value = "";
      document.getElementById('email').value = "";
      document.getElementById('subject').value = "";
      document.getElementById('message').value = "";

      setTimeout(() => {
        document.getElementById('confirmation-message').classList.add('hidden');
        submitButton.classList.remove('hidden');

        submitButton.setAttribute('disabled', 'true');
        submitButton.style.cursor = 'not-allowed';
        submitButton.classList.remove('bg-gray-300', 'text-black', 'cursor-pointer');
        submitButton.classList.add('bg-gray-800', 'text-gray-400', 'cursor-not-allowed');
      }, 3000);
    }, 2000);
});

// Initial check when page loads to handle pre-filled values
checkFields();
