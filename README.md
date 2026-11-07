# Demo Safaris Uganda

Demonstration Showcase Website: Uganda Bespoke Overland Journeys, Primate Habituation, and Private Conservation Safaris.

Built with **Astro 5** and **Tailwind CSS v4**.

Direct Contact / WhatsApp: +256 784 811 929

---

## Architectural Principles & Design System

1. **Editorial Safari Heritage Aesthetic**:
   - Palette inspired by Ugandan highland rain forests and savannas: Deep Forest Moss (`#0e231b`, `#16382c`), Muted Ochre Gold (`#c89b53`, `#dfb674`), and Warm Canvas Alabaster (`#faf8f5`, `#f3efe6`).
   - Classic typographic hierarchy pairing `Cormorant Garamond` (high-end editorial serif) with `Plus Jakarta Sans` (crisp, readable body copy).
   - Zero AI-generated clichés or generic placeholder buzzwords: built with authentic Ugandan conservation frameworks, official Uganda Wildlife Authority (UWA) tariffs, certified guide licensing (USAGA), and verified lodge partners.

2. **Negative Constraint Guarantees**:
   - **Zero Emojis**: Clean, vector-crafted SVG icons throughout. No cartoon or informal emoji graphics.
   - **Zero Em-Dashes (M-Dashes)**: Clean typographic punctuation (colons, commas, periods, and parentheticals) strictly replacing any em-dash usage.

3. **Motion & Transitions**:
   - Seamless cross-page morphing and fade animations powered by Astro's `<ClientRouter />`.
   - Scroll-triggered reveal animations via `IntersectionObserver` (`.fade-in-view`).
   - Subtle image zoom micro-interactions on hover.

4. **Mobile Optimization**:
   - Slide-in responsive navigation drawer with backdrop blur.
   - Sticky mobile bottom quick-action bar with direct access to WhatsApp concierge, instant phone calling, and bespoke safari inquiry form.
   - Touch targets designed to exceed standard 44px accessibility thresholds.

---

## Multi-Page Route Structure

- `/` (Home): Cinema hero banner, quick safari search & filter bar, signature expeditions, mountain gorilla habituation spotlight, national parks directory, private fleet standards, and verified client testimonials.
- `/safaris` (Safaris Catalog): Complete catalog of 6 hand-crafted expeditions with instant client-side category filtering (Primate & Gorilla, Classic Savanna, Grand Expedition, Photographic & Birding).
- `/safaris/[slug]` (Dynamic Itinerary Details): Dynamic static pages for each expedition featuring full day-by-day narratives, accommodation partners, meal plans, inclusions, exclusions, and sticky inquiry cards.
- `/gorilla-trekking` (Gorilla Authority Guide): Authoritative guide comparing Standard 1-Hour Tracking ($800 UWA) against the rare 4-Hour Habituation Experience ($1,500 UWA). Explains Bwindi trailheads (Buhoma, Ruhija, Rushaga, Nkuringo), fitness advisory, porter support, and essential packing checklists.
- `/destinations` (National Parks & Ecosystems): Comprehensive directory covering Bwindi Impenetrable, Queen Elizabeth & Ishasha, Kibale Forest, Murchison Falls, Kidepo Valley, and Lake Mburo.
- `/conservation` (Conservation & Community Charter): Explains the Uganda Wildlife Authority 20% revenue share model, frontline ranger patrol support, Batwa cultural preservation, single-use plastic eradication, and indigenous tree reforestation buffers.
- `/about` (About Our Guild): History of our naturalist-founded company (established 2012), fleet specifications (custom extended 4x4 Toyota Land Cruisers with pop-up photographic roofs), and AMREF Flying Doctors aero-medical safety coverage.
- `/contact` (Bespoke Safari Planner & Concierge): Interactive custom itinerary builder with field selection for dates, group size, wildlife priorities, lodge tiers, plus FAQ accordion and direct Kampala/Entebbe contact channels.

---

## Local Development & Commands

```bash
# Start local development server (http://localhost:4321)
npm run dev

# Build optimized production static bundle to dist/
npm run build

# Preview the static distribution locally
npm run preview
```

