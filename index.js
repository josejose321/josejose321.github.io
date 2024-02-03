AOS.init();

function start() {
    return {
        isConfetti: true,
        interval: null,
        btnLabel: "YES!",

        iterator: 0,
        isYes: false,
        gifSads: [
            "https://media.tenor.com/0rPxHhK3iAAAAAAi/sourav-shy.gif",
            "https://media.tenor.com/1TAm8uclksYAAAAi/dm4uz3-foekoe.gif",
            "https://media1.tenor.com/m/BYZf0mMHcY4AAAAC/%E7%9A%849.gif",
            "https://media1.tenor.com/m/N2TRC6U84MAAAAAC/sad-emong-sticker.gif",
            "https://media1.tenor.com/m/zwuefXVe4mEAAAAC/sad-face.gif",
            "https://media1.tenor.com/m/5iEotAx1LqkAAAAC/sad-guy-going-to-corner.gif",
            "https://media1.tenor.com/m/YIF1G3YqwucAAAAC/kie.gif",
            "https://media1.tenor.com/m/GVztjQirRZMAAAAC/seriously-qoobee.gif",
            "https://media1.tenor.com/m/iDLclWLUuq8AAAAC/cry-tear.gif",
            "https://media1.tenor.com/m/43Pgszkj_eEAAAAd/baby-sad-cute.gif"

        ],
        noLabelArray: [
            "NO!",
            "Sure na yan?",
            "Mahibi na ba ako?",
            "Naghihibi na ako :'(",
            "Di mo na ba ako love?",
            "Bahala ka jan",
            ":<",
            "Sige lang baya :)",
            "Grabe talaga di ako love :<",
            ":("
        ],
        gif: "https://media.tenor.com/_xr0HcLB4fAAAAAi/sticker.gif",
        noLabel: "NO!",

        init() {
            // this.showConfetti()
            this.gif = this.gifSads[0]
            this.noLabel = this.noLabelArray[0]
        },
        confetti() {
            if (this.isConfetti) {
                clearInterval(this.interval);
                this.isConfetti = false;
                this.btnLabel = "Start"
            } else {
                this.showConfetti()
                this.isConfetti = true;
                this.btnLabel = "Stop"
            }
        },
        noFunction() {
            this.iterator++

                if (this.iterator >= this.noLabelArray.length) {
                    this.iterator = 0
                }
            this.noLabel = this.noLabelArray[this.iterator]
            this.gif = this.gifSads[this.iterator]

        },
        yesFunction() {
            this.isYes = true
            this.showConfetti()
            this.showSweetAlert()
        },
        showConfetti() {
            const jsConfetti = new JSConfetti();

            this.interval = setInterval(function() {
                jsConfetti.addConfetti({
                    emojis: ['🌈', '⚡️', '💥', '✨', '💫', '🌸']
                })
            }, 1000)
        },

        showSweetAlert() {
            Swal.fire({
                title: "I love you hehehe",
                background: "#fff url(/images/trees.png)",
                imageUrl: "https://media.tenor.com/ofb2hPaMsvoAAAAi/pentol-quby.gif",
                imageWidth: 200,
                imageHeight: 200,
                backdrop: `
                  rgba(0,0,123,0.4)
                  url("/images/nyan-cat.gif")
                  left top
                  no-repeat
                `
            });
        }
    }
}