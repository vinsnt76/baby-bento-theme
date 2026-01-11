/**
 * Lunch Guide Renderer
 * Place as /assets/lunch-guide.js
 * Target HTML: <div id="guide-content"></div>
 */

const lunchGuideData = {
  "title": "Best Insulated Lunch Bags in Australia for 2026: Our Top Picks",
  "introduction": "Choosing the right insulated lunch bag can be overwhelming, with so many shapes, sizes and styles available. That’s why we’ve created this 2026 guide to help Australian families find the perfect thermal lunch bag for school, daycare or work. We’ve handpicked three trusted brands that combine smart design, food-safe materials and long-lasting insulation — so your meals stay fresh and your values stay intact.",
  "sections": [
    {
      "heading": "Keep It Fresh: The Case for Insulated Lunch Bags",
      "content": "Insulated lunch bags are widely used by adults as well as children. We've curated a list of brands known for their durability, insulation, and modern designs suitable for all ages. Protecting your meal investment and ensuring food safety should be a top priority!",
      "brands": [
        {
          "name": "MontiiCo",
          "description": "A long-time favourite, MontiiCo insulated lunch bags are recognized for their superior durability, stylish designs, and excellent insulation for extended freshness.",
          "price_range": "$43.00 AUD",
          "dimensions": "28cm (W) x 23cm (H) x 7.5cm (D)",
          "compatible_lunchboxes": ["Yumbox Original/Panino", "b.box Lunchbox", "Montii Co Feast"],
          "product_link": "https://www.babybento.com.au/collections/montii-co-lunch-bags",
          "features": [
            "Generous and flexible sizing to fit most large lunchboxes.",
            "Separate back pocket for the ice pack.",
            "Includes an independently accredited food-safe gel ice pack.",
            "Easy to clean, durable lining.",
            "Quality thick insulation."
          ],
          "variations": [
            "Includes a range of small insulated Mini bags.",
            "Mini bags feature a convenient clip handle for attaching to backpacks or prams."
          ],
          "image": "https://cdn.shopify.com/s/files/1/1591/7213/files/MontiiCo-Insulated-Lunch-Bag-Sorbet-Sunset21.jpg?v=1699444334"
        }
      ]
    },
    {
      "heading": "Trending Brands in 2026",
      "content": "Here are the top three brands we recommend for quality, size, and features, catering to various needs from school to work.",
      "brands": [
        {
          "name": "Spencil Lunch Bags",
          "description": "Known for their fun, vibrant prints and high-quality build, Spencil bags are a favourite among primary school children.",
          "price_range": "$39.00 AUD",
          "dimensions": "24cm (W) x 26cm (H) x 9cm (D)",
          "compatible_lunchboxes": ["Bentgo Kids", "b.box large lunchbox", "smaller bento boxes"],
          "product_link": "https://www.babybento.com.au/collections/spencil-lunch-bags",
          "features": [
            "Made from soft, uncoated, and durable fabric.",
            "Easy-to-wipe thermal lining for quick cleanup.",
            "Front pocket for extra snacks or notes.",
            "Internal pocket designed to securely store an ice pack."
          ],
          "image": "https://cdn.shopify.com/s/files/1/1591/7213/files/spencil-urbanscrawl.webp?v=1739713993"
        },
        {
          "name": "b.box Lunch Bags",
          "description": "Designed to perfectly accommodate the popular bbox lunch boxes, these bags are rugged, highly insulated, and feature a modern aesthetic.",
          "price_range": "$43.00 AUD",
          "dimensions": "30cm (W) x 23cm (H) x 9cm (D)",
          "compatible_lunchboxes": ["b.box Lunchbox (perfect fit)", "Lunchbots", "Olababy Divided Plate"],
          "product_link": "https://www.babybento.com.au/collections/lunch-bags/bbox",
          "features": [
            "Insulated and flexible design, perfectly sized for b.box products.",
            "Top handle and clip for easy attachment to backpacks.",
            "Mesh pocket inside for dry items or cutlery.",
            "Made from lead-free, BPA-free, and Phthalates-free materials."
          ],
          "image": "https://cdn.shopify.com/s/files/1/1591/7213/files/bbox_mvp_lunch_bag.webp?v=1760929471"
        },
        {
          "name": "Sachi Adult Lunch Bags",
          "description": "Sachi specializes in insulated bags with a focus on adult style, offering designs that look more like handbags or totes while providing excellent thermal performance.",
          "price_range": "$30.00 AUD",
          "dimensions": "19cm (W) x 27cm (H) x 11.5cm (D)",
          "compatible_lunchboxes": ["Standard meal prep containers", "smaller bento boxes", "water bottles"],
          "product_link": "https://www.babybento.com.au/collections/sachi-lunch-bags",
          "features": [
            "Stylish, sophisticated designs ideal for work or travel.",
            "Leak-proof lining and thick insulation.",
            "Often features longer handles for shoulder carrying.",
            "Zippers and hardware designed for everyday adult use."
          ],
          "image": "https://cdn.shopify.com/s/files/1/1591/7213/files/sachi.bk.webp?v=1763635938"
        }
      ]
    },
    {
      "heading": "Keeping Lunch Bags Cool",
      "content": "For optimal performance, especially in summer, the use of quality ice packs or panels is essential to maintain food safety.",
      "cooling_products": [
        {
          "product_name": "Fridge to Go Ice Panel",
          "details": "Made of hard plastic, suitable for people who may not have freezer space readily available (e.g., at work). The hard design helps keep its shape.",
          "purchase_note": "Can be purchased separately to use with lunch bags that do not include a cooling element.",
          "product_link": "https://www.babybento.com.au/products/fridge-to-go-medium-spare-ice-panel"
        },
        {
          "product_name": "MontiiCo Ice Pack",
          "details": "A durable, food-safe gel ice pack included with most MontiiCo bags, but also sold separately as a powerful spare.",
          "purchase_note": "Often recommended as a top-up for other lunch bags, or as a replacement/spare.",
          "product_link": "https://www.babybento.com.au/products/montiico-ice-pack"
        }
      ]
    }
  ],
  "faq": [
    { "q": "What are the benefits of insulated bags?", "a": "Insulated bags keep your food at the right temperature for hours — hot stays warm, cold stays cool. They’re durable, reusable, easy to clean, and help reduce waste by replacing single-use plastics." },
    { "q": "What is the purpose of an insulated lunch bag?", "a": "The main purpose is to protect your meals. By maintaining a stable temperature, insulated lunch bags prevent spoilage and preserve freshness." },
    { "q": "Are insulated lunch bags worth it?", "a": "Absolutely. They save money, reduce waste, and improve freshness—making them a smart, long-term investment." },
    { "q": "Is an insulated lunch bag good for health?", "a": "Yes. By keeping perishable items like dairy and meat at safe temperatures, insulated bags reduce foodborne illness risk." },
    { "q": "Do insulated bags keep food cold?", "a": "They do. With proper insulation and an ice pack, food can stay chilled for hours." },
    { "q": "Can I put ice in an insulated lunch bag?", "a": "Yes — most insulated bags are water-resistant and easy to clean, but using gel ice packs is recommended for best performance and to avoid leaks." }
  ],
  "footer": {
    "heading": "Final Word: Building a Complete Bento Routine",
    "body": "Choosing the right insulated lunch bag is only part of the journey. To truly make mealtimes easier, fresher, and more fun, consider the full Baby Bento ecosystem of accessories. From ice packs and snack containers to playful add‑ons, these pieces work together to reduce waste, keep food safe, and make every lunch a little brighter.",
    "cta": { "label": "Explore Our Lunch Bag Collection", "link": "https://www.babybento.com.au/collections/lunch-bags" }
  }
};

