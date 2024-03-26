
function setCountdown() {
    minutes = document.getElementById("minutesInput").value;
    seconds = document.getElementById("secondsInput").value;

     countDownDate = new Date().getTime() + (minutes * 60000) + (seconds * 1000);

    const x = setInterval( function() {
        var now = new Date().getTime();
        var distance = countDownDate - now;

        if (distance < 0) {
            clearInterval(x);
            document.getElementById("countdown").innerHTML = "Countdown End";
            
    }

         min = Math.round((distance % (1000 * 60 * 60)) / (1000 * 60));
         sec = Math.round((distance % (1000 * 60)) / 1000);

        document.getElementById("countdown").innerHTML = min + " m " + sec + " s";
    }, 1000);
}

