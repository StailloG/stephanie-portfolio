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

class Typewriter {
            constructor(el, options){
                this.el = el;
                this.words = [...  this.el.dataset.typewriter.split(',')];
                this.speed = options?.speed || 150;
                this.delay = options?.delay || 1500;
                this.repeat = options?.repeat || 150;
                this.initTyping();
            }

            wait = (ms) => new Promise((resolve) =>
            setTimeout(resolve, ms))

            toggleTyping = () => this.el.classList.toggle('typing');

            async typewrite(word) {
                await this.wait(this.delay);
                this.toggleTyping();
                //loop through each letter
                for (const letter of word.split('')) { 
                    this.el.textContent += letter;
                    await this.wait(this.speed)
                }
                this.toggleTyping();
                await this.wait(this.delay);
                //remove letters
                this.toggleTyping();
                while (this.el.textContent.length !== 0) {
                    this.el.textContent = this.el.textContent.
                    slice(0, -1);
                    await this.wait(this.speed);
                }
                this.toggleTyping();
            }

            async initTyping() {
                for (const word of this.words) {
                    await this.typewrite(word);
                }
                if(this.repeat) {
                    await this.initTyping();
                }
            }
        }

        const el1 = new Typewriter(document.querySelector
        ('[data-typewriter]'), {
            speed: 100,
            repeat: true,
        });