function renderSpecs(brand) {
  let specsHtml = '<div class="lg-specs-grid" style="background: #f5f5f5; padding: 10px; border-radius: 4px; margin: 15px 0; font-size: 0.9rem;">';
  if (brand.price_range) specsHtml += `<div class="lg-specs-label" style="font-weight: bold; color: #555;">Price Range:</div><div class="lg-specs-value">${brand.price_range}</div>`;
  if (brand.dimensions) specsHtml += `<div class="lg-specs-label" style="font-weight: bold; color: #555;">Dimensions (W x H x D):</div><div class="lg-specs-value">${brand.dimensions}</div>`;
  if (brand.compatible_lunchboxes && brand.compatible_lunchboxes.length > 0) specsHtml += `<div class="lg-specs-compatibility-label" style="font-weight: bold; color: #555;">Fits:</div><div class="lg-specs-compatibility-value">${brand.compatible_lunchboxes.join(", ")}</div>`;
  specsHtml += "</div>";
  return specsHtml;
}

function renderLunchFaq() {
  let faqHtml = `<section class="lg-faq-section" style="background: #f9f9f9; padding: 2.5rem; border-radius: 8px;"><h2 class="lg-heading">FAQ: Insulated Lunch Bags</h2><div class="lg-faq-list">`;
  lunchGuideData.faq.forEach(item => faqHtml += `<details class="lg-faq-item"><summary class="lg-faq-question">${item.q}</summary><div class="lg-faq-answer"><p>${item.a}</p></div></details>`);
  faqHtml += `</div></section>`;
  return faqHtml;
}

