function toggleDarkMode() {
    const themeStyles = document.getElementById('themeStyles');
    const isDarkMode = themeStyles.href.includes('Dark-style');

    if (isDarkMode) {
        themeStyles.href = 'css/Light-style.css';
    } else {
        themeStyles.href = 'css/Dark-style.css';
    }
}