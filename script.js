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
      sidebar.classList.remove('dark-theme');
      sidebar.classList.add('light-theme');
    });
  
    darkModeBtn.addEventListener('click', () => {
      sidebar.classList.remove('light-theme');
      sidebar.classList.add('dark-theme');
    });



     
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
    
    if (document.body.classList.contains('dark-mode')) {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.add('light-mode');
    }
  });
  