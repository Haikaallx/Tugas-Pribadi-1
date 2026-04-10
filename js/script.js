const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

if (darkModeToggle) {
    // Cek preferensi yang tersimpan
    if (localStorage.getItem('darkMode') === 'enabled') {
        body.classList.add('dark-mode');
        darkModeToggle.textContent = '☀️';
    }
    
    darkModeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('darkMode', 'enabled');
            darkModeToggle.textContent = '☀️';
        } else {
            localStorage.setItem('darkMode', 'disabled');
            darkModeToggle.textContent = '🌙';
        }
    });
}

const readMoreBtn = document.getElementById('readMoreBtn');
const shortDesc = document.getElementById('shortDesc');
const fullDesc = document.getElementById('fullDesc');

if (readMoreBtn && shortDesc && fullDesc) {
    let isExpanded = false;
    
    readMoreBtn.addEventListener('click', () => {
        if (!isExpanded) {
            shortDesc.classList.add('hidden');
            fullDesc.classList.remove('hidden');
            readMoreBtn.textContent = 'Tampilkan Lebih Sedikit ↑';
            isExpanded = true;
        } else {
            shortDesc.classList.remove('hidden');
            fullDesc.classList.add('hidden');
            readMoreBtn.textContent = 'Tampilkan Lebih Banyak ↓';
            isExpanded = false;
        }
    });
}

const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        let isValid = true;
        
        const nama = document.getElementById('nama').value.trim();
        const email = document.getElementById('email').value.trim();
        
        document.querySelectorAll('.error-message').forEach(el => el.textContent = '');
        document.querySelectorAll('.form-group input, .form-group textarea').forEach(el => {
            el.classList.remove('error-input');
        });
        
        if (nama === '') {
            document.getElementById('namaError').textContent = '❌ Nama harus diisi!';
            document.getElementById('nama').classList.add('error-input');
            isValid = false;
        } else if (nama.length < 2) {
            document.getElementById('namaError').textContent = '❌ Nama minimal 2 karakter!';
            document.getElementById('nama').classList.add('error-input');
            isValid = false;
        }
        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email === '') {
            document.getElementById('emailError').textContent = '❌ Email harus diisi!';
            document.getElementById('email').classList.add('error-input');
            isValid = false;
        } else if (!emailRegex.test(email)) {
            document.getElementById('emailError').textContent = '❌ Email tidak valid!';
            document.getElementById('email').classList.add('error-input');
            isValid = false;
        }
        
        if (isValid) {
            formMessage.textContent = `✅ Terima kasih ${nama}! Pesan Anda telah terkirim.`;
            formMessage.className = 'form-message success';
            contactForm.reset();
            
            setTimeout(() => {
                formMessage.textContent = '';
                formMessage.className = 'form-message';
            }, 4000);
        } else {
            formMessage.textContent = '⚠️ Mohon periksa kembali form Anda!';
            formMessage.className = 'form-message error';
            
            setTimeout(() => {
                formMessage.textContent = '';
                formMessage.className = 'form-message';
            }, 4000);
        }
    });
    
    const namaInput = document.getElementById('nama');
    const emailInput = document.getElementById('email');
    
    if (namaInput) {
        namaInput.addEventListener('input', function() {
            if (this.value.trim() !== '') {
                document.getElementById('namaError').textContent = '';
                this.classList.remove('error-input');
            }
        });
    }
    
    if (emailInput) {
        emailInput.addEventListener('input', function() {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (this.value.trim() !== '' && emailRegex.test(this.value.trim())) {
                document.getElementById('emailError').textContent = '';
                this.classList.remove('error-input');
            }
        });
    }
}

const menuToggle = document.getElementById('menuToggle');
const nav = document.querySelector('nav');

if (menuToggle && nav) {
    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
    });
}

const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const galleryItems = document.querySelectorAll('.gallery-item');
const closeBtn = document.querySelector('.close');

galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        const imgSrc = item.getAttribute('data-image') || item.querySelector('img').src;
        if (lightboxImg) lightboxImg.src = imgSrc;
        if (lightbox) lightbox.classList.add('active');
    });
});

if (closeBtn) {
    closeBtn.addEventListener('click', () => {
        if (lightbox) lightbox.classList.remove('active');
    });
}

if (lightbox) {
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.classList.remove('active');
        }
    });
}

const instagramModal = document.getElementById('instagramModal');
const instagramLinks = document.querySelectorAll('.instagram-link');
const instagramClose = document.querySelector('.instagram-close');

function openInstagramModal(e) {
    e.preventDefault();
    if (instagramModal) {
        instagramModal.classList.add('active');
    }
}

function closeInstagramModal() {
    if (instagramModal) {
        instagramModal.classList.remove('active');
    }
}

instagramLinks.forEach(link => {
    link.addEventListener('click', openInstagramModal);
});

if (instagramClose) {
    instagramClose.addEventListener('click', closeInstagramModal);
}

if (instagramModal) {
    instagramModal.addEventListener('click', (e) => {
        if (e.target === instagramModal) {
            closeInstagramModal();
        }
    });
}

const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('nav a').forEach(link => {
    if (link.getAttribute('href') === currentPage) {
        link.classList.add('active');
    }
});

console.log('✅ Website berjalan dengan baik!');