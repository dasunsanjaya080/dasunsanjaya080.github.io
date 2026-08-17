// Set the "updated" date in the hero eyebrow
document.getElementById("hero-date").textContent = new Date().toLocaleDateString("en-GB", {
  month: "short",
  year: "numeric"
});

// --- Render project cards ---
const grid = document.getElementById("project-grid");

function projectCard(p) {
  const imageBlock = p.image
    ? `<img src="${p.image}" alt="${p.title}" loading="lazy">`
    : `<div class="card__placeholder">
         <span class="mono">NO IMAGE YET</span>
         <span class="card__placeholder-hint">assets/projects/…</span>
       </div>`;

  const linkBlock = p.link
    ? `<a class="card__link" href="${p.link}" target="_blank" rel="noopener">View project ↗</a>`
    : "";

  return `
    <article class="card">
      <span class="card__fiducial card__fiducial--tl" aria-hidden="true"></span>
      <span class="card__fiducial card__fiducial--br" aria-hidden="true"></span>

      <div class="card__media">${imageBlock}</div>

      <div class="card__body">
        <div class="card__top">
          <span class="card__id mono">${p.id}</span>
          <span class="card__tag mono">${p.tag}</span>
        </div>

        <h3 class="card__title">${p.title}</h3>
        <p class="card__summary">${p.summary}</p>

        <dl class="spec">
          <div class="spec__row">
            <dt class="mono">STATUS</dt>
            <dd>${p.status}</dd>
          </div>
          <div class="spec__row">
            <dt class="mono">PERIOD</dt>
            <dd>${p.period}</dd>
          </div>
          <div class="spec__row">
            <dt class="mono">TEAM</dt>
            <dd>${p.team}</dd>
          </div>
          <div class="spec__row">
            <dt class="mono">STACK</dt>
            <dd>${p.stack.join(" · ")}</dd>
          </div>
        </dl>

        ${linkBlock}
      </div>
    </article>
  `;
}

grid.innerHTML = PROJECTS.map(projectCard).join("");

// --- Render skills legend ---
const legend = document.getElementById("skills-legend");

function legendRow(s) {
  return `
    <div class="legend__row">
      <span class="legend__group mono">${s.group}</span>
      <span class="legend__items">${s.items}</span>
    </div>
  `;
}

legend.innerHTML = SKILLS.map(legendRow).join("");
