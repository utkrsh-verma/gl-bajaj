// Countdown timer setup
document.addEventListener('DOMContentLoaded', () => {
    const countdownElement = document.querySelector('.countdown-timer');

    // Set a target launch date (example: 30 days from now)
    const launchDate = new Date();
    launchDate.setDate(launchDate.getDate() + 30);

    function updateCountdown() {
        const now = new Date();
        const diff = launchDate - now;

        if (diff <= 0) {
            countdownElement.textContent = '🎉 We have launched! 🎉';
            return clearInterval(timerInterval);
        }

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);

        countdownElement.textContent =
            `${days}d : ${hours.toString().padStart(2, '0')}h : ` +
            `${minutes.toString().padStart(2, '0')}m : ${seconds.toString().padStart(2, '0')}s`;
    }

    updateCountdown();
    const timerInterval = setInterval(updateCountdown, 1000);
});
