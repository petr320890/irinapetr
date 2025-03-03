// Устанавливаем дату события: 18 сентября 2025 года, 15:00:00
var countDownDate = new Date("September 18, 2025 15:00:00").getTime();

// Обновляем обратный отсчёт каждую секунду
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

  // Если отсчёт завершён
  if (distance < 0) {
    clearInterval(countdownfunction);
    document.getElementById("countdown-timer").innerHTML = "<h3>Событие началось!</h3>";
  }
}, 1000);
