document.addEventListener('DOMContentLoaded', () => {
    // 1. Acordeones para Resultados de Aprendizaje
    const raTriggers = document.querySelectorAll('.ra-trigger');
    
    raTriggers.forEach(trigger => {
        trigger.addEventListener('click', () => {
            const parent = trigger.closest('.ra-item');
            const isActive = parent.classList.contains('active');
            
            // Cerrar todos los acordeones
            document.querySelectorAll('.ra-item').forEach(item => {
                item.classList.remove('active');
            });
            
            // Si no estaba activo, abrir el seleccionado
            if (!isActive) {
                parent.classList.add('active');
            }
        });
    });

    // 2. Rúbrica Interactiva (Selector de niveles por fila)
    const levelCells = document.querySelectorAll('.rubric-table td.level-cell');
    
    levelCells.forEach(cell => {
        cell.addEventListener('click', () => {
            const row = cell.closest('tr');
            
            // Quitar selección previa de la misma fila
            row.querySelectorAll('td.level-cell').forEach(c => {
                c.classList.remove('selected');
            });
            
            // Seleccionar celda actual
            cell.classList.add('selected');
        });
    });

    // 3. Scroll Reveal (Efectos de entrada para elementos)
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };
    
    const revealCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
                observer.unobserve(entry.target); // Solo animar una vez
            }
        });
    };
    
    const observer = new IntersectionObserver(revealCallback, observerOptions);
    
    const elementsToReveal = document.querySelectorAll('.module-card, .stat-card, .profile-section');
    elementsToReveal.forEach(el => {
        // Inicializar invisibles
        el.style.opacity = '0';
        observer.observe(el);
    });
});
