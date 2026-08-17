// Get project ID from URL parameters
function getProjectIdFromURL() {
  const params = new URLSearchParams(window.location.search);
  return params.get('id');
}

// Find project by ID
function findProject(projectId) {
  return PROJECTS.find(p => p.id === projectId);
}

// Render hero section with title and key info
function renderHero(project) {
  const heroHTML = `
    <div class="hero-content">
      <div class="hero-header">
        <span class="hero-id mono">${project.id}</span>
        <h1 class="hero-title">${project.title}</h1>
      </div>
      <p class="hero-blurb">${project.summary}</p>
    </div>
    ${project.image ? `<div class="hero-image"><img src="${project.image}" alt="${project.title}" loading="lazy"></div>` : ''}
  `;
  
  document.getElementById('detail-hero').innerHTML = heroHTML;
}

// Render project description
function renderDescription(project) {
  if (!project.detailedDescription || project.detailedDescription.trim() === "") {
    document.getElementById('description-section').style.display = 'none';
    return;
  }
  document.getElementById('project-description').textContent = project.detailedDescription;
}

// Render specifications table
function renderSpecs(project) {
  const specsHTML = `
    <div class="detail-spec__row">
      <dt class="mono">STATUS</dt>
      <dd>${project.status}</dd>
    </div>
    <div class="detail-spec__row">
      <dt class="mono">PERIOD</dt>
      <dd>${project.period}</dd>
    </div>
    <div class="detail-spec__row">
      <dt class="mono">TEAM</dt>
      <dd>${project.team}</dd>
    </div>
    <div class="detail-spec__row">
      <dt class="mono">TAG</dt>
      <dd>${project.tag}</dd>
    </div>
    <div class="detail-spec__row">
      <dt class="mono">STACK</dt>
      <dd>${project.stack.join(' · ')}</dd>
    </div>
  `;
  
  document.getElementById('project-specs').innerHTML = specsHTML;
}

// Render process timeline
function renderProcessTimeline(project) {
  if (!project.processSteps || project.processSteps.length === 0) {
    document.getElementById('process-section').style.display = 'none';
    return;
  }

  const timelineHTML = project.processSteps.map((step, index) => `
    <div class="process-step reveal">
      <div class="process-step__header">
        <span class="process-step__number mono">STEP ${index + 1}</span>
        <h3 class="process-step__title">${step.title}</h3>
      </div>
      <p class="process-step__description">${step.description}</p>
    </div>
  `).join('');

  document.getElementById('process-timeline').innerHTML = timelineHTML;
  setupRevealObserver();
}

// Render photo gallery
function renderGallery(project) {
  if (!project.galleryImages || project.galleryImages.length === 0) {
    document.getElementById('gallery-section').style.display = 'none';
    return;
  }

  const galleryHTML = project.galleryImages.map(img => `
    <div class="gallery-item reveal">
      <img src="${img}" alt="Project gallery image" loading="lazy">
    </div>
  `).join('');

  document.getElementById('photo-gallery').innerHTML = galleryHTML;
  document.getElementById('gallery-section').style.display = 'block';
  setupRevealObserver();
}

// Reveal animation observer
function setupRevealObserver() {
  const revealItems = document.querySelectorAll('.reveal, .detail-section');

  if (!('IntersectionObserver' in window)) {
    revealItems.forEach(item => item.classList.add('visible'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.18 });

  revealItems.forEach((item) => observer.observe(item));
}

// Initialize page
function initDetailPage() {
  const projectId = getProjectIdFromURL();
  
  if (!projectId) {
    document.querySelector('.detail-main').innerHTML = '<div class="error-message"><p>Project not found. <a href="index.html">Return to portfolio</a></p></div>';
    return;
  }

  const project = findProject(projectId);
  
  if (!project) {
    document.querySelector('.detail-main').innerHTML = '<div class="error-message"><p>Project not found. <a href="index.html">Return to portfolio</a></p></div>';
    return;
  }

  // Update page title
  document.title = `${project.title} — Dasun Nimeth Sanjaya`;

  // Render all sections
  renderHero(project);
  renderDescription(project);
  renderSpecs(project);
  renderProcessTimeline(project);
  renderGallery(project);

  // Setup animations
  setupRevealObserver();
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', initDetailPage);
