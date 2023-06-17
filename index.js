AOS.init();

function start() {
    return {
        isConfetti: true,
        interval: null,
        button: $("#btnClick"),

        init() {
            this.showConfetti()
        },
        confetti() {
            if (this.isConfetti) {
                clearInterval(this.interval);
                this.isConfetti = false;
                this.button.text("Start")
            } else {
                this.showConfetti()
                this.isConfetti = true;
                this.button.text("Stop")
            }
        },
        showConfetti() {
            const jsConfetti = new JSConfetti();

            this.interval = setInterval(function() {
                jsConfetti.addConfetti({
                    emojis: ['🌈', '⚡️', '💥', '✨', '💫', '🌸']
                })
            }, 4000)
        }
    }
}