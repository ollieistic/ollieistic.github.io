function updateSwedenTime() {
  const timeZone = "Europe/Stockholm";
  const options = {
    timeZone,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false
  };

  const formatter = new Intl.DateTimeFormat([], options);
  const now = new Date();
  const timeElement = document.getElementById("sweden-time");

  if (timeElement) {
    timeElement.textContent = formatter.format(now);
  }
}

setInterval(updateSwedenTime, 1000);
updateSwedenTime();