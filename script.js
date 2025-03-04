// -- ТАЙМЕР (блок 3)
var countDownDate = new Date("September 18, 2025 15:00:00").getTime();
var countdownfunction = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000*60*60*24));
  var hours = Math.floor((distance % (1000*60*60*24)) / (1000*60*60));
  var minutes = Math.floor((distance % (1000*60*60)) / (1000*60));
  var seconds = Math.floor((distance % (1000*60)) / 1000);

  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;

  if(distance < 0) {
    clearInterval(countdownfunction);
    document.getElementById("countdown-timer").innerHTML = "<h3>Событие началось!</h3>";
  }
}, 1000);

// -- "ПИН" БЛОКОВ
document.addEventListener("DOMContentLoaded", function(){
  const panels = Array.from(document.querySelectorAll('.panel'));

  // Изначально всем блокам ставим класс 'hidden-below'
  panels.forEach(p => p.classList.add('hidden-below'));

  // Активируем нулевой блок
  let activeIndex = 0;
  panels[activeIndex].classList.remove('hidden-below');
  panels[activeIndex].classList.add('active');

  // Отслеживаем скролл и вручную меняем активный блок
  window.addEventListener('scroll', handleScroll);

  function handleScroll(){
    let scrollPos = window.scrollY;
    // Рассчитываем, какой блок должен быть сейчас «вверху»
    // На каждые 100vh можно переключать индекс (примерно).
    // Или используем более точную формулу:
    let newIndex = Math.floor(scrollPos / window.innerHeight + 0.5);

    // Ограничиваем, чтобы не выйти за массив
    if(newIndex < 0) newIndex = 0;
    if(newIndex >= panels.length) newIndex = panels.length -1;

    if(newIndex !== activeIndex){
      // Прежний активный уходит "выше" (hidden-above)
      panels[activeIndex].classList.remove('active');
      panels[activeIndex].classList.add('hidden-above');
      // Новый становится active
      panels[newIndex].classList.remove('hidden-below', 'hidden-above');
      panels[newIndex].classList.add('active');
      // Обновляем
      activeIndex = newIndex;
    }
  }
});

// -- Прокрутка по нажатию стрелки
function scrollManualToNext(currentIndex){
  // Промотать страницу так, чтобы активным стал следующий блок
  let nextIndex = currentIndex + 1;
  // Высчитываем позицию, где должен быть следующий блок
  let targetPos = nextIndex * window.innerHeight;
  window.scrollTo({
    top: targetPos,
    behavior: 'smooth'
  });
}

// -- Модальное окно (блоки 9, 10)
var modalImages = [];
var modalCurrentIndex = 0;
document.querySelectorAll(".block-9 .scrollable-gallery img, .block-10 .scrollable-gallery img")
.forEach(img => {
  img.addEventListener("click", function(){
    console.log("Клик по картинке:", this.src);
    let gallery = this.closest('.scrollable-gallery');
    modalImages = Array.from(gallery.querySelectorAll('img')).map(im => im.src);
    modalCurrentIndex = modalImages.indexOf(this.src);
    openModal(modalCurrentIndex);
  });
});
function openModal(index){
  console.log("openModal, index:", index, "из", modalImages.length);
  const modal = document.getElementById('image-modal');
  const modalImg = document.getElementById('modal-img');
  if(index>=0 && index<modalImages.length){
    modalImg.src = modalImages[index];
  }
  modal.style.display = 'block';
  document.body.style.overflow = 'hidden'; 
}
function changeModalImage(direction){
  modalCurrentIndex += direction;
  if(modalCurrentIndex<0) modalCurrentIndex = modalImages.length-1;
  if(modalCurrentIndex>=modalImages.length) modalCurrentIndex = 0;
  document.getElementById('modal-img').src = modalImages[modalCurrentIndex];
}
document.querySelector('#image-modal .close').addEventListener('click', ()=>{
  console.log("Закрываем модальное окно");
  document.getElementById('image-modal').style.display = 'none';
  document.body.style.overflow = 'auto';
});
document.getElementById('image-modal').addEventListener('click', e=>{
  if(e.target===e.currentTarget){
    console.log("Закрытие модалки по фону");
    e.currentTarget.style.display = 'none';
    document.body.style.overflow = 'auto';
  }
});

// -- Обработка формы (блок 12)
const form = document.getElementById("rsvpForm");
if(form){
  form.addEventListener("submit", e=>{
    e.preventDefault();
    alert("Спасибо за подтверждение присутствия!");
    form.reset();
  });
}
