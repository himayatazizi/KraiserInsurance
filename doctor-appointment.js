// Function to show a doctor's profile when a link is clicked
function showDoctorProfile(doctorId) {
    // Hide all doctor profiles
    const allProfiles = document.querySelectorAll('[id^="doctor-profile-"]');
    allProfiles.forEach(profile => {
      profile.style.display = 'none';
    });
  
    // Show the selected doctor's profile
    const selectedProfile = document.getElementById(doctorId);
    if (selectedProfile) {
      selectedProfile.style.display = 'block';
    }
  }
  
  // Function to show the appointment form
  function showAppointmentForm() {
    // Hide all doctor profiles
    const allProfiles = document.querySelectorAll('[id^="doctor-profile-"]');
    allProfiles.forEach(profile => {
      profile.style.display = 'none';
    });
  
    // Show the appointment form
    const appointmentForm = document.getElementById('appointment-form');
    if (appointmentForm) {
      appointmentForm.style.display = 'block';
    }
  }
  
  // Function to handle form submission
  function handleSubmit(event) {
    event.preventDefault();
  
    // Get form data
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const date = document.getElementById('date').value;
    const sex = document.getElementById('sex').value;
    const gender = document.getElementById('gender').value;
    const dob = document.getElementById('dob').value;
    const reason = document.getElementById('reason').value;
    const message = document.getElementById('message').value;
  
    // Check if any field is empty
    if (!firstName || !lastName || !email || !phone || !date || !sex || !gender || !dob || !reason || !message) {
      const errorMessage = document.getElementById('error-message');
      errorMessage.style.display = 'block';
    } else {
      // Handle form submission (e.g., send data to a server)
      // You can add your form submission logic here
      // Reset the form after successful submission
      event.target.reset();
    }
  }
  
  // Attach click event listeners to doctor links
  const doctorLinks = document.querySelectorAll('.doctor-link');
  doctorLinks.forEach(link => {
    link.addEventListener('click', (event) => {
      const doctorId = event.target.getAttribute('data-doctor-id');
      showDoctorProfile(doctorId);
    });
  });
  
  // Attach click event listener to "Book Appointment" buttons
  const bookAppointmentButtons = document.querySelectorAll('[id^="book-appointment-"]');
  bookAppointmentButtons.forEach(button => {
    button.addEventListener('click', showAppointmentForm);
  });
  
  // Attach submit event listener to the appointment form
  const appointmentForm = document.getElementById('appointment-form');
  if (appointmentForm) {
    appointmentForm.addEventListener('submit', handleSubmit);
  }
  