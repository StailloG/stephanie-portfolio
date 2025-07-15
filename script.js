document.addEventListener("DOMContentLoaded", function () {
            const navLinks = document.querySelectorAll(".topnav a");
            const contentBoxes = document.querySelectorAll(".content-box");

            navLinks.forEach(link => {
                link.addEventListener("click", function (e) {
                    e.preventDefault();

                    //remove 'active' from all nav links
                    navLinks.forEach(nav => nav.classList.remove("active"));
                    
                    // Add "active" to clicked link
                    this.classList.add("active");

                    // Hide all content boxes
                    contentBoxes.forEach(box => box.classList.remove("active"));

                    // Get target section from href
                    const targetId = this.getAttribute("href").substring(1);
                    const targetSection = document.getElementById(targetId);
                    targetSection.classList.add("active");
                });
            })
        });
