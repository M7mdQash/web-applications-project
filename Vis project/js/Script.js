function toggleDarkMode() {
    const themeStyles = document.getElementById('themeStyles');
    const isDarkMode = themeStyles.href.includes('Dark-style');

    if (isDarkMode) {
        themeStyles.href = 'css/Light-style.css';
    } else {
        themeStyles.href = 'css/Dark-style.css';
    }
}

function navigateToPage(sectionId) {
    const section = document.getElementById(sectionId);
    if(section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

const menu = document.getElementById("menu");
const menuItems = document.querySelectorAll('.menu-item');

menuItems.forEach((item, index) => {
  item.addEventListener('mouseover', () => {
    menu.dataset.activeIndex = index;
    // Update background pattern and image based on active index
    document.getElementById("menu-background-pattern").style.backgroundPosition = `${index * -25}% 0%`;
    document.getElementById("menu-background-image").style.backgroundPosition = `center ${45 + (index * 5)}%`;
  });
});
