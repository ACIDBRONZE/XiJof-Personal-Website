document.getElementById('submit').addEventListener('click', function(event) {
    event.preventDefault();
    let valid = true; 

    if (valid) {n
        document.getElementById('submit').classList.add('hidden');
        document.getElementById('loading').classList.remove('hidden');

        setTimeout(() => {
            document.getElementById('loading').classList.add('hidden');
            document.getElementById('confirmation-message').classList.remove('hidden');

            document.getElementById('name').value = "";
            document.getElementById('email').value = "";
            document.getElementById('phone').value = "";
            document.getElementById('message').value = "";

            setTimeout(() => {
                document.getElementById('confirmation-message').classList.add('hidden');
                document.getElementById('submit').classList.remove('hidden');
            }, 3000);
        }, 2000);
    }
});
