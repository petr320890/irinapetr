/* Сброс и глобальные стили */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html, body {
  font-family: Arial, sans-serif;
  color: #fff;
  background: #000;
  overflow-x: hidden; /* Предотвращаем горизонтальный скролл */
}
h1, h2, h3, h4, h5, h6 {
  margin-bottom: 10px;
}
p {
  margin-bottom: 15px;
  line-height: 1.5;
}

/* Эффект появления при скролле */
.block {
  opacity: 0;
  transform: translateY(50px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}
.block.visible {
  opacity: 1;
  transform: translateY(0);
}

/* Базовый стиль для блоков */
.block {
  position: relative;
  width: 100%;
  min-height: 80vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 40px 20px;
}

/* Overlay с непрозрачностью 70% (по умолчанию) */
.overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 1;
}
/* Для блока 1 прозрачность overlay 40% */
.block-1 .overlay {
  background: rgba(0, 0, 0, 0.4);
}

.content {
  position: relative;
  z-index: 2;
  max-width: 800px;
  margin: 0 auto;
}

/* Анимация надписей (fade-in с увеличением) */
.animate-text {
  opacity: 0;
  transform: scale(0.8);
  animation: textFadeIn 1s forwards;
  animation-delay: 0.5s;
}
@keyframes textFadeIn {
  to {
    opacity: 1;
    transform: scale(1);
  }
}

/* Анимированная стрелка вниз в виде тонкой буквы V */
.scroll-arrow {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 48px;
  font-family: Arial, sans-serif;
  font-weight: 100;
  color: #fff;
  cursor: pointer;
  animation: bounce 2s infinite;
  z-index: 2;
}
@keyframes bounce {
  0%, 20%, 50%, 80%, 100% { transform: translate(-50%, 0); }
  40% { transform: translate(-50%, 10px); }
  60% { transform: translate(-50%, 5px); }
}

/* Шрифты для блоков */
/* Блок 1: Заголовок и подпись */
.block-1 .content h1 {
  font-family: Georgia, serif;
  font-size: 72px;
  font-style: italic;
}
.block-1 .content p {
  font-family: Arial, sans-serif;
  font-size: 24px;
  font-weight: bold;
}

/* Блок 2: Дата и описание */
.block-2 .content h2 {
  font-family: Arial, sans-serif;
  font-size: 24px;
  font-weight: bold;
}
.block-2 .content p {
  font-family: Arial, sans-serif;
  font-size: 20px;
}

/* Блок 3: Обратный отсчёт */
.block-3 #countdown-timer h3 {
  font-family: Arial, sans-serif;
  font-size: 14px;
}

/* Фоны блоков */
.block-1-bg {
  background: url('images/block1.jpg') center/cover no-repeat;
}
.block-2-bg {
  background: url('images/block2.jpg') center/cover no-repeat;
}
.block-3-bg {
  background: url('images/block3.jpg') center/cover no-repeat;
}
.block-4-bg {
  background: url('images/block4.jpg') center/cover no-repeat;
}
.block-8-bg {
  background: url('images/block8.jpg') center/cover no-repeat;
}
.block-13-bg {
  background: url('images/block13.jpg') center/cover no-repeat;
}

/* Блок 5 */
.block-5 {
  background: #000;
  min-height: 50vh;
}

/* ЗАМЕНА VIDEO НА GIF (Блоки 6, 7, 11) */
.gif-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  overflow: hidden;
}
.gif-bg img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  pointer-events: none;
}

/* Горизонтальная галерея (Блоки 9 и 10) */
.scrollable-gallery {
  display: flex;
  gap: 20px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  padding-bottom: 10px;
}
.scrollable-gallery img {
  width: 300px;
  height: auto;
  border-radius: 8px;
  scroll-snap-align: start;
  object-fit: cover;
  cursor: pointer;
}

/* Блок 12: Дополнительный отступ для формы */
.block-12 .form-block {
  padding-bottom: 80px; /* пространство под стрелку */
}

/* Стили для формы в блоке 12 */
.form-group {
  margin-bottom: 15px;
  text-align: left;
}
.form-group label {
  display: block;
  margin-bottom: 5px;
  font-size: 16px;
}
.form-group input[type="text"] {
  width: 100%;
  padding: 8px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
}
.form-group input[type="radio"],
.form-group input[type="checkbox"] {
  margin-right: 5px;
}
button[type="submit"] {
  background: #ffcc00;
  color: #000;
  border: none;
  padding: 10px 20px;
  font-size: 18px;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.3s;
}
button[type="submit"]:hover {
  background: #e6b800;
}
