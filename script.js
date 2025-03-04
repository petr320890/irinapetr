document.addEventListener("DOMContentLoaded", function() {
  // Таймер (Блок 3)
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
  
  // Простейший эффект появления блоков
  var blocks = document.querySelectorAll(".block");
  blocks.forEach(function(block) {
    block.classList.add("visible");
  });
  
  // Прокрутка к следующему блоку при клике на стрелку
  window.scrollToNextBlock = function(el) {
    var currentBlock = el.closest(".block");
    if (currentBlock) {
      var allBlocks = Array.from(document.querySelectorAll(".block"));
      var index = allBlocks.indexOf(currentBlock);
      if (index >= 0 && index < allBlocks.length - 1) {
        var nextBlock = allBlocks[index + 1];
        nextBlock.scrollIntoView({ behavior: "smooth" });
      }
    }
  };
  
  // Модальное окно для увеличения изображений (Блоки 9 и 10)
  var modalImages = [];
  var modalCurrentIndex = 0;
  var galleryImages = document.querySelectorAll(".block-9 .scrollable-gallery img, .block-10 .scrollable-gallery img");
  galleryImages.forEach(function(img) {
    img.addEventListener("click", function() {
      var gallery = this.closest(".scrollable-gallery");
      modalImages = Array.from(gallery.querySelectorAll("img")).map(function(image) {
        return image.src;
      });
      modalCurrentIndex = modalImages.indexOf(this.src);
      openModal(modalCurrentIndex);
    });
  });
  
  function openModal(index) {
    var modal = document.getElementById("image-modal");
    var modalImg = document.getElementById("modal-img");
    if (index >= 0 && index < modalImages.length) {
      modalImg.src = modalImages[index];
    }
    modal.style.display = "block";
    document.body.style.overflow = "hidden"; // Блокируем прокрутку страницы
  }
  
  window.changeModalImage = function(direction) {
    modalCurrentIndex += direction;
    if (modalCurrentIndex < 0) {
      modalCurrentIndex = modalImages.length - 1;
    }
    if (modalCurrentIndex >= modalImages.length) {
      modalCurrentIndex = 0;
    }
    document.getElementById("modal-img").src = modalImages[modalCurrentIndex];
  };
  
  document.querySelector("#image-modal .close").addEventListener("click", function() {
    document.getElementById("image-modal").style.display = "none";
    document.body.style.overflow = "auto";
  });
  
  document.getElementById("image-modal").addEventListener("click", function(e) {
    if (e.target === this) {
      this.style.display = "none";
      document.body.style.overflow = "auto";
    }
  });
  
  // Обработка формы (Блок 12)
  var form = document.getElementById("rsvpForm");
  if (form) {
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      alert("Спасибо за подтверждение присутствия!");
      form.reset();
    });
  }
});
