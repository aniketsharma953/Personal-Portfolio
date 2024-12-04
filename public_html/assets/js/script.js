$(document).ready(function () {
  $(".navbar .nav-link").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;

      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        700,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });
});

// navbar toggle
$("#nav-toggle").click(function () {
  $(this).toggleClass("is-active");
  $("ul.nav").toggleClass("show");
});
document.addEventListener("DOMContentLoaded", function () {
  const checkbox = document.getElementById("checkbox");

  checkbox.addEventListener("change", function () {
    if (checkbox.checked) {
      document.body.classList.add("dark-mode");
      // document.getElementById('card1').style.boxShadow = '10px 10px 5px white';
      // document.getElementById('card2').style.boxShadow = '10px 10px 5px white';
    } else {
      document.body.classList.remove("dark-mode");
      // document.getElementById('card1').style.boxShadow = '10px 10px 5px grey';
      // document.getElementById('card2').style.boxShadow = '10px 10px 5px grey';
    }
  });
});
