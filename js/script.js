window.addEventListener('load', function() {
    const preloader = document.getElementById('preloader');
    const mainContent = document.getElementById('mainContent');
    
    if (preloader && mainContent) {

        preloader.classList.add('hide');
        
        mainContent.classList.remove('hidden-content');
        
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500);
    }
});

const fadeElements = document.querySelectorAll('.fade-up');

function checkFadeIn() {
    fadeElements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight - 100;
        
        if (elementPosition < screenPosition) {
            element.style.animation = 'fadeUp 0.6s ease forwards';
        }
    });
}

window.addEventListener('load', checkFadeIn);
window.addEventListener('scroll', checkFadeIn);

const typingTextElement = document.getElementById('typing-text');
if (typingTextElement) {
    const words = [
        'Full-stack Developer',
        'Photographer 📷',
        'Videographer 🎥',
        'Tech Enthusiast 💻'
    ];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    
    function typeEffect() {
        const currentWord = words[wordIndex];
        
        if (isDeleting) {
            typingTextElement.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typingTextElement.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
        }
        
        if (!isDeleting && charIndex === currentWord.length) {
            isDeleting = true;
            setTimeout(typeEffect, 2000);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            setTimeout(typeEffect, 500);
        } else {
            setTimeout(typeEffect, isDeleting ? 50 : 100);
        }
    }
    
    typeEffect();
}

const scrollToTopBtn = document.getElementById('scrollToTopBtn');

if (scrollToTopBtn) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollToTopBtn.classList.add('show');
        } else {
            scrollToTopBtn.classList.remove('show');
        }
    });
    
    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

const skillSection = document.querySelector('.profile-skills-card');
const progressFills = document.querySelectorAll('.progress-fill');

if (skillSection && progressFills.length > 0) {
    let animated = false;
    
    function animateProgressBars() {
        if (animated) return;
        
        const sectionPosition = skillSection.getBoundingClientRect().top;
        const screenPosition = window.innerHeight;
        
        if (sectionPosition < screenPosition - 100) {
            progressFills.forEach(fill => {
                const width = fill.getAttribute('data-width');
                fill.style.width = width + '%';
            });
            animated = true;
        }
    }
    
    window.addEventListener('scroll', animateProgressBars);
    animateProgressBars();
}

const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

if (darkModeToggle) {
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

const emergencyBtn = document.getElementById('emergencyBtn');
if (emergencyBtn) {
    emergencyBtn.addEventListener('click', () => {
        alert('📞 Terima kasih telah menghubungi! Saya akan merespon pesan Anda dalam 24 jam.');
    });
}

const visitorName = document.getElementById('visitorName');
const greetBtn = document.getElementById('greetBtn');
const greetingMessage = document.getElementById('greetingMessage');

if (visitorName && greetBtn && greetingMessage) {
    greetBtn.addEventListener('click', () => {
        const name = visitorName.value.trim();
        
        if (name === '') {
            greetingMessage.innerHTML = '⚠️ Masukkan nama Anda terlebih dahulu.';
            greetingMessage.classList.add('show');
            setTimeout(() => {
                greetingMessage.classList.remove('show');
            }, 3000);
        } else {
            greetingMessage.innerHTML = `👋 Halo ${name}! Senang berkenalan dengan Anda. Terima kasih sudah mengunjungi portofolio saya.`;
            greetingMessage.classList.add('show');
            visitorName.value = '';
            setTimeout(() => {
                greetingMessage.classList.remove('show');
            }, 4000);
        }
    });
}

const memberLoginForm = document.getElementById('memberLoginForm');
const memberResult = document.getElementById('memberResult');

if (memberLoginForm) {
    memberLoginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        let isValid = true;
        const memberNama = document.getElementById('memberNama').value.trim();
        const memberNim = document.getElementById('memberNim').value.trim();
        
        document.getElementById('memberNamaError').textContent = '';
        document.getElementById('memberNimError').textContent = '';
        
        if (memberNama === '') {
            document.getElementById('memberNamaError').textContent = '❌ Nama harus diisi';
            isValid = false;
        }
        
        if (memberNim === '') {
            document.getElementById('memberNimError').textContent = '❌ NIM harus diisi';
            isValid = false;
        } else if (isNaN(memberNim)) {
            document.getElementById('memberNimError').textContent = '❌ NIM harus berupa angka';
            isValid = false;
        } else if (memberNim.length < 5) {
            document.getElementById('memberNimError').textContent = '❌ NIM minimal 5 digit';
            isValid = false;
        }
        
        if (isValid) {
            memberResult.innerHTML = `✅ <strong>Akses Diterima!</strong><br>Selamat datang ${memberNama} (NIM: ${memberNim}).`;
            memberResult.className = 'member-result success';
            memberLoginForm.reset();
            
            setTimeout(() => {
                memberResult.innerHTML = '';
                memberResult.className = 'member-result';
            }, 5000);
        } else {
            memberResult.innerHTML = '❌ Akses ditolak. Periksa kembali Nama dan NIM Anda.';
            memberResult.className = 'member-result error';
            
            setTimeout(() => {
                memberResult.innerHTML = '';
                memberResult.className = 'member-result';
            }, 4000);
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
            readMoreBtn.textContent = 'Baca Selengkapnya ↓';
            isExpanded = false;
        }
    });
}

const contactForm = document.getElementById('contactForm');
const contactFormMessage = document.getElementById('contactFormMessage');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        let isValid = true;
        const nama = document.getElementById('contactNama').value.trim();
        const email = document.getElementById('contactEmail').value.trim();
        
        document.getElementById('contactNamaError').textContent = '';
        document.getElementById('contactEmailError').textContent = '';
        document.getElementById('contactPesanError').textContent = '';
        
        if (nama === '') {
            document.getElementById('contactNamaError').textContent = '❌ Nama harus diisi';
            isValid = false;
        }
        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email === '') {
            document.getElementById('contactEmailError').textContent = '❌ Email harus diisi';
            isValid = false;
        } else if (!emailRegex.test(email)) {
            document.getElementById('contactEmailError').textContent = '❌ Email tidak valid';
            isValid = false;
        }
        
        if (isValid) {
            contactFormMessage.textContent = `✅ Terima kasih ${nama}! Pesan Anda telah terkirim.`;
            contactFormMessage.className = 'form-message success';
            contactForm.reset();
            
            setTimeout(() => {
                contactFormMessage.textContent = '';
                contactFormMessage.className = 'form-message';
            }, 4000);
        } else {
            contactFormMessage.textContent = '⚠️ Mohon lengkapi form dengan benar';
            contactFormMessage.className = 'form-message error';
            
            setTimeout(() => {
                contactFormMessage.textContent = '';
                contactFormMessage.className = 'form-message';
            }, 4000);
        }
    });
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

const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('nav a').forEach(link => {
    if (link.getAttribute('href') === currentPage) {
        link.classList.add('active');
    }
});

console.log('✅ Portofolio Fikry Haikal - Dengan Loading Screen, Page Transisi, & Hover 3D Effect!');