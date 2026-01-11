/**
 * Stainless Steel Guide Renderer
 * Place as /assets/stainless-steel.js
 * Target HTML: <div id="guide-content"></div>
 */

// Data synced from stainless-steel-data.json
const steelGuideData = {
  "title": "Best Stainless Steel Bento Boxes in Australia for 2026: Our Top Picks",
  "icon": "🍱",
  "introduction": "Choosing the right bento box can be overwhelming, especially with the 2026 school year approaching. In Australia, we see a massive spike in searches for <strong>\"kids lunch box steel\"</strong> starting in May and peaking through <strong>August and September</strong>. This guide helps you navigate the best in durable, non-toxic, and leak-proof technology to ensure your family's meals stay fresh and eco-friendly.",
  "sections": [
    {
      "heading": "The Steel Standard: Is It Worth the Extra Money?",
      "content": "While stainless steel boxes have a higher upfront cost, they are a smarter long-term investment. Research shows that high-grade <strong>18/8 or 304 food-grade steel</strong> is non-porous and won't leach chemicals like BPA or phthalates into food. Unlike plastic, which often needs replacing every term, a quality steel bento can last for years, effectively lowering your <strong>total cost over the school journey</strong>.",
      "brands": [
        {
          "name": "Brand Spotlight: ecoCocoon",
          "description": "A favorite for the <strong>\"nude food\"</strong> lifestyle, the <strong>ecoCocoon stainless steel bento box</strong> is engineered for the Australian schoolyard. Its 5-compartment layout eliminates the need for single-use plastic wraps while offering rugged, corrosion-resistant durability that parents frequently recommend for its stylish construction.",
          "features": [
            "📦 <strong>Design:</strong> Kid-proof latches and a lightweight, sleek profile.",
            "🧼 <strong>Hygiene:</strong> Easy-to-wipe, non-porous surfaces that don't trap bacteria.",
            "✅ <strong>Best for:</strong> Long-term reusability and 100% plastic-free zero-waste goals."
          ],
          "cta": {
            "label": "Shop ecoCocoon Range",
            "link": "https://www.babybento.com.au/collections/lunch-boxes-australia/stainless-steel"
          },
          "style": "default"
        },
        {
          "name": "Yumbox Prêt Stainless Steel: The Leak-Proof Specialist",
          "description": "For those prioritizing a mess-free bag, the <strong>Yumbox Prêt Stainless Steel</strong> is a top choice. It combines the hygiene of a stainless steel tray with Yumbox’s signature leak-proof silicone seal, keeping different food compartments perfectly contained.",
          "features": [
            "💧 <strong>Seal:</strong> Specialized silicone seal prevents leaks from wet foods like yogurt.",
            "👶 <strong>Toddler-Friendly:</strong> Features an ergonomic, single-latch design easy for small hands to open independently."
          ],
          "cta": {
            "label": "View Yumbox Range",
            "link": "https://www.babybento.com.au/products/yumbox-pret-stainless-steel-lunchbox-lavande-purple"
          },
          "style": "default"
        }
      ]
    },
    {
      "heading": "The Rise of the Hybrid: Hot & Cold Flexibility",
      "content": "Australian families are moving toward versatile systems that work for winter leftovers and summer picnics. This is where <strong>insulated \"thermos\" style</strong> options shine.",
      "brands": [
        {
          "name": "OmieBox: V2 vs. UP",
          "description": "The <strong>OmieBox V2</strong> is the gold standard for toddlers, featuring a removable vacuum-insulated jar for hot mains alongside cold sides. For older kids with larger appetites, the <strong>OmieBox UP</strong> offers a bigger 350ml thermos (40% larger than V2) and a more compact, streamlined design.",
          "cta": {
            "label": "Shop OmieBox Collection",
            "link": "https://www.babybento.com.au/collections/omiebox"
          },
          "style": "warm"
        },
        {
          "name": "MontiiCo Insulated Food Jars",
          "description": "If your child is rough with their gear, <strong>MontiiCo food jars</strong> offer superior impact resistance. These double-walled containers keep food hot for 5+ hours, making them perfect for hot school lunches regardless of the weather.",
          "cta": {
            "label": "Explore Insulated Food Jars",
            "link": "https://www.babybento.com.au/collections/lunch-boxes-australia/insulated-food-jar"
          },
          "style": "cool"
        }
      ]
    }
  ],
  "faq": [
    {
      "q": "Which stainless steel lunchbox do parents recommend most?",
      "a": "Parents most frequently recommend <strong>ecoCocoon</strong> and <strong>Yumbox</strong>. <strong>ecoCocoon</strong> is highly praised for its incredible durability and stylish, long-lasting construction. For those prioritizing a mess-free bag, the <strong>Yumbox Prêt Stainless Steel</strong> is the top choice because it combines the hygiene of stainless steel with Yumbox’s signature leak-proof silicone seal."
    },
    {
      "q": "Are Yumbox stainless steel lunchboxes leak-proof?",
      "a": "Yes — parents highlight that Yumbox features a specialized silicone seal, which helps prevent leaks and keeps different food compartments contained. They are also described as easy to open, rinse, and quick to hand‑wash, making them a popular choice for toddlers."
    },
    {
      "q": "Can a toddler open these lunchboxes independently?",
      "a": "Generally, <strong>Yumbox</strong> is easier for toddlers to open independently due to the ergonomic, silicone‑sealed latch designed specifically for small hands."
    },
    {
      "q": "Which lunchbox is easiest to wash?",
      "a": "<strong>Yumbox</strong> is the standout for easy maintenance; they are quick to rinse and hand-wash, ensuring they are ready to go for the next school day with minimal effort."
    },
    {
      "q": "Do I need extra accessories for wet foods?",
      "a": "Yes — for any stainless steel lunchbox that isn’t inherently leak-proof, parents recommend using <strong>silicone cups</strong> to keep wet foods like yogurt or dips separate from dry snacks."
    }
  ],
  "footer": {
    "heading": "Invest in a Plastic-Free Future",
    "body": "Whether you are prepping for the back-to-school peak or looking for a sustainable work solution, our curated collection is the gold standard for Australian families.",
    "cta": {
      "label": "Shop the Full Steel Collection",
      "link": "https://www.babybento.com.au/collections/lunch-boxes-australia/stainless-steel"
    }
  }
};

