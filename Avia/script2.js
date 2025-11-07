document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('Name_output').value = localStorage.getItem("Name_input")
    document.getElementById('LastName_output').value = localStorage.getItem("LastName_input")
    document.getElementById('Date_output').value = localStorage.getItem("Date_input")
    document.getElementById('Passport_output').value = localStorage.getItem("Passport_input")
})