function renderLunchGuide() {
  const container = document.getElementById("guide-content");
  if (!container) return;
  let html = `<header class="lg-hero"><div class="lg-icon-wrapper"><span style="font-size: 2.5rem;">🎒</span></div><div class="lg-title-wrapper"><h1 class="lg-title">${lunchGuideData.title}</h1></div><p class="lg-subtitle">${lunchGuideData.introduction}</p></header>`;

  lunchGuideData.sections.forEach(section => {
    html += `<section class="lg-section"><h2 class="lg-heading">${section.heading}</h2><p class="lg-section-content">${section.content}</p>`;
    if (section.brands) {
      html += '<div class="lg-brand-grid">';
      section.brands.forEach(brand => {
        const imageHtml = brand.image ? `<img src="${brand.image}" alt="${brand.name}" class="lg-brand-image" onerror="this.onerror=null;this.src='https://placehold.co/480x480/cccccc/333333?text=Image+Unavailable';">` : `<img src="https://placehold.co/480x480/cccccc/333333?text=Image+Unavailable" alt="${brand.name}" class="lg-brand-image">`;
        html += `<div class="lg-brand-card lg-card-default"><div class="lg-brand-image-wrapper">${imageHtml}</div><div class="lg-brand-content"><h3 class="lg-brand-name"><a href="${brand.product_link}" target="_blank" class="lg-brand-link">${brand.name}</a></h3><p class="lg-brand-desc">${brand.description}</p>${renderSpecs(brand)}<h4 class="lg-features-heading">Key Features:</h4><ul class="lg-feature-list">`;
        if (brand.features) brand.features.forEach(f => html += `<li class="lg-feature-item">${f}</li>`);
        html += `</ul>`;
        if (brand.variations) { html += `<h4 class="lg-features-heading" style="margin-top:15px;">Variations:</h4><ul class="lg-feature-list">`; brand.variations.forEach(v => html += `<li class="lg-feature-item">${v}</li>`); html += `</ul>`; }
        html += `<a href="${brand.product_link}" class="lg-brand-cta lg-btn-outline" target="_blank">Shop Now</a></div></div>`;
      });
      html += "</div>";
    }
    if (section.cooling_products) {
       html += '<div class="lg-brand-grid">';
       section.cooling_products.forEach(product => {
          html += `<div class="lg-brand-card lg-card-default"><div class="lg-brand-content"><h3 class="lg-brand-name"><a href="${product.product_link}" target="_blank" class="lg-brand-link">${product.product_name}</a></h3><p class="lg-brand-desc">${product.details}</p><p class="lg-brand-desc" style="font-style: italic; font-size: 0.9em;">${product.purchase_note}</p><a href="${product.product_link}" class="lg-brand-cta lg-btn-outline" target="_blank">Shop Now</a></div></div>`;
       });
       html += '</div>';
    }
    html += "</section>";
  });
  html += renderLunchFaq();
  const footer = lunchGuideData.footer;
  html += `<footer class="lg-footer"><div class="lg-container lg-footer-content-wrapper"><div class="lg-footer-content"><h2 class="lg-footer-heading">${footer.heading}</h2><p class="lg-footer-body">${footer.body}</p><a href="${footer.cta.link}" class="lg-footer-cta" target="_blank">${footer.cta.label}</a></div></div></footer>`;
  container.innerHTML = html;
}

window.renderLunchGuide = renderLunchGuide;
document.addEventListener("DOMContentLoaded", renderLunchGuide);