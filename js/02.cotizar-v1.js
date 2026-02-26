function openSidebar() {
    document.getElementById('sidebarOverlay').classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeSidebar() {
    const sidebar = document.getElementById('sidebarOverlay');
    sidebar.classList.add('hidden');
    document.body.style.overflow = 'auto';
}

// Close sidebar on ESC key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeSidebar();
    }
});