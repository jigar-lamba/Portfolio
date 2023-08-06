let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


// scroll section

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {

    sections.forEach(sec => {
        let top = windows.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });

            sec.classList.add('show-animate');
        }

        else{
            sec.classList.remove('show-animate');
        }

    });
    // sticky header
    let header = document.querySelector('header');

    header.classList.toggle('sticky',window.scrollY > 100);

    // remove toggle icon and navbar when click navbar links

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

}

function sendEmail(){

    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let mobile = document.getElementById("mobile");
    let subject = document.getElementById("subject");
    let message = document.getElementById("msg");


    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "jigarjitsingh212002@gmail.com",
        Password : "A3542CBDDCCB2963AA401238005F0044394F",
        To : 'rmittal_be20@thapar.edu',
        From : "jigarjitsingh212002@gmail.com",
        Subject : "New Contact form enquiry",
        Body : "And this is the body"
    }).then(
      message => alert("Message sent succesfully")
    );
}
