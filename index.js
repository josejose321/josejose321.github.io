// Initialize AOS animations
AOS.init({
    duration: 1000,
    once: false,
    mirror: true
});

function start() {
    return {
        isYes: false,
        btnLabel: "YES! 💖",
        noLabel: "NO! 💔",
        gif: "./assets/cute.gif",
        noCount: 0,

        yesFunction() {
            this.isYes = true;

            // Trigger confetti
            if (typeof JSConfetti !== 'undefined') {
                const jsConfetti = new JSConfetti();
                jsConfetti.addConfetti({
                    emojis: ['💖', '💕', '💗', '💓', '💝', '❤️', '🌹'],
                    emojiSize: 50,
                    confettiNumber: 100,
                });

                // Additional confetti burst after 1 second
                setTimeout(() => {
                    jsConfetti.addConfetti({
                        confettiColors: [
                            '#ff6b9d', '#c86dd7', '#f093fb', '#f5576c',
                            '#ffd93d', '#6bcf7f'
                        ],
                        confettiNumber: 150,
                    });
                }, 1000);
            }

            // Show sweet alert
            Swal.fire({
                title: 'Yay! 🎉',
                html: '<p style="font-size: 1.2rem;">See you on February 14, BEBE! 💖</p><p style="font-size: 1rem; margin-top: 10px;">Get ready for an amazing day! 🌹🫰🫰🫰</p>',
                icon: 'success',
                confirmButtonText: 'Message me sa FB! 😊',
                confirmButtonColor: '#f5576c',
                showCancelButton: true,
                cancelButtonText: 'Sa NGL na lang muna😅',
                cancelButtonColor: '#6bcf7f',
                background: '#fff',
                backdrop: `
                    rgba(102, 126, 234, 0.4)
                    left top
                    no-repeat
                `
            }).then((result) => {
                if (result.isConfirmed) {
                    window.location.href = "https://www.ngl.link/jose26459"; // Redirect to chat
                } else {
                    window.location.href = "https://www.ngl.link/jose26459"; // Redirect to chat
                }
            });

            // Re-initialize AOS for celebration animations
            setTimeout(() => {
                AOS.refresh();
            }, 100);
        },

        handleNoHover(event) {
            const noBtn = event.target;
            const maxX = window.innerWidth - noBtn.offsetWidth - 50;
            const maxY = window.innerHeight - noBtn.offsetHeight - 50;

            // Generate random position away from current position
            let randomX = Math.random() * maxX;
            let randomY = Math.random() * maxY;

            // Make sure the new position is far enough from the cursor
            const minDistance = 150;
            const mouseX = event.clientX;
            const mouseY = event.clientY;

            // Calculate distance and adjust if too close
            const distance = Math.sqrt(Math.pow(randomX - mouseX, 2) + Math.pow(randomY - mouseY, 2));
            if (distance < minDistance) {
                randomX = mouseX + (Math.random() > 0.5 ? minDistance : -minDistance);
                randomY = mouseY + (Math.random() > 0.5 ? minDistance : -minDistance);
            }

            // Keep button within viewport
            randomX = Math.max(20, Math.min(randomX, maxX));
            randomY = Math.max(20, Math.min(randomY, maxY));

            noBtn.style.position = 'fixed';
            noBtn.style.left = randomX + 'px';
            noBtn.style.top = randomY + 'px';
            noBtn.style.transition = 'all 0.3s ease';
        },

        noFunction(event) {
            this.handleNoHover(event);
            this.noCount++;

            // Change button label to make it harder to say no
            const noMessages = [
                "SURE KA NA PO? 🥺",
                "DI MO ME LAB? 💭",
                "PLEASE? NAIIYAK NA ME 🙏",
                "Ma sanaol na lang ako kani sa feb 14! 💔",
                "BAKA MAGBAGO PA ISIP MO? ✨",
                "ARAY KO PAKAK! 😢",
                "PLEASE PO! ⏰",
                "REALLY BA? 😭",
                "NAKAKAIYAK! 💔💔",
                "MAG YES KA NA LANG! 😤"
            ];

            if (this.noCount <= noMessages.length) {
                this.noLabel = noMessages[this.noCount - 1];
            } else {
                this.noLabel = "MAG YES NA NGANI! 💖";
            }

            // Make YES button bigger and NO button smaller
            const yesBtn = document.querySelector('.btn-primary:not(.btn-no)');
            const noBtn = document.querySelector('.btn-no');

            if (yesBtn && noBtn) {
                const currentYesSize = parseFloat(window.getComputedStyle(yesBtn).fontSize) || 24;
                const currentNoSize = parseFloat(window.getComputedStyle(noBtn).fontSize) || 24;

                yesBtn.style.fontSize = (currentYesSize + 2) + 'px';
                yesBtn.style.padding = (15 + this.noCount * 2) + 'px ' + (40 + this.noCount * 5) + 'px';

                noBtn.style.fontSize = Math.max(10, currentNoSize - 1) + 'px';
                noBtn.style.padding = Math.max(8, 15 - this.noCount) + 'px ' + Math.max(20, 40 - this.noCount * 2) + 'px';
            }

            // Change GIF to sadder ones as user keeps clicking no
            const sadGifs = [
                "./assets/sad1.gif",
                "./assets/sad2.gif",
                "./assets/sad3.gif",
                "./assets/sad4.gif",
                "./assets/sad5.gif",
                "./assets/sad6.gif",
                "./assets/sad7.gif",
            ];

            if (this.noCount <= sadGifs.length) {
                this.gif = sadGifs[this.noCount - 1];
            }

            // Shake animation
            const container = document.querySelector('.container');
            if (container) {
                container.style.animation = 'shake 0.5s';
                setTimeout(() => {
                    container.style.animation = '';
                }, 500);
            }
        }
    }
}