// functon to add style on navbar after scrolling
window.addEventListener("scroll", function () {
    var header = document.querySelector("header");
    header.classList.toggle("scrollbg", window.scrollY > 0)
})


// functions for set new image on hover
function NewGithubImage1() {
    document.getElementById("img1").src = "Image/aqua-github-logo.png";
}
function OldGithubImage1() {
    document.getElementById("img1").src = "Image/github-logo.png";
}

function NewInstagramImage() {
    document.getElementById("img2").src = "Image/aqua-instagram-logo.png";
}
function OldInstagramImage() {
    document.getElementById("img2").src = "Image/instagram-logo.png";
}

function NewLinkedinImage() {
    document.getElementById("img3").src = "Image/aqua-linkedin-logo.png";
}
function OldLinkedinImage() {
    document.getElementById("img3").src = "Image/linkedin-logo.png";
}

function NewCodepenImage() {
    document.getElementById("img4").src = "Image/aqua-codepen-logo.png";
}
function OldCodepenImage() {
    document.getElementById("img4").src = "Image/codepen-logo.png";
}

function NewGithubImage2() {
    document.getElementById("github-image1").src = "Image/aqua-github-logo.png"
}
function OldGithubImage2() {
    document.getElementById("github-image1").src = "Image/github-logo.png"
}

function NewGithubImage3() {
    document.getElementById("github-image2").src = "Image/aqua-github-logo.png"
}
function OldGithubImage3() {
    document.getElementById("github-image2").src = "Image/github-logo.png"
}

function NewGithubImage4() {
    document.getElementById("github-image3").src = "Image/aqua-github-logo.png"
}
function OldGithubImage4() {
    document.getElementById("github-image3").src = "Image/github-logo.png"
}

function NewGithubImage5() {
    document.getElementById("github-image4").src = "Image/aqua-github-logo.png"
}
function OldGithubImage5() {
    document.getElementById("github-image4").src = "Image/github-logo.png"
}

function NewNextLogo1() {
    document.getElementById("next-logo1").src = "Image/aqua-next-logo.png"
}
function OldNextLogo1() {
    document.getElementById("next-logo1").src = "Image/next-logo.png"
}

function NewNextLogo2() {
    document.getElementById("next-logo2").src = "Image/aqua-next-logo.png"
}
function OldNextLogo2() {
    document.getElementById("next-logo2").src = "Image/next-logo.png"
}

function NewNextLogo3() {
    document.getElementById("next-logo3").src = "Image/aqua-next-logo.png"
}
function OldNextLogo3() {
    document.getElementById("next-logo3").src = "Image/next-logo.png"
}

function NewNextLogo4() {
    document.getElementById("next-logo4").src = "Image/aqua-next-logo.png"
}
function OldNextLogo4() {
    document.getElementById("next-logo4").src = "Image/next-logo.png"
}

// Function to turn navbar menu into Hamburger menu
const navSlide = () => {
    const hamburger = document.querySelector('.ham-burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-item li');

    hamburger.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('nav-active');

        // Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ''
            } else {
                link.style.animation = `navLinkFade 1s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        // HamBurger Animation
        hamburger.classList.toggle('toggle');
    });
}

// Function call
navSlide();



// Fucntion for preventing form redirection

 var form = document.getElementById("my-form");
    
    async function handleSubmit(event) {
      event.preventDefault();
      var data = new FormData(event.target);
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
        alert("Thanks for your submission!")
        form.reset()
      }).catch(error => {
        alert("Oops! There was a problem submitting your form")
      });
    }
    form.addEventListener("submit", handleSubmit)