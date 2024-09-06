document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('toggleMode');
    let darkMode = localStorage.getItem('darkMode') === 'true';

    function applyDarkMode(isDark) {
        document.body.classList.toggle('dark-mode', isDark);
        toggleButton.textContent = isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode';
        localStorage.setItem('darkMode', isDark);
    }

    // Apply saved dark mode setting on load
    applyDarkMode(darkMode);

    toggleButton.addEventListener('click', function () {
        darkMode = !darkMode;
        applyDarkMode(darkMode);
    });
});

