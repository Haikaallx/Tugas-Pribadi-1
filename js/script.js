// Mobile Menu Toggle
const menuToggle = document.getElementById('menuToggle');
const nav = document.querySelector('nav');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
    });
}

// Lightbox Gallery (untuk foto 16:9)
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const galleryItems = document.querySelectorAll('.gallery-item');
const closeBtn = document.querySelector('.close');

galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        const imgSrc = item.getAttribute('data-image') || item.querySelector('img').src;
        lightboxImg.src = imgSrc;
        lightbox.classList.add('active');
    });
});

if (closeBtn) {
    closeBtn.addEventListener('click', () => {
        lightbox.classList.remove('active');
    });
}

lightbox?.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.classList.remove('active');
    }
});

// Instagram Modal (untuk Profile Instagram 9:16)
const instagramModal = document.getElementById('instagramModal');
const instagramLinks = document.querySelectorAll('#instagramLink, #instagramLinkFooter, .instagram-link');
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

instagramModal?.addEventListener('click', (e) => {
    if (e.target === instagramModal) {
        closeInstagramModal();
    }
});

// Form Validation & Submit
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        let isValid = true;
        
        const nama = document.getElementById('nama').value.trim();
        const email = document.getElementById('email').value.trim();
        const pesan = document.getElementById('pesan').value.trim();
        
        document.querySelectorAll('.error-message').forEach(el => el.textContent = '');
        
        if (nama === '') {
            document.getElementById('namaError').textContent = 'Nama harus diisi';
            isValid = false;
        } else if (nama.length < 2) {
            document.getElementById('namaError').textContent = 'Nama minimal 2 karakter';
            isValid = false;
        }
        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email === '') {
            document.getElementById('emailError').textContent = 'Email harus diisi';
            isValid = false;
        } else if (!emailRegex.test(email)) {
            document.getElementById('emailError').textContent = 'Email tidak valid';
            isValid = false;
        }
        
        if (pesan === '') {
            document.getElementById('pesanError').textContent = 'Pesan harus diisi';
            isValid = false;
        } else if (pesan.length < 10) {
            document.getElementById('pesanError').textContent = 'Pesan minimal 10 karakter';
            isValid = false;
        }
        
        if (isValid) {
            formMessage.textContent = `Terima kasih ${nama}! Pesan Anda telah terkirim.`;
            formMessage.className = 'form-message success';
            contactForm.reset();
            
            setTimeout(() => {
                formMessage.textContent = '';
                formMessage.className = 'form-message';
            }, 5000);
        } else {
            formMessage.textContent = 'Mohon periksa kembali form Anda';
            formMessage.className = 'form-message error';
            
            setTimeout(() => {
                formMessage.textContent = '';
                formMessage.className = 'form-message';
            }, 5000);
        }
    });
}

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== "#") {
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});