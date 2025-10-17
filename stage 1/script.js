const timeElement = document.getElementById("user-time");

function updateTime() {
  timeElement.textContent = Date.now().toString();
}

updateTime();
setInterval(updateTime, 1000);
