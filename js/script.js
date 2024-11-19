document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("[id^='section']");
    const pageIndicator = document.getElementById("page-indicator");

    // Intersection Observer Optionen
    const observerOptions = {
        root: null,
        threshold: 0.6, // sichtbarkeit in %
    };

    // Intersection Observer zur Überwachung der Sichtbarkeit der Abschnitte
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const sectionId = entry.target.getAttribute("id");
                const currentPage = sectionId.replace("section", ""); // Extrahiert die Zahl aus der ID
                pageIndicator.textContent = `${currentPage}-5`; // Aktualisiert die Seitenzahl bis 5
            }
        });
    }, observerOptions);

    // Startet das Beobachten für jeden Abschnitt
    sections.forEach((section) => observer.observe(section));
});

document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("[id^='section']");
    const navButtons = document.querySelectorAll(".nav-button");

    // Intersection Observer-Optionen
    const observerOptions = {
        root: null,
        threshold: 0.6, // Aktiviert die Ansicht, wenn 60 % des Abschnitts sichtbar sind
    };

    // Intersection Observer zur Überwachung der Sichtbarkeit der Abschnitte
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            const sectionId = entry.target.getAttribute("id");
            const button = document.querySelector(`[data-section="${sectionId}"]`);

            // Wenn der Abschnitt sichtbar ist, füge die Hover-Farbe hinzu
            if (entry.isIntersecting) {
                navButtons.forEach((btn) => {
                    btn.classList.remove("text-custom-green3"); // Entferne Hover-Farbe von allen Buttons
                    btn.classList.add("text-custom-green1"); // Setze Standardfarbe
                });
                button.classList.add("text-custom-green3"); // Setze Hover-Farbe auf aktiven Button
                button.classList.remove("text-custom-green1"); // Entferne Standardfarbe vom aktiven Button
            }
        });
    }, observerOptions);

    sections.forEach((section) => observer.observe(section));
});

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({behavior: 'smooth'});
}

document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.follow-button');

    buttons.forEach((button) => {
        let animationFrameId;
        const sensitivity = 0.6; // Wert zwischen 0 und 1 für sanftere Bewegungen
        const maxDistance = 80; // Maximale Verschiebung in Pixeln für geringere Bewegung

        const content = button.querySelector('.button-content');

        function onMouseMove(event) {
            const mouseX = event.clientX;
            const mouseY = event.clientY;

            if (animationFrameId) {
                cancelAnimationFrame(animationFrameId);
            }

            animationFrameId = requestAnimationFrame(() => {
                const rect = button.getBoundingClientRect();
                const buttonCenterX = rect.left + rect.width / 2;
                const buttonCenterY = rect.top + rect.height / 2;

                const dx = mouseX - buttonCenterX;
                const dy = mouseY - buttonCenterY;

                const distance = Math.sqrt(dx * dx + dy * dy);
                const angle = Math.atan2(dy, dx);

                // Skalieren und Begrenzen der Distanz
                const scaledDistance = distance * sensitivity;
                const limitedDistance = Math.min(scaledDistance, maxDistance);

                // Berechnung der neuen Offsets
                const offsetX = Math.cos(angle) * limitedDistance;
                const offsetY = Math.sin(angle) * limitedDistance;

                content.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
            });
        }

        button.addEventListener('mouseenter', () => {
            document.addEventListener('mousemove', onMouseMove);
        });

        button.addEventListener('mouseleave', () => {
            document.removeEventListener('mousemove', onMouseMove);
            content.style.transform = '';
            if (animationFrameId) {
                cancelAnimationFrame(animationFrameId);
            }
        });
    });
});