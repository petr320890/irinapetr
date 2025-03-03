// Обратный отсчёт (Блок 3)
var countDownDate = new Date("September 18, 2025 15:00:00").getTime();
var countdownfunction = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  if (distance < 0) {
    clearInterval(countdownfunction);
    document.getElementById("countdown-timer").innerHTML = "<h3>Событие началось!</h3>";
  }
}, 1000);

// Эффект появления при скролле с фиксацией
document.addEventListener("DOMContentLoaded", function() {
  var blocks = document.querySelectorAll(".block");
  var observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(function(entry) {
      if(entry.isIntersecting) {
         entry.target.classList.add("visible");
         observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });
  blocks.forEach(function(block) {
    observer.observe(block);
  });
});

// Модальное окно для увеличения изображений (Блоки 9 и 10)
document.querySelectorAll(".block-9 .scrollable-gallery img, .block-10 .scrollable-gallery img")
.forEach(function(img) {
  img.addEventListener("click", function() {
    document.getElementById("modal-img").src = this.src;
    document.getElementById("image-modal").style.display = "block";
  });
});
document.querySelector("#image-modal .close").addEventListener("click", function() {
  document.getElementById("image-modal").style.display = "none";
});

// Закрытие модального окна при клике вне изображения
document.getElementById("image-modal").addEventListener("click", function(e) {
  if (e.target === this) {
    this.style.display = "none";
  }
});
