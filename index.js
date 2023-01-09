$(document).ready(function() {

    let interval;
    let isConfetti = true;

    showConfetti()

    console.log('ready');




    $("#btnClick").on('click', function() {
        if (isConfetti) {
            clearInterval(interval);
            isConfetti = false;
            $(this).text("Start")
        } else {
            showConfetti()
            isConfetti = true;
            $(this).text("Stop")
        }

    })


    function showConfetti() {
        const jsConfetti = new JSConfetti();

        interval = setInterval(function() {
            jsConfetti.addConfetti({
                emojis: ['🌈', '⚡️', '💥', '✨', '💫', '🌸']
            })
        }, 5000)
    }
});