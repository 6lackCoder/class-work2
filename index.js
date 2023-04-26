document.title = 'SHOW PASSWORD';

const password = document.getElementById('password')

const togglePassword = () => {
    if (password.type === "password") {
        password.type = "text"
        document.getElementById('show').textContent = 'Hide'

    } else {
        password.type = "password"
        document.getElementById('show').textContent = 'Show'
    }
}