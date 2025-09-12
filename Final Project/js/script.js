const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))


if (document.querySelector('.owl-carousel')) {
  $(document).ready(function () {
    $(".owl-carousel").owlCarousel({
      items: 5,
      loop: true,
      nav: true,
      navText: ['<i class="fa-solid fa-angle-left pt-3 pb-3"></i>', '<i class="fa-solid fa-angle-right pt-3 pb-3"></i>'],
    });
  });
}

if (document.getElementById('contactForm')) {
  var contact_form = document.getElementById('contactForm')
  contact_form.addEventListener('input', (e) => {
    if (e.target.id == "userName") {
      nameValidation(e.target)
    }
    else if (e.target.id == "userEmail") {
      emailValidation(e.target)
    }
    else if (e.target.id == "userSubject") {
      subjectValidation(e.target)
    }

  })
}

if (document.getElementById('contactForm')) {
  var contact_form = document.getElementById('contactForm')
  contact_form.addEventListener('submit', (e) => {
    e.preventDefault();
    var userName = document.getElementById("userName");
    var userEmail = document.getElementById("userEmail");
    var userSubject = document.getElementById("userSubject");
    var userMsg = document.getElementById("userMsg");
    var formError = document.getElementById("formError");

    nameValidation(userName);
    emailValidation(userEmail);
    subjectValidation(userSubject);

    var errors = e.currentTarget.querySelectorAll(".text-danger");
    var errorFound = false;
    errors.forEach(err => {
      if (err.innerText !== "" && err.id !== "formError") {
        errorFound = true;
      }
    });
    if (errorFound) {
      if (errorFound) {
        formError.innerText = "One or more fields have an error. Please check and try again.";
      }

    } else {
      formError.innerText = "";
      e.currentTarget.submit();
    }
  });
}
var nameValidation = (element) => {
  var inputValue = element.value.trim();

  if (inputValue === "") {
    handleError(element, "This field is required");
  }
  else if (inputValue.length <= 3) {
    handleError(element, "Please enter at least 3 characters");
  }
  else {
    handleError(element);
  }
};


function emailValidation(input) {
  var value = input.value.trim();
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (value === "") {
    handleError(input, "This field is required");
  }
  else if (!emailRegex.test(value)) {
    handleError(input, "Please enter a valid email");
  }
  else {
    handleError(input);
  }
}

var subjectValidation = (inp) => {
  var value = inp.value.trim();
  var regex = /^[a-zA-Z0-9\s.,!?-]+$/;

  if (value === "") {
    handleError(inp, "This field is required");
  }
  else if (!regex.test(value)) {
    handleError(inp, "Subject must contain only letters, numbers, and punctuation");
  }
  else {
    handleError(inp);
  }
};

function handleError(input, msg = "") {
  input.nextElementSibling.innerText = msg;
}

if (document.getElementById("newsForm")) {
  var newsForm = document.getElementById("newsForm");
  var emailInput = document.getElementById("emailInputnews");
  var newsError = document.getElementById("newsError");

  newsForm.addEventListener("submit", (e) => {
    e.preventDefault();
    emailValidation(emailInput);
    if (newsError.innerText !== "") {
      newsError.innerText = "Please enter a valid email";
    }
    else {
      newsError.innerText = "";
      newsForm.submit();
    }

  });
}

window.addEventListener('scroll', () => {
  var upArrow = document.getElementById('upArrow')
  console.log('scrolling')
  console.log(document.documentElement.scrollTop)
  if (document.documentElement.scrollTop > 400) upArrow.classList.remove('d-none')
  else upArrow.classList.add('d-none')
})

window.addEventListener('scroll', () => {
  var navSticky = document.getElementById('nav-sticky');
  if (document.documentElement.scrollTop > 900) {
    navSticky.classList.add('sticky');
  } else {
    navSticky.classList.remove('sticky');
  }
});
