document.querySelectorAll('.portfolio-item img').forEach(item => {
    item.addEventListener('mouseover', function() {
        this.src = this.getAttribute('data-gif');
    });
    item.addEventListener('mouseout', function() {
        this.src = this.getAttribute('data-static');
    });
});