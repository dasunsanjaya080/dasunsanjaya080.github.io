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

// Render category page with sub-projects
function renderCategoryPage(project) {
  // Hide the normal detail sections
  document.getElementById('description-section').style.display = 'none';
  document.getElementById('process-section').style.display = 'none';
  document.getElementById('gallery-section').style.display = 'none';
  document.getElementById('specs-section').style.display = 'none';

  // Get sub-projects
  const subProjects = project.subProjects.map(id => findProject(id)).filter(Boolean);

  // Create category grid
  const categoryHTML = `
    <section class="detail-section category-section">
      <div class="category-grid">
        ${subProjects.map(subProject => `
          <article class="category-card reveal">
            <div class="category-card__media">
              ${subProject.image 
                ? `<img src="${subProject.image}" alt="${subProject.title}" loading="lazy">`
                : `<div class="category-card__placeholder">
                     <span class="mono">NO IMAGE</span>
                   </div>`
              }
            </div>
            <div class="category-card__body">
              <span class="category-card__id mono">${subProject.id}</span>
              <h3 class="category-card__title">${subProject.title}</h3>
              <p class="category-card__summary">${subProject.summary}</p>
              <div class="category-card__meta">
                <span class="mono category-card__period">${subProject.period}</span>
                <span class="mono category-card__stack">${subProject.stack.join(' · ')}</span>
              </div>
              <a class="category-card__link" href="project-detail.html?id=${subProject.id}">View details →</a>
            </div>
          </article>
        `).join('')}
      </div>
    </section>
  `;

  // Insert after hero
  const heroSection = document.getElementById('detail-hero');
  const newSection = document.createElement('div');
  newSection.innerHTML = categoryHTML;
  heroSection.parentNode.insertBefore(newSection.firstElementChild, heroSection.nextSibling);

  setupRevealObserver();
}

// Render photo gallery (supports both images and videos)
function renderGallery(project) {
  if (!project.galleryImages || project.galleryImages.length === 0) {
    document.getElementById('gallery-section').style.display = 'none';
    return;
  }

  const galleryHTML = project.galleryImages.map(media => {
    const isVideo = /\.(mp4|webm|ogg)$/i.test(media);
    
    if (isVideo) {
      return `
        <div class="gallery-item reveal">
          <video controls preload="metadata" style="width: 100%; height: auto;">
            <source src="${media}" type="video/mp4">
            Your browser does not support the video tag.
          </video>
        </div>
      `;
    } else {
      return `
        <div class="gallery-item reveal">
          <img src="${media}" alt="Project gallery image" loading="lazy">
        </div>
      `;
    }
  }).join('');

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

  // Check if this is a category page
  if (project.isCategoryPage) {
    renderHero(project);
    renderCategoryPage(project);
  } else {
    // Render all sections for normal projects
    renderHero(project);
    renderDescription(project);
    renderSpecs(project);
    renderProcessTimeline(project);
    renderGallery(project);
  }

  // Setup animations
  setupRevealObserver();
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', initDetailPage);
