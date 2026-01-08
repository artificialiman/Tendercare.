// Shared utility functions and animations

// Smooth scroll behavior
document.documentElement.style.scrollBehavior = 'smooth';

// Accordion toggle function (global)
function toggleAccordion(header) {
  const accordion = header.parentElement;
  const wasActive = accordion.classList.contains('active');
  
  // Optional: Close other accordions
  // document.querySelectorAll('.accordion.active').forEach(acc => {
  //   if (acc !== accordion) acc.classList.remove('active');
  // });
  
  accordion.classList.toggle('active');
}

// Tab switching function
function switchTab(index) {
  const tabs = document.querySelectorAll('.tab-btn');
  const slider = document.querySelector('.tab-slider');
  
  if (!tabs.length || !slider) return;
  
  tabs.forEach((tab, i) => {
    tab.classList.toggle('active', i === index);
  });
  
  const activeTab = tabs[index];
  slider.style.width = activeTab.offsetWidth + 'px';
  slider.style.left = activeTab.offsetLeft + 'px';
}

// Show toast notification
function showToast(title, message, duration = 3000) {
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <div class="toast-icon">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
    </div>
    <div class="toast-content">
      <h4>${title}</h4>
      <p>${message}</p>
    </div>
  `;
  
  document.body.appendChild(toast);
  
  // Trigger animation
  setTimeout(() => toast.classList.add('show'), 10);
  
  // Remove after duration
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 400);
  }, duration);
}

// Loading skeleton generator
function createSkeleton(type = 'card') {
  const skeleton = document.createElement('div');
  skeleton.className = 'skeleton';
  
  switch(type) {
    case 'card':
      skeleton.style.height = '300px';
      skeleton.style.borderRadius = 'var(--radius-md)';
      break;
    case 'text':
      skeleton.style.height = '20px';
      skeleton.style.borderRadius = 'var(--radius-sm)';
      break;
    case 'avatar':
      skeleton.style.width = '120px';
      skeleton.style.height = '120px';
      skeleton.style.borderRadius = '50%';
      break;
  }
  
  return skeleton;
}

// Show loading state
function showLoading(container, count = 3, type = 'card') {
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < count; i++) {
    fragment.appendChild(createSkeleton(type));
  }
  container.innerHTML = '';
  container.appendChild(fragment);
}

// Debounce function for search/input
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Format date helper
function formatDate(date) {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

// Generate initials from name
function getInitials(name) {
  return name
    .split(' ')
    .map(word => word[0])
    .join('')
    .toUpperCase()
    .substring(0, 2);
}

// Check if user is authenticated
function checkAuth() {
  const signedInStudent = sessionStorage.getItem('signedInStudent');
  if (!signedInStudent && !window.location.pathname.includes('signin.html') && !window.location.pathname.includes('index.html') && !window.location.pathname.includes('profile.html')) {
    window.location.href = 'signin.html';
  }
}

// Logout function
function logout() {
  sessionStorage.clear();
  window.location.href = 'index.html';
}

// Handle responsive navigation
function initMobileMenu() {
  const nav = document.querySelector('.glass-nav');
  if (!nav) return;
  
  // Check if we need mobile menu
  if (window.innerWidth <= 768) {
    // Mobile menu logic here if needed
  }
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
  // Check authentication on protected pages
  checkAuth();
  
  // Initialize mobile menu
  initMobileMenu();
  
  // Handle window resize
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      initMobileMenu();
    }, 250);
  });
  
  // Add keyboard navigation for accessibility
  document.addEventListener('keydown', (e) => {
    // Escape key closes modals/dropdowns
    if (e.key === 'Escape') {
      document.querySelectorAll('.modal, .dropdown').forEach(el => {
        el.classList.remove('active', 'show');
      });
    }
  });
  
  // Enhance focus visibility for keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
      document.body.classList.add('keyboard-nav');
    }
  });
  
  document.addEventListener('mousedown', () => {
    document.body.classList.remove('keyboard-nav');
  });
});

// Print preview function
function showPrintPreview() {
  const previewModal = document.createElement('div');
  previewModal.className = 'print-preview-modal';
  previewModal.innerHTML = `
    <div class="glass-card" style="
      max-width: 900px;
      margin: 40px auto;
      padding: 32px;
    ">
      <h2 style="margin-bottom: 24px;">Print Preview</h2>
      <div class="preview-content" style="
        background: white;
        padding: 40px;
        border: 1px solid #ddd;
        min-height: 400px;
      ">
        <!-- Preview content would go here -->
      </div>
      <div style="
        display: flex;
        gap: 16px;
        justify-content: center;
        margin-top: 24px;
      ">
        <button class="btn-primary" onclick="window.print(); document.querySelector('.print-preview-modal').remove();">
          Print Now
        </button>
        <button class="btn-secondary" onclick="document.querySelector('.print-preview-modal').remove();">
          Cancel
        </button>
      </div>
    </div>
  `;
  
  previewModal.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(10px);
    z-index: 10000;
    overflow-y: auto;
    padding: 20px;
  `;
  
  document.body.appendChild(previewModal);
}

// Export functions for use in other scripts
window.AppUtils = {
  showToast,
  createSkeleton,
  showLoading,
  debounce,
  formatDate,
  getInitials,
  logout,
  showPrintPreview
};