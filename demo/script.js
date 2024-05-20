$(document).ready(function () {
    // Click event handler for navigation tabs
    $(".navigation-tab-item").click(function () {
        // Remove "active" class from all tabs
        $(".navigation-tab-item").removeClass("active");
        // Add "active" class to the clicked tab
        $(this).addClass("active");
    });

    // Click event handler for overview images in #overview-pic-img
    $(".overview-pic-img img").click(function () {
        // Remove "active" class from all overview images
        $(".overview-pic-img img").removeClass("active");
        // Add "active" class to the clicked image
        $(this).addClass("active");
    });

    // Click event handler for overview images in #overview-pic-img-2
    $(".overview-pic-img-2 img").click(function () {
        // Remove "active" class from all overview images in #overview-pic-img-2
        $(".overview-pic-img-2 img").removeClass("active");
        // Add "active" class to the clicked image
        $(this).addClass("active");
    });

    // Define a function for smooth scrolling
    function smoothScroll(element, delta) {
        const container = document.getElementById(element);
        if (delta > 0) {
            container.scrollLeft += 100; // Adjust scroll amount as needed
        } else {
            container.scrollLeft -= 100; // Adjust scroll amount as needed
        }

    }

    // Event listener for touch events (mobile) and wheel events (desktop)
    const elements = ['nav_container', 'pic_img', 'pic-img-2']; // Array of element IDs

    elements.forEach(elementId => {
        const element = document.getElementById(elementId);
        element.addEventListener('touchstart', (event) => {
            event.preventDefault(); // Prevent default touch behavior
            const touchStartX = event.touches[0].clientX; // Get initial touch position
            element.addEventListener('touchmove', (event) => {
                event.preventDefault();
                const touchMoveX = event.touches[0].clientX;
                const delta = touchStartX - touchMoveX; // Calculate delta based on touch movement
                smoothScroll(elementId, delta); // Call smoothScroll function with delta
            });
        });

        element.addEventListener('wheel', (event) => {
            smoothScroll(elementId, event.deltaY); // Call smoothScroll function with deltaY from wheel event
        });
    });

    const navContainer = document.getElementById("nav_container");
    const leftArrow = document.querySelector(".arrow-left");
    const rightArrow = document.querySelector(".arrow-right");

    const scrollAmount = 100; // Adjust this value to control scroll distance per click

    leftArrow.addEventListener("click", function () {
        navContainer.scrollLeft -= scrollAmount;
    });
    rightArrow.addEventListener("click", function () {
        navContainer.scrollLeft += scrollAmount;
    });


    const sidenav = document.getElementById("sidenav");
    const toggleButton = document.getElementById("overview-menu");

    // Event listener for clicking the toggle button
    toggleButton.addEventListener("click", function () {
        sidenav.classList.toggle("closed"); // Toggle "closed" class on the sidenav
    });
});