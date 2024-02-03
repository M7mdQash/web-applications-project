document.addEventListener('DOMContentLoaded', () => {
    const switchBtn = document.getElementById('lang-switch');

    switchBtn.addEventListener('click', () => {
        const currentLang = switchBtn.textContent.includes('English') ? 'en' : 'ar';
        document.querySelectorAll('[data-lang-ar], [data-lang-en]').forEach(el => {
            el.textContent = el.getAttribute(`data-lang-${currentLang}`);
        });
        document.querySelectorAll('[data-lang-title-ar], [data-lang-title-en]').forEach(el => {
            el.setAttribute('title', el.getAttribute(`data-lang-title-${currentLang}`));
        });
        switchBtn.textContent = currentLang === 'en' ? 'العربية' : 'English'; // Toggle button text
        document.documentElement.lang = currentLang; // Change lang attribute
        document.documentElement.dir = currentLang === 'en' ? 'ltr' : 'rtl'; // Change direction
    });
});
