const button = document.getElementById("stop-button");
function showTime() {const currentime = new Date();
    const time = `${currentime.getHours()}:${currentime.getMinutes()}:${currentime.getSeconds()}`;
    document.getElementById("time").innerText = time;
}
let interval = setInterval(showTime, 1000);
button.addEventListener('click', () => {clearInterval(interval);});