function renderSteelFaq() {
  let faqHtml = `
    <section class="lg-faq-section" style="background: #f9f9f9; padding: 2.5rem; border-radius: 8px;">
      <h2 class="lg-heading">FAQ: Stainless Steel Lunchboxes</h2>
      <div class="lg-faq-list">
  `;
  steelGuideData.faq.forEach(function (item) {
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

function renderSteelGuide() {
  const container = document.getElementById("guide-content");
  if (!container) return;

  let html = "";
  
  // Hero
  html += `
    <header class="lg-hero">
      <div class="lg-icon-wrapper">
        <span style="font-size: 2.5rem;">${steelGuideData.icon || '🍱'}</span>
      </div>
      <div class="lg-title-wrapper">
        <h1 class="lg-title">${steelGuideData.title}</h1>
      </div>
      <p class="lg-subtitle">${steelGuideData.introduction}</p>
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
        // Determine card style class
        let cardClass = "lg-brand-card";
        if (brand.style === "warm") cardClass += " lg-card-warm";
        else if (brand.style === "cool") cardClass += " lg-card-cool";
        else cardClass += " lg-card-default";

        html += `
          <div class="${cardClass}">
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
          html += `<a href="${brand.cta.link}" class="lg-brand-cta ${brand.style === 'default' ? 'lg-btn-outline' : 'lg-btn-link'}" target="_blank">${brand.cta.label}</a>`;
        }

        html += `</div></div>`;
      });
      html += "</div>";
    }
    html += "</section>";
  });

  html += renderSteelFaq();

  // Footer
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

  container.innerHTML = html;
}

// Expose to window for manual invocation if needed
window.renderSteelGuide = renderSteelGuide;
document.addEventListener("DOMContentLoaded", renderSteelGuide);