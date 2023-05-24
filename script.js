let oldScroll = 0

function reveal() {
  let isDown = oldScroll < this.scrollY;

  oldScroll = this.scrollY;
  var reveals = document.querySelectorAll('.reveal');

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 50;

    if (isDown && elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add('active');
    } else if (!isDown && elementTop > windowHeight - elementVisible * 2.5) {
      reveals[i].classList.remove('active');
    }
  }
}

window.addEventListener('scroll', reveal);
