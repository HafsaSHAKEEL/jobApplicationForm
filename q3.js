const applications = []; // Array to store submitted applications

document.getElementById('jobApplicationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    if(validateForm()) {
        processForm();
    }
});

function validateForm() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const street = document.getElementById('street').value;
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;
    const zipCode = document.getElementById('zipCode').value;
    const resume = document.getElementById('resume').value;
    const coverLetter = document.getElementById('coverLetter').value;
    const educationLevel = document.getElementById('educationLevel').value;
    const schoolName = document.getElementById('schoolName').value;
    const major = document.getElementById('major').value;
    const graduationYear = document.getElementById('graduationYear').value;
    const jobTitle = document.getElementById('jobTitle').value;
    const companyName = document.getElementById('companyName').value;
    const employmentDates = document.getElementById('employmentDates').value;
    const jobResponsibilities = document.getElementById('jobResponsibilities').value;
    const skills = document.getElementById('skills').value;
    const certifications = document.getElementById('certifications').value;
    const startDate = document.getElementById('startDate').value;
    const workSchedule = document.getElementById('workSchedule').value;
    const referenceName = document.getElementById('referenceName').value;
    const referenceContact = document.getElementById('referenceContact').value;
    const relationship = document.getElementById('relationship').value;
    const whyWorkHere = document.getElementById('whyWorkHere').value;
    const termsAgree = document.getElementById('termsAgree').checked;
    const privacyPolicy = document.getElementById('privacyPolicy').checked;

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^\d{10}$/;
    const zipCodePattern = /^\d{5}$/;
    const datePattern = /^\d{4}-\d{2}-\d{2}$/;

    if (!firstName || !lastName || !email || !phone || !street || !city || !state || !zipCode ||
        !resume || !coverLetter || !educationLevel || !schoolName || !major || !graduationYear ||
        !jobTitle || !companyName || !employmentDates || !jobResponsibilities || !skills || 
        !certifications || !startDate || !workSchedule || !referenceName || !referenceContact || 
        !relationship || !whyWorkHere || !termsAgree || !privacyPolicy) {
        alert('Please fill out all required fields.');
        return false;
    }

    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return false;
    }

    if (!phonePattern.test(phone)) {
        alert('Please enter a valid phone number.');
        return false;
    }

    if (!zipCodePattern.test(zipCode)) {
        alert('Please enter a valid ZIP code.');
        return false;
    }

    if (!datePattern.test(startDate)) {
        alert('Please enter a valid start date.');
        return false;
    }

    return true;
}


function processForm() {
    // Simulate processing form data and storing it in the applications array
    const formData = {
        name: document.getElementById('firstName').value,
        email: document.getElementById('email').value,
        // Add other form fields as needed
    };
    applications.push(formData);
    console.log('Form submitted');
}

document.getElementById('viewApplicationsBtn').addEventListener('click', function() {
    displayApplications();
});

function displayApplications() {
    const table = document.createElement('table');
    const headers = ['Name', 'Email', 'Phone Number', 'Resume', 'Cover Letter'];

    // Create table header row
    let headerRow = table.insertRow();
    headers.forEach(headerText => {
        let th = document.createElement('th');
        th.appendChild(document.createTextNode(headerText));
        headerRow.appendChild(th);
    });

    // Create table rows
    applications.forEach(application => {
        let row = table.insertRow();
        Object.values(application).forEach(value => {
            let cell = row.insertCell();
            cell.appendChild(document.createTextNode(value));
        });
    });

    document.getElementById('applicationsTable').innerHTML = '';
    document.getElementById('applicationsTable').appendChild(table);
}
