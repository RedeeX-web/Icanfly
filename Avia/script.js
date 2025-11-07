Confirm = document.getElementById('Confirm_Booking_Button').addEventListener('click', () => {
    const Name_input = document.getElementById('Name_input').value;
    const LastName_input = document.getElementById('LastName_input').value;
    const Date_input = document.getElementById('Date_input').value;
    const Passport_input = document.getElementById('Passport_input').value;
    localStorage.setItem("Name_input", Name_input)
    localStorage.setItem("LastName_input", LastName_input)
    localStorage.setItem("Date_input", Date_input)
    localStorage.setItem("Passport_input", Passport_input)
})




