import { artifacts } from "./artifacts.js";

const grid = document.querySelector("#artifact-grid");
const filterButtons = document.querySelectorAll(".filter-button");

function createArtifactCard(artifact) {
  return `
    <article class="card">
      <div class="card__meta">
        <span>${artifact.category}</span>
        <span class="badge">${artifact.status}</span>
      </div>
      <h3>${artifact.title}</h3>
      <p>${artifact.summary}</p>
      <p><strong>Curator:</strong> ${artifact.curator}</p>
      <p><strong>Risk:</strong> ${artifact.risk}</p>
    </article>
  `;
}

function renderArtifacts(category = "all") {
  const visibleArtifacts = category === "all"
    ? artifacts
    : artifacts.filter((artifact) => artifact.category === category);

  if (visibleArtifacts.length === 0) {
    grid.innerHTML = `<div class="empty-state">No artifacts match this filter yet. Tryanother category or add a new exhibit through a pull request.</div>`;
    return;
  }

  grid.innerHTML = visibleArtifacts.map(createArtifactCard).join("");
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");
    renderArtifacts(button.dataset.filter);
  });
});

renderArtifacts();
