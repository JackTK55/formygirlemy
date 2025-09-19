// === MOTOR ROMÂNTICO CORRIGIDO ===

class RomanticEngine {
    constructor() {
        this.eyeImages = [
            'https://i.imgur.com/xNhzvoq.png',
            'https://i.imgur.com/P0R8uS2.png'
        ];
        this.currentEyeIndex = 0;
        this.isTransitioning = false;

        this.init();
    }

    init() {
        this.createStarField();
        this.startEyeAnimation();
        this.setupEventListeners();
        this.startContinuousEffects();
    }

    // === CAMPO DE ESTRELAS ===
    createStarField() {
        const container = document.querySelector('.stars-layer');
        if (!container) return;

        for (let i = 0; i < 50; i++) {
            const star = document.createElement('div');
            star.style.position = 'absolute';
            star.style.width = Math.random() * 2 + 1 + 'px';
            star.style.height = star.style.width;
            star.style.backgroundColor = 'white';
            star.style.borderRadius = '50%';
            star.style.left = Math.random() * 100 + '%';
            star.style.top = Math.random() * 100 + '%';
            star.style.opacity = Math.random() * 0.8 + 0.2;
            star.style.animation = 'twinkle ' + (Math.random() * 3 + 2) + 's ease-in-out infinite';

            container.appendChild(star);
        }
    }

    // === ANIMAÇÃO DOS OLHOS ===
    startEyeAnimation() {
        setInterval(() => {
            if (!this.isTransitioning) {
                this.switchEye();
            }
        }, 4000);
    }

    switchEye() {
        this.isTransitioning = true;
        const eyeImg = document.querySelector('.eye-image');
        if (!eyeImg) return;

        // Efeito de transição
        eyeImg.classList.add('transitioning');

        setTimeout(() => {
            // Trocar imagem
            this.currentEyeIndex = (this.currentEyeIndex + 1) % this.eyeImages.length;
            eyeImg.src = this.eyeImages[this.currentEyeIndex];

            setTimeout(() => {
                eyeImg.classList.remove('transitioning');
                this.isTransitioning = false;

                // Criar partículas
                this.createTransitionParticles();
            }, 500);
        }, 500);
    }

    createTransitionParticles() {
        const eyeElement = document.querySelector('.eye-sphere');
        if (!eyeElement) return;

        const rect = eyeElement.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        for (let i = 0; i < 8; i++) {
            const particle = document.createElement('div');
            particle.className = 'magic-particle';
            particle.style.left = centerX + 'px';
            particle.style.top = centerY + 'px';

            document.body.appendChild(particle);

            const angle = (i * 45) * (Math.PI / 180);
            const distance = 60;
            const endX = centerX + Math.cos(angle) * distance;
            const endY = centerY + Math.sin(angle) * distance;

            // Animação simples usando requestAnimationFrame
            this.animateParticle(particle, centerX, centerY, endX, endY);
        }
    }

    animateParticle(particle, startX, startY, endX, endY) {
        let progress = 0;
        const duration = 1000;
        const startTime = Date.now();

        const animate = () => {
            const currentTime = Date.now();
            progress = (currentTime - startTime) / duration;

            if (progress >= 1) {
                particle.remove();
                return;
            }

            const currentX = startX + (endX - startX) * progress;
            const currentY = startY + (endY - startY) * progress;

            particle.style.left = currentX + 'px';
            particle.style.top = currentY + 'px';
            particle.style.opacity = 1 - progress;

            requestAnimationFrame(animate);
        };

        animate();
    }

    // === REVELAÇÃO DO AMOR ===
    revealLove() {
        const modal = document.querySelector('.divine-revelation');
        if (!modal) return;

        modal.classList.add('active');
        this.createHeartRain();

        // Vibração se disponível
        if (navigator.vibrate) {
            navigator.vibrate([200, 100, 200]);
        }
    }

    closeLove() {
        const modal = document.querySelector('.divine-revelation');
        if (!modal) return;

        modal.classList.remove('active');
    }

