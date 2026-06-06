const caseList = document.querySelector("[data-case-list]");
const indexList = document.querySelector("[data-research-index]");
const summaryGrid = document.querySelector("[data-summary-grid]");
const modal = document.querySelector("[data-case-modal]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalMeta = document.querySelector("[data-modal-meta]");
const modalSections = document.querySelector("[data-modal-sections]");
const modalPdf = document.querySelector("[data-modal-pdf]");
const modalPdfLink = document.querySelector("[data-modal-pdf-link]");
const modalClose = document.querySelector("[data-modal-close]");

function createElement(tag, className, text) {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (text) element.textContent = text;
  return element;
}

function renderResearchIndex() {
  portfolioData.cases.forEach((record) => {
    const item = createElement("li", record.highlighted ? "is-emphasis" : "");
    item.innerHTML = `
      <a href="#case-${record.number}">
        <span>Case ${record.number}</span>
        <strong>${record.title}</strong>
      </a>
    `;
    indexList.appendChild(item);
  });
}

function renderCaseRecords() {
  portfolioData.cases.forEach((record) => {
    const article = createElement("article", `case-record${record.highlighted ? " case-record-featured" : ""}`);
    article.id = `case-${record.number}`;

    const tags = record.tags.map((tag) => `<span>${tag}</span>`).join("");
    article.innerHTML = `
      <div class="case-code">
        <span>Bài</span>
        <strong>${record.number}</strong>
      </div>
      <div class="case-body">
        <div class="case-heading">
          <p>${record.focus}</p>
          <h3>${record.title}</h3>
        </div>
        <p class="case-abstract">${record.abstract}</p>
        <div class="record-tags">${tags}</div>
      </div>
      <div class="case-actions">
        <button class="button button-primary" type="button" data-open-case="${record.number}">Xem hồ sơ</button>
        <a class="button button-secondary" href="${record.pdf}" target="_blank" rel="noopener">Mở PDF</a>
      </div>
    `;

    caseList.appendChild(article);
  });
}

function renderSummary() {
  portfolioData.summary.forEach((item, index) => {
    const article = createElement("article", "outcome-record");
    article.innerHTML = `
      <span>${String(index + 1).padStart(2, "0")}</span>
      <h3>${item.label}</h3>
      <p>${item.text}</p>
    `;
    summaryGrid.appendChild(article);
  });
}

function openCase(number) {
  const record = portfolioData.cases.find((item) => item.number === number);
  if (!record) return;

  modalTitle.textContent = `${record.number}. ${record.title}`;
  modalMeta.textContent = `${record.focus} / ${portfolioData.student.field}`;
  modalPdf.src = record.pdf;
  modalPdfLink.href = record.pdf;
  modalSections.replaceChildren();

  Object.entries(record.sections).forEach(([heading, text]) => {
    const section = createElement("section", "modal-section");
    section.innerHTML = `<h3>${heading}</h3><p>${text}</p>`;
    modalSections.appendChild(section);
  });

  if (typeof modal.showModal === "function") {
    modal.showModal();
  } else {
    modal.setAttribute("open", "");
  }
}

function closeCase() {
  modalPdf.removeAttribute("src");
  if (typeof modal.close === "function") {
    modal.close();
  } else {
    modal.removeAttribute("open");
  }
}

renderResearchIndex();
renderCaseRecords();
renderSummary();

document.addEventListener("click", (event) => {
  const openButton = event.target.closest("[data-open-case]");
  if (openButton) {
    openCase(openButton.dataset.openCase);
    return;
  }

  const navLink = event.target.closest("a[href^='#']");
  if (!navLink) return;

  const target = document.querySelector(navLink.getAttribute("href"));
  if (!target) return;

  event.preventDefault();
  target.scrollIntoView({ behavior: "smooth", block: "start" });
});

modalClose.addEventListener("click", closeCase);

modal.addEventListener("click", (event) => {
  if (event.target === modal) closeCase();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && modal.open) closeCase();
});

const observer = "IntersectionObserver" in window
  ? new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    )
  : null;

document.querySelectorAll("[data-reveal]").forEach((element) => {
  if (!observer) {
    element.classList.add("is-visible");
    return;
  }
  observer.observe(element);
});
