const servicesLink = document.getElementById('ser'); // Link element for services dropdown
const servicesDropdown = document.getElementById('ser-ele'); // Dropdown menu for services
const internshipLink = document.getElementById('int'); // Link element for internship dropdown
const internshipDropdown = document.getElementById('int-ele'); // Dropdown menu for internship


let servicesTimeout; // Timeout variable for services dropdown
let internshipTimeout; // Timeout variable for internship dropdown

// Function to show the dropdown
function showDropdown(dropdown) {
    dropdown.classList.remove('no-display'); // Remove the 'no-display' class to show the dropdown
}

// Function to hide the dropdown
function hideDropdown(dropdown) {
    dropdown.classList.add('no-display'); // Add the 'no-display' class to hide the dropdown
}

// Show/hide the services dropdown menus on hover
servicesLink.addEventListener('mouseover', () => {
    clearTimeout(servicesTimeout); // Clear any existing timeout for services
    showDropdown(servicesDropdown); // Show the services dropdown
});
servicesLink.addEventListener('mouseout', () => {
    servicesTimeout = setTimeout(() => {
        hideDropdown(servicesDropdown); // Hide the services dropdown after 1 second delay
    }, 500);
});

servicesDropdown.addEventListener('mouseover', () => {
    clearTimeout(servicesTimeout); // Clear any existing timeout for services
});
servicesDropdown.addEventListener('mouseout', () => {
    servicesTimeout = setTimeout(() => {
        hideDropdown(servicesDropdown); // Hide the services dropdown after 0.1 second delay
    }, 100);
});

// Show/hide the internship dropdown menus on hover
internshipLink.addEventListener('mouseover', () => {
    clearTimeout(internshipTimeout); // Clear any existing timeout for internship
    showDropdown(internshipDropdown); // Show the internship dropdown
});
internshipLink.addEventListener('mouseout', () => {
    internshipTimeout = setTimeout(() => {
        hideDropdown(internshipDropdown); // Hide the internship dropdown after 1 second delay
    }, 500);
});

internshipDropdown.addEventListener('mouseover', () => {
    clearTimeout(internshipTimeout); // Clear any existing timeout for internship
});
internshipDropdown.addEventListener('mouseout', () => {
    internshipTimeout = setTimeout(() => {
        hideDropdown(internshipDropdown); // Hide the internship dropdown after 0.1 second delay
    }, 100);
});





const navbar = document.getElementById('navbar');
const sections = document.querySelectorAll('.sect');

window.addEventListener('scroll', () => {
    let currentSection = '';

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.pageYOffset >= sectionTop - sectionHeight / 3) {
            currentSection = section.getAttribute('id');
        }
    });

    switch (currentSection) {
        case 'home':
            navbar.style.backgroundImage = 'linear-gradient(to right, lightblue,gold )';
            break;
        case 'about':
            navbar.style.backgroundImage = 'linear-gradient(to right, aliceblue,#d6adb0 )';
            break;
        case 'services':
            navbar.style.backgroundImage = 'linear-gradient(to right, lightblue, teal)';
            break;
        case 'internship':
            navbar.style.backgroundImage = 'linear-gradient(to right, lightblue,gold )';
            break;
        case 'register':
            navbar.style.backgroundImage = 'linear-gradient(to right, skyblue, lightblue)';
            break;
        case 'career':
            navbar.style.backgroundImage = 'linear-gradient(to right, lightblue,gold )';
            break;
        case 'contact':
            navbar.style.backgroundImage = 'linear-gradient(to right, lightblue, teal)';
            break;
        default:
            navbar.style.backgroundColor = 'skyblue';
            navbar.style.backgroundImage = 'none';
            break;
    }
});

const frontContent = document.querySelector('#front .title');

let isFrontContentVisible = true;

window.addEventListener('scroll', () => {
    if (!isElementInView(aboutSection) && window.scrollY > 0) {
        // If 'about' section is not in view and user has scrolled past it, hide the front content
        frontContent.style.visibility = 'hidden';
        isFrontContentVisible = false;
    } else if (!isFrontContentVisible && window.scrollY <= 0) {
        // If front content is not visible and user scrolls back to the top, show the front content
        frontContent.style.visibility = 'visible';
        isFrontContentVisible = true;
    }
});

function isElementInView(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
}


const hamburger = document.getElementById('hamburger');
const navele = document.getElementById('navele');

hamburger.addEventListener('click', () => {
    navele.querySelector('ul').classList.toggle('show');
});


function updateLinks() {
    var anchor1 = document.getElementById('int');
    var anchor2 = document.getElementById('ser');
    if (window.innerWidth < 768) {
        anchor1.href = '#internship';
        anchor2.href = '#services';
        servicesLink.classList.remove("no-underline");
        internshipLink.classList.remove("no-underline");
        servicesDropdown.style.display = "none";
        internshipDropdown.style.display = "none";
    } else {
        anchor1.href = '#';
        anchor2.href = '#';
        servicesLink.classList.add("no-underline");
        internshipLink.classList.add("no-underline");
    }
}

updateLinks(); // Call the function initially

window.addEventListener('resize', function() {
    updateLinks(); // Call the function whenever the window is resized
});