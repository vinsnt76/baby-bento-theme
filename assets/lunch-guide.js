/**
 * Insulated Lunch Bag Guide Renderer (Shopify-Safe)
 * Place as /assets/lunch-guide.js and include on the page that has:
 * <div id="guide-content"></div>
 */

function renderSpecs(brand) {
  let specsHtml = '<div class="lg-specs-grid">';
  if (brand.price_range) {
    specsHtml += `<div class="lg-specs-label">Price Range:</div><div class="lg-specs-value">${brand.price_range}</div>`;
  }
  if (brand.dimensions) {
    // FIX: Updated label to (W x H x D) to match the data format
    specsHtml += `<div class="lg-specs-label">Dimensions (W x H x D):</div><div class="lg-specs-value">${brand.dimensions}</div>`;
  }
  if (brand.compatible_lunchboxes && brand.compatible_lunchboxes.length > 0) {
    specsHtml += `<div class="lg-specs-compatibility-label">Fits popular lunchboxes:</div><div class="lg-specs-compatibility-value">${brand.compatible_lunchboxes.join(
      ", "
    )}</div>`;
  }
  specsHtml += "</div>";
  return specsHtml;
}

function renderFaq(faqData) {
  let faqHtml = `
    <section class="lg-faq-section">
      <h2 class="lg-heading">Frequently Asked Questions</h2>
      <div class="lg-faq-list">
  `;
  // Using guideData.faq directly from the synchronized object
  faqData.forEach(function (item) {
    faqHtml += `
      <div class="lg-faq-item">
        <p class="lg-faq-question">${item.q}</p>
        <p class="lg-faq-answer">${item.a}</p>
      </div>
    `;
  });
  faqHtml += `
      </div>
    </section>
  `;
  return faqHtml;
}

async function renderGuide() {
  const container = document.getElementById("lunch-guide-content") || document.getElementById("guide-content");
  if (!container) return;

  if (!window.lunchGuideDataUrl) return;

  let guideData;
  try {
    const response = await fetch(window.lunchGuideDataUrl);
    guideData = await response.json();
  } catch (error) {
    container.innerHTML = "<p>Error loading guide data.</p>";
    return;
  }

  let html = "";
  const iconHtml = '<img src="https://cdn.shopify.com/s/files/1/1591/7213/files/love-heart-star.png?v=1764041268" alt="Heart Star" class="lg-icon-star" style="width:30px; margin-left:10px; vertical-align:middle;">';

  // 1. HERO SECTION (White Text + Correct Gradient)
  html += `
    <header class="lg-hero" style="background: linear-gradient(135deg, #FF00CC 0%, #FFCC00 100%) !important; border-radius: 12px; padding: 4rem 2rem; margin-bottom: 4rem; text-align: center; color: #FFFFFF !important;">
        <h1 class="lg-title" style="color: #FFFFFF !important; font-size: 3.2rem; margin-bottom: 1rem;">${guideData.title}${iconHtml}</h1>
        <p class="lg-subtitle" style="color: #FFFFFF !important; font-size: 1.4rem; max-width: 700px; margin: 0 auto; opacity: 0.9;">${guideData.introduction}</p>
    </header>
  `;

  // 2. SECTIONS LOOP
  guideData.sections.forEach(function (section) {
    html += `
      <section class="lg-section" style="margin-bottom: 5rem;">
        <h2 class="lg-heading" style="font-size: 2.2rem; border-bottom: 2px solid #eee; padding-bottom: 10px; margin-bottom: 20px;">${section.heading}</h2>
        <p class="lg-section-content" style="margin-bottom: 25px; font-size: 1.1rem; color: #444;">${section.content}</p>
        <div class="lg-brand-grid"> `;

    if (section.brands) {
      section.brands.forEach(function (brand) {
        html += `
          <div class="lg-brand-card">
            <div class="lg-brand-image-wrapper">
              <img src="${brand.image}" alt="${brand.name}" class="lg-brand-image" onerror="this.src='https://placehold.co/400x400?text=Product+Image'">
            </div>
            <div class="lg-brand-content">
              <h3 class="lg-brand-name" style="font-size: 1.6rem; color: #333;">${brand.name}</h3>
              <p class="lg-brand-desc" style="font-size: 1rem; color: #666; flex-grow: 1;">${brand.description}</p>
              ${renderSpecs(brand)}
              <a href="${brand.product_link}" class="lg-brand-cta" style="background-color: #FF6F61 !important; color: #FFFFFF !important;">Shop Now</a>
            </div>
          </div>
        `;
      });
    }
    html += "</div></section>"; // Close Grid and Section
  });

  html += renderFaq(guideData.faq);
  container.innerHTML = html;
}

// FIX: Add event listener to make sure the guide renders after the DOM is fully loaded.
document.addEventListener("DOMContentLoaded", renderGuide); 