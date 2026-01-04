AOS.init();

function start() {
    return {
        isYes: false,
        btnLabel: "YES! 💖",
        noLabel: "NO",
        gif: "https://media.tenor.com/_xr0HcLB4fAAAAAi/sticker.gif",
        noCount: 0,
        
        init() {
            // Initialize AOS animations
            AOS.init({
                duration: 1000,
                once: false,
                mirror: true
            });
        },
        
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
                html: '<p style="font-size: 1.2rem;">See you on February 14! 💖</p><p style="font-size: 1rem; margin-top: 10px;">Get ready for an amazing day! 🌹</p>',
                icon: 'success',
                confirmButtonText: 'Can\'t wait! 😊',
                confirmButtonColor: '#f5576c',
                background: '#fff',
                backdrop: `
                    rgba(102, 126, 234, 0.4)
                    left top
                    no-repeat
                `
            });
        },
        
        noFunction() {
            this.noCount++;
            
            // Change button label to make it harder to say no
            const noMessages = [
                "Are you sure? 🥺",
                "Think again! 💭",
                "Pretty please? 🙏",
                "Don't break my heart! 💔",
                "Give me a chance! ✨",
                "You'll regret this! 😢",
                "Last chance! ⏰",
                "Really? REALLY? 😭",
                "My heart is breaking! 💔💔",
                "Okay fine... just YES! 😤"
            ];
            
            if (this.noCount < noMessages.length) {
                this.noLabel = noMessages[this.noCount];
            } else {
                this.noLabel = "Just say YES! 💖";
            }
            
            // Make YES button bigger and NO button smaller
            const yesBtn = document.querySelector('button[x-text="btnLabel"]');
            const noBtn = document.querySelector('button[x-text="noLabel"]');
            
            if (yesBtn && noBtn) {
                const currentYesSize = parseFloat(window.getComputedStyle(yesBtn).fontSize);
                const currentNoSize = parseFloat(window.getComputedStyle(noBtn).fontSize);
                
                yesBtn.style.fontSize = (currentYesSize + 2) + 'px';
                yesBtn.style.padding = (15 + this.noCount * 2) + 'px ' + (40 + this.noCount * 5) + 'px';
                
                noBtn.style.fontSize = Math.max(10, currentNoSize - 1) + 'px';
                noBtn.style.padding = Math.max(8, 15 - this.noCount) + 'px ' + Math.max(20, 40 - this.noCount * 2) + 'px';
            }
            
            // Change GIF to sadder ones as user keeps clicking no
            const sadGifs = [
                "https://media.tenor.com/FIST03nj9wwAAAAi/milk-and-mocha-sad.gif",
                "https://media.tenor.com/3s8IHYmbl-8AAAAi/sad-cat.gif",
                "https://media.tenor.com/q-h7AlA8AggAAAAi/peach-cat-crying.gif",
                "https://media.tenor.com/GSE3uJMKSP8AAAAi/sad.gif",
                "https://media.tenor.com/FwAPsWe-LPYAAAAC/sad-dog.gif"
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

// Add shake animation to CSS dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        10%, 30%, 50%, 70%, 90% { transform: translateX(-10px); }
        20%, 40%, 60%, 80% { transform: translateX(10px); }
    }
`;
document.head.appendChild(style);
