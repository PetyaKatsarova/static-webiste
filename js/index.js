const menuItems = document.getElementById("menuItems");
const menuIcon  = document.getElementById("menuIcon");

// toggle hamburger navigation menu for small screens
menuIcon.addEventListener("click", (e)=> {
    var menuItems = e.target.nextElementSibling;
    if (menuItems.style.display === "none" || menuItems.style.display === "") {
        menuItems.style.display = "block";
        menuItems.className = "show"
    } else {
        menuItems.style.display = "none";
        menuItems.className = "hidden"
    }
    if (e.target.textContent == `x`) {
        e.target.textContent = `☰`
    } else {
        e.target.textContent = `x`
    }
})

// for small screen: active nav link changes color and background
// document.addEventListener("DOMContentLoaded", function() {
//     const links = document.querySelectorAll("#menuItems li a");

//     links.forEach(link => {
//         link.addEventListener("click", function() {
//             links.forEach(el => el.classList.remove('active'));
//             this.classList.add('active');
//         });
//     });
// });



// add/remove above/under line on click on nav link on bigger screen
document.querySelectorAll("#menuItems li a").forEach(el => {
    el.addEventListener("click", function() {
        // Remove active class from all links
        document.querySelectorAll("#menuItems li a").forEach(el => {
            if (el.classList == 'active') {
                el.classList.remove('active');
            } else {
                this.classList.add('active');
            }
            
        });
        // Add active class to the clicked link
        // this.classList.add('active');
    });
});

// Set the first link on the right as default active
// document.querySelector("#menuItems li:first-child a").classList.add('active');

// for small screen: on click on link color active link
