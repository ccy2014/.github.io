function toggleLanguage() {
    const cnElements = document.querySelectorAll('.cn');
    const enElements = document.querySelectorAll('.en');
    
    cnElements.forEach(el => el.style.display = el.style.display === 'none' ? 'inline' : 'none');
    enElements.forEach(el => el.style.display = el.style.display === 'none' ? 'inline' : 'none');
}