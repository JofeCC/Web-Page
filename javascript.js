/*Page loading:*/

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('home-container').style.display = 'block';
    document.getElementById('cv-container').style.display = 'none';
    document.getElementById('about-container').style.display = 'none';
  });

/*Navigation buttons:*/

document.getElementById('home').addEventListener('click', function() {
    document.getElementById('home-container').style.display = 'block';
    document.getElementById('cv-container').style.display = 'none';
    document.getElementById('about-container').style.display = 'none';
  });
  
document.getElementById('cv').addEventListener('click', function() {
    document.getElementById('home-container').style.display = 'none';
    document.getElementById('cv-container').style.display = 'block';
    document.getElementById('about-container').style.display = 'none';
  });
  
document.getElementById('about-me').addEventListener('click', function() {
    document.getElementById('home-container').style.display = 'none';
    document.getElementById('cv-container').style.display = 'none';
    document.getElementById('about-container').style.display = 'block';
  });

/*Slideshow script:*/

var slideArray = ["Pictures/colombia-cultural-map.png", "Pictures/colombia-flag.jpg", "Pictures/guitar-in-nature.jpg", "Pictures/book-poetry.jpg", "Pictures/tennis.jpg", "Pictures/basketball.jpg"];

setupSlides();
setupDots();

var slideIndex = 1;
showSlides(slideIndex);

var timeout = null;
timeout = setTimeout(automaticChange, 5000);

function setupSlides() {
    var i;
    var slideSet = document.getElementsByClassName("slideSet")[0];
    for (i = 0; i < slideArray.length; i++) {
        var slide = document.createElement('div');
        slide.className = "mySlides fade";

        var number = document.createElement('div');
        number.className = "numbertext"; 
        number.innerHTML = (i + 1) + " / " + slideArray.length;
        slide.appendChild(number);

        var image = document.createElement('img');
        image.style.width = "100%";
        image.src = slideArray[i];
        slide.appendChild(image);

        slideSet.appendChild(slide);                       
    }
}

function setupDots() {
    var i;
    var dotSet = document.getElementsByClassName("dots-container")[0];
    for (i = 0; i < slideArray.length; i++) {
        var dot = document.createElement('span');
        dot.className = "dot";
        dot.index = i + 1;
        dot.onclick = function () { currentSlide(this.index) };
        dotSet.appendChild(dot);
    }
}

function plusSlides(n) {
    slideIndex += n;
    showSlides(slideIndex);
    if (timeout !== null) {
        clearTimeout(timeout);
        timeout = setTimeout(automaticChange, 5000);
    }
}

function currentSlide(n) {
    slideIndex = n
    showSlides(slideIndex);
    if (timeout !== null) {
        clearTimeout(timeout);
        timeout = setTimeout(automaticChange, 5000);
    }
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

function automaticChange() {
    slideIndex++;
    showSlides(slideIndex);
    timeout=setTimeout(automaticChange, 5000);
}

/*Contact form:*/
var emailIsValid = false;
document.getElementById('contact-form').addEventListener('submit', function(event) {
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var message = document.getElementById('message').value;
  if (name == '' || email== '' || message== '') {
      alert('Please fill in all fields. Try again!');
      event.preventDefault();
    }
  else if (!emailIsValid) {
    alert('Please enter a valid e-mail. Try again!');
    event.preventDefault();
  }   
  else {
      alert('Message submitted!');}
});

/*E-mail validation:*/

document.getElementById('email').addEventListener('blur', function(event) {
  var email = document.getElementById('email').value;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
      alert('Please enter a valid e-mail address. It should be in the format: "example@example.com"');
      emailIsValid = false;
  }
  else{
    emailIsValid = true;
  }
});