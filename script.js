// Таймер обратного отсчёта (Блок 3)
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

// При загрузке добавим класс .visible, если нужно плавное появление
document.addEventListener("DOMContentLoaded", function() {
  var blocks = document.querySelectorAll(".block");
  blocks.forEach(function(block) {
    block.classList.add("visible");
  });
});

// Прокрутка вниз на 1 высоту окна при клике стрелки
function scrollToNextBlock(el) {
  window.scrollBy({
    top: window.innerHeight,
    behavior: "smooth"
  });
}

// ------------------
// МОДАЛЬНОЕ ОКНО для фото в блоках 9 и 10
// ------------------
var modalImages = [];
var modalCurrentIndex = 0;

// Найдём все картинки
document.querySelectorAll(".block-9 .scrollable-gallery img, .block-10 .scrollable-gallery img")
  .forEach(function(img) {
    img.addEventListener("click", function() {
      // Логирование для отладки:
      console.log("Image clicked:", this.src);

      // Собираем все img из той же галереи
      var gallery = this.closest(".scrollable-gallery");
      modalImages = Array.from(gallery.querySelectorAll("img")).map(function(image) {
        return image.src;
      });
      modalCurrentIndex = modalImages.indexOf(this.src);

      openModal(modalCurrentIndex);
    });
  });

function openModal(index) {
  console.log("openModal called, index:", index);

  var modal = document.getElementById("image-modal");
  var modalImg = document.getElementById("modal-img");

  // Проверяем массив modalImages
  console.log("modalImages array:", modalImages);

  if (index >= 0 && index < modalImages.length) {
    modalImg.src = modalImages[index];
  }
  modal.style.display = "block";

  // Блокируем прокрутку, чтобы фон не скроллился
  document.body.style.overflow = "hidden";
}

// Листаем
function changeModalImage(direction) {
  console.log("changeModalImage called, direction:", direction);

  modalCurrentIndex += direction;
  if (modalCurrentIndex < 0) {
    modalCurrentIndex = modalImages.length - 1;
  }
  if (modalCurrentIndex >= modalImages.length) {
    modalCurrentIndex = 0;
  }
  document.getElementById("modal-img").src = modalImages[modalCurrentIndex];
}

// Закрываем по кнопке X
document.querySelector("#image-modal .close").addEventListener("click", function() {
  console.log("Closing modal via 'X'");
  document.getElementById("image-modal").style.display = "none";
  document.body.style.overflow = "auto";
});

// Закрываем по клику на фон (modal)
document.getElementById("image-modal").addEventListener("click", function(e) {
  if (e.target === this) {
    console.log("Closing modal via background click");
    this.style.display = "none";
    document.body.style.overflow = "auto";
  }
});

// ------------------
// Обработка формы (Блок 12)
var form = document.getElementById("rsvpForm");
if (form) {
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Спасибо за подтверждение присутствия!");
    form.reset();
  });
}
