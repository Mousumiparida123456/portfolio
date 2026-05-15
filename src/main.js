const projects = [
  {
    title: "NEXORA_FINANCE",
    description: "A premium Finance API server built with TypeScript, Node.js, and Drizzle ORM. Features real-time transaction processing and secure data handling.",
    tech: ["#TypeScript", "#NodeJS", "#PostgreSQL"],
    image: "projects/nexora.png",
    link: "https://github.com/Mousumiparida123456/NEXORA_FINANCE"
  },
  {
    title: "Jhunu's Kitchen",
    description: "Complete restaurant management system with Razorpay integration for seamless payments. Built with Prisma for robust database management.",
    tech: ["#Prisma", "#Razorpay", "#Express"],
    image: "projects/kitchen.png",
    link: "https://github.com/Mousumiparida123456/Jhunu-s-kitchen"
  },
  {
    title: "SMART_TRAVEL",
    description: "AI-powered travel recommendation engine using Machine Learning to suggest personalized destinations and itineraries.",
    tech: ["#Python", "#ML", "#ScikitLearn"],
    image: "projects/travel.png",
    link: "https://github.com/Mousumiparida123456/AIML_Project_SMART_TRAVEL"
  },
  {
    title: "KalaQuest",
    description: "A creative platform for artists to showcase work and participate in quests. Focused on high-quality UI/UX and community engagement.",
    tech: ["#React", "#FramerMotion", "#TypeScript"],
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop",
    link: "https://github.com/Mousumiparida123456/KalaQuest"
  },
  {
    title: "DSA_TRACKER",
    description: "Personal tool to track progress in Data Structures and Algorithms. Helps in maintaining consistency and reviewing complex problems.",
    tech: ["#JavaScript", "#HTML5", "#CSS3"],
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?q=80&w=2128&auto=format&fit=crop",
    link: "https://github.com/Mousumiparida123456/DSA_TRACKER"
  }
];

const certificates = [
  {
    title: "DSA with Java",
    issuer: "Apna College | Feb 2026<br><small>ID: 6994a8f997c4f8bef2039c07</small>",
    icon: "code"
  },
  {
    title: "Full Stack Development",
    issuer: "Nexora Finance & Kitchen App",
    icon: "layers"
  },
  {
    title: "Generative AI & LLMs",
    issuer: "Focus: Deep Learning & Neural Networks",
    icon: "brain-circuit"
  }
];

// Custom Cursor
function initCursor() {
  const dot = document.querySelector('.cursor-dot');
  const outline = document.querySelector('.cursor-outline');
  
  window.addEventListener('mousemove', (e) => {
    const { clientX: x, clientY: y } = e;
    dot.style.left = `${x}px`;
    dot.style.top = `${y}px`;
    
    outline.animate({
      left: `${x}px`,
      top: `${y}px`
    }, { duration: 500, fill: "forwards" });
  });

  const interactives = document.querySelectorAll('a, button, .project-card, .timeline-card, .certificate-card');
  interactives.forEach(el => {
    el.addEventListener('mouseenter', () => {
      outline.style.width = '60px';
      outline.style.height = '60px';
      outline.style.borderColor = 'white';
    });
    el.addEventListener('mouseleave', () => {
      outline.style.width = '40px';
      outline.style.height = '40px';
      outline.style.borderColor = 'rgba(145, 94, 255, 0.5)';
    });
  });
}

// Star Generator
function initStars() {
  const container = document.querySelector('.stars-container');
  const starCount = 150;
  
  for (let i = 0; i < starCount; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    
    const size = Math.random() * 2 + 1 + 'px';
    star.style.width = size;
    star.style.height = size;
    star.style.left = Math.random() * 100 + '%';
    star.style.top = Math.random() * 100 + '%';
    
    const duration = Math.random() * 3 + 3 + 's';
    star.style.setProperty('--duration', duration);
    
    container.appendChild(star);
  }
}

// Inject Projects
function initProjects() {
  const container = document.getElementById('projects-container');
  if (!container) return;

  projects.forEach((project, index) => {
    const card = document.createElement('div');
    card.className = 'project-card glass reveal';
    card.style.transitionDelay = `${index * 0.1}s`;
    
    card.innerHTML = `
      <div class="project-image-container">
        <img src="${project.image}" alt="${project.title}">
      </div>
      <div class="project-content">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <div class="tech-stack">
          ${project.tech.map(t => `<span class="tech-tag">${t}</span>`).join('')}
        </div>
        <a href="${project.link}" target="_blank" class="btn btn-primary" style="margin-top: auto; width: 100%; text-align: center;">Explore Source</a>
      </div>
    `;
    container.appendChild(card);
  });
}

// Inject Certificates
function initCertificates() {
  const container = document.getElementById('certificates-container');
  if (!container) return;

  certificates.forEach((cert, index) => {
    const card = document.createElement('div');
    card.className = 'certificate-card glass reveal';
    card.style.transitionDelay = `${index * 0.1}s`;
    
    card.innerHTML = `
      <i data-lucide="${cert.icon}"></i>
      <h3>${cert.title}</h3>
      <p>${cert.issuer}</p>
    `;
    container.appendChild(card);
  });
}

// Scroll Handling & Animations
function initScroll() {
  const nav = document.querySelector('.glass-nav');
  const timelineLine = document.querySelector('.timeline-line');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }

    // Animate timeline line height
    if (timelineLine) {
      const educationSection = document.querySelector('#education');
      const rect = educationSection.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        const scrolledInSection = Math.max(0, window.innerHeight - rect.top);
        const height = Math.min(rect.height, scrolledInSection);
        timelineLine.style.height = `${height}px`;
      }
    }
  });

  const observerOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -100px 0px"
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, observerOptions);

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  
  const revealSelectors = [
    '.section-title', '.section-caption', '.hero-title', '.hero-subtitle', '.hero-cta', '.timeline-item'
  ];
  revealSelectors.forEach(sel => {
    document.querySelectorAll(sel).forEach(el => {
      el.classList.add('reveal');
      observer.observe(el);
    });
  });
}

// Initialize everything
document.addEventListener('DOMContentLoaded', () => {
  initCursor();
  initStars();
  initProjects();
  initCertificates();
  initScroll();
  
  // AJAX Form Submission
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const submitBtn = contactForm.querySelector('.btn-submit');
      const originalBtnText = submitBtn.innerHTML;
      
      submitBtn.disabled = true;
      submitBtn.innerHTML = 'Sending... <i data-lucide="loader-2" class="spin"></i>';
      if (typeof lucide !== 'undefined') lucide.createIcons();

      const formData = new FormData(contactForm);
      try {
        const response = await fetch(contactForm.action, {
          method: 'POST',
          body: formData,
          headers: { 'Accept': 'application/json' }
        });

        if (response.ok) {
          alert('Message sent successfully! 🚀 I will get back to you soon.');
          contactForm.reset();
        } else {
          alert('Oops! There was a problem sending your message. Please try again.');
        }
      } catch (error) {
        alert('Oops! There was a problem sending your message. Please try again.');
      } finally {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnText;
        if (typeof lucide !== 'undefined') lucide.createIcons();
      }
    });
  }

  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
});
