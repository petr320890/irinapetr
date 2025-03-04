
document.addEventListener('DOMContentLoaded', function(){
  const panels = Array.from(document.querySelectorAll('.panel'));

  // Изначально все блоки прячем ниже экрана (translateY(100%))
  panels.forEach(p => p.classList.add('hidden-below'));

  // Активируем первый блок (index=0)
  let activeIndex = 0;
  panels[0].classList.remove('hidden-below');
  panels[0].classList.add('active');

  // Слушаем скролл
  window.addEventListener('scroll', onScroll);

  function onScroll(){
    const scrollPos = window.scrollY;
    // Определяем, какой блок сейчас должен быть на экране
    // Допустим, каждые 100vh (около) даёт следующий блок
    const newIndex = Math.round(scrollPos / window.innerHeight);

    if(newIndex !== activeIndex && newIndex >= 0 && newIndex < panels.length){
      console.log("Переход к блоку:", newIndex);

      // Старый - уходит наверх (hidden-above)
      panels[activeIndex].classList.remove('active');
      panels[activeIndex].classList.add('hidden-above');

      // Новый - становится активным
      panels[newIndex].classList.remove('hidden-below','hidden-above');
      panels[newIndex].classList.add('active');

      activeIndex = newIndex;
    }
  }
});

// Прокрутка на следующий блок
function scrollManualToNext(currentIndex){
  const nextIndex = currentIndex + 1;
  const targetPos = nextIndex * window.innerHeight;
  window.scrollTo({
    top: targetPos,
    behavior: 'smooth'
  });
}

// Модальное окно
var modalImages = [];
var modalCurrentIndex = 0;
document.querySelectorAll(".block-2 .scrollable-gallery img")
.forEach(img => {
  img.addEventListener("click", function(){
    console.log("Клик по картинке:", this.src);
    const gallery = this.closest('.scrollable-gallery');
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
document.querySelector("#image-modal .close").addEventListener("click", ()=>{
  document.getElementById('image-modal').style.display = 'none';
  document.body.style.overflow = 'auto';
});
document.getElementById('image-modal').addEventListener('click', (e)=>{
  if(e.target === e.currentTarget){
    document.getElementById('image-modal').style.display = 'none';
    document.body.style.overflow = 'auto';
  }
});