    createHeartRain() {
        const hearts = ['💖', '💕', '💗', '💝'];

        for (let i = 0; i < 20; i++) {
            setTimeout(() => {
                const heart = document.createElement('div');
                heart.className = 'floating-love';
                heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];
                heart.style.left = Math.random() * 100 + '%';
                heart.style.fontSize = Math.random() * 10 + 15 + 'px';

                document.body.appendChild(heart);

                setTimeout(() => {
                    if (heart.parentNode) {
                        heart.remove();
                    }
                }, 4000);
            }, i * 100);
        }
    }

    // === EXPLOSÃO MÁGICA ===
    createMagicExplosion(element) {
        const rect = element.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        // Criar corações explosivos
        for (let i = 0; i < 12; i++) {
            const heart = document.createElement('div');
            heart.innerHTML = '💖';
            heart.className = 'floating-love';
            heart.style.left = centerX + 'px';
            heart.style.top = centerY + 'px';
            heart.style.fontSize = '16px';
            heart.style.position = 'fixed';
            heart.style.zIndex = '1000';

            document.body.appendChild(heart);

            const angle = (i * 30) * (Math.PI / 180);
            const distance = 100;
            const endX = centerX + Math.cos(angle) * distance;
            const endY = centerY + Math.sin(angle) * distance;

            this.animateHeart(heart, centerX, centerY, endX, endY);
        }
    }

    animateHeart(heart, startX, startY, endX, endY) {
        let progress = 0;
        const duration = 800;
        const startTime = Date.now();

        const animate = () => {
            const currentTime = Date.now();
            progress = (currentTime - startTime) / duration;

            if (progress >= 1) {
                heart.remove();
                return;
            }

            const currentX = startX + (endX - startX) * progress;
            const currentY = startY + (endY - startY) * progress;

            heart.style.left = currentX + 'px';
            heart.style.top = currentY + 'px';
            heart.style.opacity = 1 - progress;
            heart.style.transform = 'scale(' + (1 - progress * 0.5) + ')';

            requestAnimationFrame(animate);
        };

        animate();
    }

    // === EFEITOS CONTÍNUOS ===
    startContinuousEffects() {
        // Corações flutuantes
        setInterval(() => {
            const modal = document.querySelector('.divine-revelation');
            if (!modal || !modal.classList.contains('active')) {
                this.createFloatingHeart();
            }
        }, 5000);
    }

    createFloatingHeart() {
        const heart = document.createElement('div');
        heart.innerHTML = '💕';
        heart.className = 'floating-love';
        heart.style.left = Math.random() * 100 + '%';
        heart.style.fontSize = Math.random() * 8 + 12 + 'px';

        document.body.appendChild(heart);

        setTimeout(() => {
            if (heart.parentNode) {
                heart.remove();
            }
        }, 4000);
    }

    // === EVENT LISTENERS ===
    setupEventListeners() {
        // Clique no coração
        const heart = document.querySelector('.premium-heart');
        if (heart) {
            heart.addEventListener('click', () => {
                this.revealLove();
            });
        }

        // Clique nos olhos
        const eyeSphere = document.querySelector('.eye-sphere');
        if (eyeSphere) {
            eyeSphere.addEventListener('click', (e) => {
                this.createMagicExplosion(e.target);
                this.switchEye();
            });
        }

        // Botão de fechar
        const closeBtn = document.querySelector('.divine-button');
        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                this.closeLove();
            });
        }

        // Teclado
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeLove();
            }
            if (e.key === ' ') {
                e.preventDefault();
                this.revealLove();
            }
        });

        // Mouse sparkles
        document.addEventListener('mousemove', (e) => {
            if (Math.random() > 0.98) {
                this.createMouseSparkle(e.clientX, e.clientY);
            }
        });
    }

    createMouseSparkle(x, y) {
        const sparkle = document.createElement('div');
        sparkle.style.position = 'fixed';
        sparkle.style.left = x + 'px';
        sparkle.style.top = y + 'px';
        sparkle.style.width = '3px';
        sparkle.style.height = '3px';
        sparkle.style.background = '#ffd700';
        sparkle.style.borderRadius = '50%';
        sparkle.style.pointerEvents = 'none';
        sparkle.style.zIndex = '999';
        sparkle.style.transform = 'translate(-50%, -50%)';

        document.body.appendChild(sparkle);

        setTimeout(() => {
            if (sparkle.parentNode) {
                sparkle.remove();
            }
        }, 500);
    }
}

// === INICIALIZAÇÃO ===
let romanticEngine;

document.addEventListener('DOMContentLoaded', () => {
    // Criar estilos adicionais
    const style = document.createElement('style');
    style.textContent = `
        @keyframes twinkle {
            0%, 100% { opacity: 0.3; }
            50% { opacity: 1; }
        }
    `;
    document.head.appendChild(style);

    // Inicializar engine
    romanticEngine = new RomanticEngine();
});

// === FUNÇÕES GLOBAIS ===
function revealLove() {
    if (romanticEngine) {
        romanticEngine.revealLove();
    }
}

function closeLoveMessage() {
    if (romanticEngine) {
        romanticEngine.closeLove();
    }
}