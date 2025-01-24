
// function toggleTheme() {
//     const isDarkMode = document.body.classList.contains("dark-mode");

//     if (isDarkMode) {
//         // Switch to Light Mode
//         document.body.style.backgroundColor = "white";
//         document.body.style.color = "#1E293B"; // Optional: Light text color
//         document.body.classList.remove("dark-mode");

//         // Toggle icons
//         document.getElementById("nav-sun-icon").classList.add("hidden");
//         document.getElementById("nav-moon-icon").classList.remove("hidden");
//     } else {
//         // Switch to Dark Mode
//         document.body.style.backgroundColor = "#0F172A";
//         document.body.style.color = "#E2E8F0"; // Optional: Dark text color
//         document.body.classList.add("dark-mode");

//         // Toggle icons
//         document.getElementById("nav-moon-icon").classList.add("hidden");
//         document.getElementById("nav-sun-icon").classList.remove("hidden");
//     }
// }




function toggleTheme() {
    const isDarkMode = document.body.classList.contains("dark-mode");

    if (isDarkMode) {
        // Switch to Light Mode
        document.body.style.backgroundColor = "white";
        document.body.style.color = "#1E293B"; // Dark text for light mode
        document.body.classList.remove("dark-mode");

        // Toggle icons
        document.getElementById("nav-sun-icon").classList.add("hidden");
        document.getElementById("nav-moon-icon").classList.remove("hidden");
    } else {
        // Switch to Dark Mode
        document.body.style.backgroundColor = "#0F172A";
        document.body.style.color = "#E2E8F0"; // Light text for dark mode
        document.body.classList.add("dark-mode");

        // Toggle icons
        document.getElementById("nav-moon-icon").classList.add("hidden");
        document.getElementById("nav-sun-icon").classList.remove("hidden");
    }

}

       // navbar navbar javascript

window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 20) {
        navbar.style.backgroundColor = "#171e2e"; // Fully opaque
        navbar.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.2)"; // Add shadow
    } else {
        navbar.style.backgroundColor = "#0F172A"; // Transparent
        navbar.style.boxShadow = "none"; // Remove shadow
    }
});

document.querySelector('.toggle-icon').addEventListener('click', function () {
    const navbar = document.querySelector('.toggle-navbar-wrapper');
    navbar.classList.toggle('active');
  });



//   for text animation
// Select all elements with the class 'text-animation'
const animatedElements = document.querySelectorAll('.text-animation');

// Function to check if an element is in the viewport
const isInViewport = (element) => {
  const rect = element.getBoundingClientRect();
  return rect.top <= window.innerHeight && rect.bottom >= 0;
};

// Add scroll event listener
window.addEventListener('scroll', () => {
  animatedElements.forEach((element) => {
    if (isInViewport(element)) {
      element.classList.add('visible'); // Add the class when visible
    } else {
      element.classList.remove('visible'); // Remove the class when out of view
    }
  });
});

