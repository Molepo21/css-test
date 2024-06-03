document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.querySelector('.sidebar');
    const closeBtn = document.querySelector('.close-btn');
    const lightModeBtn = document.querySelector('.light-mode-btn');
    const darkModeBtn = document.querySelector('.dark-mode-btn');
    const modalBtn = document.querySelector('.modalBtn');
    const modal = document.getElementById('myModal');
    const closeModal = document.querySelector('.modal .close');
    const cancelBtn = document.querySelector('.cancelBtn');

    closeBtn.addEventListener('click', () => {
        sidebar.classList.toggle('closed');
    });

    lightModeBtn.addEventListener('click', () => {
        document.body.classList.remove('dark-mode');
        document.body.classList.add('light-mode');
    });

    darkModeBtn.addEventListener('click', () => {
        document.body.classList.remove('light-mode');
        document.body.classList.add('dark-mode');
    });

    // Initialize the theme based on current mode
    if (document.body.classList.contains('dark-mode')) {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.add('light-mode');
    }




    
    modalBtn.addEventListener('click', () => {
        modal.style.display = 'block';
    });

    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    cancelBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Initialize the theme based on current mode
    if (document.body.classList.contains('dark-mode')) {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.add('light-mode');
    }
});
