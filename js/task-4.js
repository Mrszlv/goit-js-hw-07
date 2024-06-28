document.querySelector('.login-form').addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    document.querySelector('.login-form');
    const form = event.target;
    const email = form.elements.email.value.trim();
    const password = form.elements.password.value.trim();
    if (!email || !password) {
        alert("All form fields must be filled in");
        return;
    }
    const formValue = {
        email: email,
        password: password,
    };
    console.log(formValue);
    form.reset();
}

