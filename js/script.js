function scrollToSection(sectionNumber) {
    const section = document.querySelector(`#section-${sectionNumber}`);
    section.scrollIntoView({behavior: 'smooth'});
}