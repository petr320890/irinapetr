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


// Простейший эффект "появления" блоков (добавим класс .visible при загрузке)
document.addEventListener("DOMContentLoaded", function() {
  var blocks = document.querySelectorAll(".block");
  blocks.forEach(function(block) {
    block.classList.add("visible");
  });
});

// Прокрутка к следующему блоку
function scrollToNextBlock(el) {
  // Находим все блоки
  const allBlocks = Array.from(document.querySelectorAll('.block'));
  // Ищем текущий блок
  const currentBlock = el.closest('.block');
  // Индекс текущего блока
  const i = allBlocks.indexOf(currentBlock);
  // Следующий блок, если есть
  if (i >= 0 && i < allBlocks.length - 1) {
    const nextBlock = allBlocks[i+1];
    // Скроллим к нему
    window.scrollTo({
      top: nextBlock.offsetTop,
      behavior: 'smooth'
    });
  }
}

// ---------------------
// Модальное окно для фото в блоках 9 и 10
// ---------------------
var modalImages = [];
var modalCurrentIndex = 0;

document.querySelectorAll(".block-9 .scrollable-gallery img, .block-10 .scrollable-gallery img")
  .forEach(function(img) {
    img.addEventListener("click", function() {
      console.log("Клик по картинке:", this.src);
      var gallery = this.closest(".scrollable-gallery");
      modalImages = Array.from(gallery.querySelectorAll("img")).map(function(image) {
        return image.src;
      });
      modalCurrentIndex = modalImages.indexOf(this.src);

      openModal(modalCurrentIndex);
    });
  });

function openModal(index) {
  console.log("openModal вызван, index:", index, "Всего картинок:", modalImages.length);
  const modal = document.getElementById("image-modal");
  const modalImg = document.getElementById("modal-img");

  if (index >= 0 && index < modalImages.length) {
    modalImg.src = modalImages[index];
  }
  modal.style.display = "block";

  // Блокируем скролл фона
  document.body.style.overflow = "hidden";
}

function changeModalImage(direction) {
  console.log("Переход изображений, direction:", direction);
  modalCurrentIndex += direction;
  if (modalCurrentIndex < 0) {
    modalCurrentIndex = modalImages.length - 1;
  }
  if (modalCurrentIndex >= modalImages.length) {
    modalCurrentIndex = 0;
  }
  document.getElementById("modal-img").src = modalImages[modalCurrentIndex];
}

// Закрытие по кнопке "X"
document.querySelector("#image-modal .close").addEventListener("click", function() {
  console.log("Закрытие модалки по 'X'");
  document.getElementById("image-modal").style.display = "none";
  document.body.style.overflow = "auto";
});

// Закрытие по клику на фон (modal)
document.getElementById("image-modal").addEventListener("click", function(e) {
  if (e.target === this) {
    console.log("Закрытие модалки по клику на фон");
    this.style.display = "none";
    document.body.style.overflow = "auto";
  }
});

// ---------------------
// Обработка формы (Блок 12)
const form = document.getElementById("rsvpForm");
if (form) {
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Спасибо за подтверждение присутствия!");
    form.reset();
  });
}
