/**
 * Stainless Steel Guide Renderer
 * Place as /assets/stainless-steel.js
 * Target HTML: <div id="guide-content"></div> or <div id="stainless-steel-content"></div>
 */

function renderSteelFaq(faqData) {
  let faqHtml = `
    <section class="lg-faq-section">
      <h2 class="lg-heading">FAQ: Stainless Steel Lunchboxes</h2>
      <div class="lg-faq-list">
  `;
  faqData.forEach(function (item) {
    faqHtml += `
      <details class="lg-faq-item">
        <summary class="lg-faq-question">${item.q}</summary>
        <div class="lg-faq-answer"><p>${item.a}</p></div>
      </details>
    `;
  });
  faqHtml += `</div></section>`;
  return faqHtml;
}

async function renderSteelGuide() {
  const container = document.getElementById("stainless-steel-content") || document.getElementById("guide-content");
  if (!container) return;

  // Fetch data from the URL defined in theme.liquid
  if (!window.steelGuideDataUrl) {
    console.error("Stainless Steel Guide Data URL not found.");
    return;
  }

  let steelGuideData;
  try {
    const response = await fetch(window.steelGuideDataUrl);
    steelGuideData = await response.json();
  } catch (error) {
    console.error("Error fetching stainless steel guide data:", error);
    container.innerHTML = "<p>Error loading guide data.</p>";
    return;
  }

  let html = "";
  
  // Hero
  html += `
    <header class="lg-hero" style="background: linear-gradient(135deg, #FF00CC 0%, #FFCC00 100%) !important; border-radius: 12px; padding: 4rem 2rem; margin-bottom: 4rem; text-align: center;">
      <div class="lg-icon-wrapper" style="background: rgba(255,255,255,0.2); border: 2px solid rgba(255,255,255,0.5); width: 60px; height: 60px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 1.5rem;">
        <span style="font-size: 2.5rem;">${steelGuideData.icon || '🍱'}</span>
      </div>
      <div class="lg-title-wrapper">
        <h1 class="lg-title" style="color: #FFFFFF !important; margin: 0; font-size: 3rem;">${steelGuideData.title}</h1>
      </div>
      <p class="lg-subtitle" style="color: #FFFFFF !important; font-weight: 500; opacity: 0.95;">${steelGuideData.introduction}</p>
    </header>
  `;

  // Sections
  steelGuideData.sections.forEach(function (section) {
    html += `
      <section class="lg-section">
        <h2 class="lg-heading">${section.heading}</h2>
        <p class="lg-section-content">${section.content}</p>
    `;

    if (section.brands) {
      html += '<div class="lg-brand-grid">';
      section.brands.forEach(function (brand) {
        const imageHtml = brand.image
          ? `<img src="${brand.image}" alt="${brand.name}" class="lg-brand-image" onerror="this.onerror=null;this.src='https://placehold.co/480x480/cccccc/333333?text=Image+Unavailable';">`
          : `<img src="https://placehold.co/480x480/cccccc/333333?text=Image+Unavailable" alt="${brand.name}" class="lg-brand-image">`;

        let cardClass = "lg-brand-card";
        if (brand.style === "warm") cardClass += " lg-card-warm";
        else if (brand.style === "cool") cardClass += " lg-card-cool";

        html += `
          <div class="${cardClass}">
            <div class="lg-brand-image-wrapper">${imageHtml}</div>
            <div class="lg-brand-content">
              <h3 class="lg-brand-name">${brand.name}</h3>
              <p class="lg-brand-desc">${brand.description}</p>
        `;
        if (brand.features) {
          html += `<ul class="lg-feature-list">`;
          brand.features.forEach(function (feature) {
            html += `<li class="lg-feature-item">${feature}</li>`;
          });
          html += `</ul>`;
        }
        if (brand.cta) {
          html += `<a href="${brand.cta.link}" class="lg-brand-cta" target="_blank" style="background-color: #FF6F61 !important; color: #FFFFFF !important; border: none !important; padding: 1.2rem; display: block; text-align: center; border-radius: 8px; text-decoration: none; font-weight: 700;">${brand.cta.label}</a>`;
        }
        html += `</div></div>`;
      });
      html += "</div>";
    }
    html += "</section>";
  });

  html += renderSteelFaq(steelGuideData.faq);

  if (steelGuideData.footer) {
    const footer = steelGuideData.footer;
    html += `
      <footer class="lg-footer">
        <div class="lg-container lg-footer-content-wrapper">
          <div class="lg-footer-content">
            <h2 class="lg-footer-heading">${footer.heading}</h2>
            <p class="lg-footer-body">${footer.body}</p>
            <a href="${footer.cta.link}" class="lg-footer-cta" target="_blank">${footer.cta.label}</a>
          </div>
        </div>
      </footer>
    `;
  }

  container.innerHTML = html;
}

window.renderSteelGuide = renderSteelGuide;
document.addEventListener("DOMContentLoaded", renderSteelGuide);