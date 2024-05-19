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


    // **Smooth Scrolling for #nav_container**

    $("#nav_container").mouseenter(function () {
        window.addEventListener("wheel", scrollNavigation_nav_container);
    });

    $("#nav_container").mouseleave(function () {
        window.removeEventListener("wheel", scrollNavigation_nav_container);
    });

    function scrollNavigation_nav_container(event) {
        const navContainer = $("#nav_container")[0];

        if (event.deltaY > 0) {
            navContainer.scrollLeft += 50; // Adjust scroll amount as needed
        } else {
            navContainer.scrollLeft -= 50; // Adjust scroll amount as needed
        }
    }


    // **Smooth Scrolling for #pic_img**

    $("#pic_img").mouseenter(function () {
        window.addEventListener("wheel", scrollNavigation_pic_img);
    });

    $("#pic_img").mouseleave(function () {
        window.removeEventListener("wheel", scrollNavigation_pic_img);
    });

    function scrollNavigation_pic_img(event) {
        const picImg = $("#pic_img")[0];

        if (event.deltaY > 0) {
            picImg.scrollLeft += 50; // Adjust scroll amount as needed
        } else {
            picImg.scrollLeft -= 50; // Adjust scroll amount as needed
        }
    }


    // **Smooth Scrolling for #pic-img-2**

    $("#pic-img-2").mouseenter(function () {
        window.addEventListener("wheel", scrollNavigation_pic_img_2);
    });

    $("#pic-img-2").mouseleave(function () {
        window.removeEventListener("wheel", scrollNavigation_pic_img_2);
    });

    function scrollNavigation_pic_img_2(event) {
        const picImg2 = $("#pic-img-2")[0];

        if (event.deltaY > 0) {
            picImg2.scrollLeft += 50; // Adjust scroll amount as needed
        } else {
            picImg2.scrollLeft -= 50; // Adjust scroll amount as needed
        }
    }
});
