let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            })
        }
    })

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};
ScrollReveal({
    //reset: true ,
    distance: '80px',
    duration: 2000,
    delay: 200,
});
ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

const typed = new Typed('.multiple-text', {
    strings: [
        'Flutter Developer',
        'Software Engineer',
    ],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
});

function sendEmail() {
    var parms = {
        name: document.getElementById('username').value,
        email: document.getElementById('useremail').value,
        subject: document.getElementById('emailsub').value,
        phone: document.getElementById('userphone').value,
        message: document.getElementById('message').value,

    };

    const serviceID = 'service_68rpr25';
    const tempID = 'template_py96y4c';
    emailjs.send(serviceID, tempID, parms).then(
        (res) => {
            document.getElementById('username').value = "";
            document.getElementById('useremail').value = "";
            document.getElementById('emailsub').value = "";
            document.getElementById('userphone').value = "";
            document.getElementById('message').value = "";
            console.log(res);
            alert("Your message sent successfully");

        }
    ).catch(err => console.log(err),alert(err));
}
