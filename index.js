document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const formData = new FormData(this);

    fetch('YOUR_BACKEND_API_URL', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        alert("Form submitted successfully!");
        console.log(data);
    })
    .catch(error => {
        alert("There was an error submitting the form.");
        console.error('Error:', error);
    });
});
