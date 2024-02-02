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
    // Prevent default action if it's necessary
    // For a select dropdown, the default action does not need to be prevented.

    // Find the element that corresponds to the id provided by the dropdown.
    const targetElement = document.getElementById(sectionId);

    if (targetElement) {
        // Calculate the position of the target element.
        const offset = 0; // Adjust this if you need some spacing above the target section.
        const topPosition = targetElement.offsetTop - offset;

        // Smooth scroll to the target element.
        window.scrollTo({
            top: topPosition,
            behavior: 'smooth'
        });
    } else {
        console.error("Element with id '" + sectionId + "' was not found.");
    }
}
