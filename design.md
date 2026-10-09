# Aura Studio — Design System & Specification (`design.md`)

Derived from the visual identity of **Aura Studio**: *"Designing spaces. Elevating lives."*

---

## 1. Visual Philosophy & Core Aesthetic

Aura Studio fuses **warm architectural biophilic minimalism** with **ultra-tactile frosted glassmorphism**. The visual world is inspired by sunlit travertine sanctuaries, polished ceramic sculptures, volcanic pumice stones, and pure frosted blown-glass domes.

Unlike cold, neo-digital tech glassmorphism with neon cyan/magenta glows, Aura Studio’s materiality is grounded in:
- **Earthy Sand & Travertine Warmth**: Soft, sun-dappled daylight, natural travertine limestone, and warm bone ceramics.
- **Physical Glass Tactility**: Thick, silky milk-glass diffusion (`backdrop-blur-2xl`), subtle specular perimeter light catches (`border-white/50`), and inner ambient bevels.
- **Sculptural Editorial Typography**: Luxurious, high-contrast serif headlines grounded by quiet, airy geometric tracking.
- **Sun-Baked Terracotta Accents**: Focused energetic moments in terracotta ochre (`#C26E42`) for primary calls-to-action and active status marks.

---

## 2. Color Palette & Design Tokens

### A. Foundations & Canvas (60%)
- **Travertine Light Canvas**: `#F4EFEA` (Warm sandstone neutral)
- **Sunlit Cream**: `#FAF7F2` (Pure bleached linen & warm plaster)
- **Architectural Sandstone**: `#E8DFD3` (Structural stone baseline)
- **Deep Sanctuary Charcoal / Espresso**: `#1F1A16` (High-contrast rich dark ground for evening or immersive views)

### B. Glass Surfaces & Tactility (30%)
- **Milk Glass Fill**: `rgba(250, 246, 240, 0.42)` with `backdrop-filter: blur(28px) saturate(140%)`
- **Glass Specular Border**: `1px solid rgba(255, 255, 255, 0.65)` (Top/Left highlight) transitioning to `rgba(215, 202, 187, 0.35)` (Bottom/Right shadow)
- **Glass Inner Bevel**: `inset 0 1px 2px rgba(255, 255, 255, 0.8), inset 0 -1px 2px rgba(180, 160, 140, 0.15)`
- **Ambient Elevation Shadow**: `0 24px 48px -12px rgba(60, 48, 36, 0.12), 0 12px 24px -8px rgba(60, 48, 36, 0.08)`
- **Tactile Clay Pill Surface**: `rgba(235, 222, 206, 0.55)` with subtle rim highlight

### C. High-Intent Accent Budget (10%)
- **Terracotta Ochre**: `#C26E42` (Signature primary action color)
- **Terracotta Deep Hover**: `#A85830`
- **Terracotta Ambient Glow**: `rgba(194, 110, 66, 0.28)`
- **Amber Status Dot**: `#D97706` (Signifying Top Role / Active Openings)
- **Warm Bronze Icon Finish**: Gradient from `#D78B5F` to `#A85A34`

### D. Typography & Contrast
- **Primary Text (Warm Espresso)**: `#2A221B` (WCAG AAA compliant on cream surfaces)
- **Secondary Text (Muted Earth)**: `#6B5D52`
- **Subtle Metadata / Captions**: `#8F8175`
- **Inverse Light Text**: `#FAF7F2`

---

## 3. Typographic Hierarchy

| Role | Font Family | Weight | Size / Line-Height | Tracking / Details |
| :--- | :--- | :--- | :--- | :--- |
| **Monogram** | `Outfit` / Custom Starlet | SemiBold 600 | 20px / 1 | Monogram `A✦` inside circle |
| **Brand Wordmark** | `Outfit` / `Plus Jakarta Sans` | Medium 500 | 12px / 1.2 | `tracking-[0.25em]` Uppercase |
| **Hero Headline** | `Playfair Display` | Medium 500 / 600 | `clamp(2.5rem, 5vw, 4.25rem)` / 1.1 | High-contrast editorial serif, `text-wrap: balance` |
| **Card Title (`Spatial Designer`)** | `Playfair Display` | SemiBold 600 | 36px–42px / 1.15 | Sculptural, organic serif with tight kerning |
| **Card Subtitle** | `Plus Jakarta Sans` | Regular 400 | 17px / 1.4 | Soft brown with terracotta emphasis (`feel alive.`) |
| **Pill Key/Value** | `Plus Jakarta Sans` | 600 / 400 | 14px / 1.3 | Semi-bold title with muted descriptor beneath |
| **Financial / Tabular** | `Plus Jakarta Sans` | Bold 700 | 20px–22px / 1.2 | `tabular-nums` for `$120K – $180K` |
| **Micro-Kicker (`TOP ROLE`)**| `Plus Jakarta Sans` | SemiBold 600 | 11px / 1 | `tracking-[0.18em]` Uppercase with terracotta dot |

---

## 4. Master Component Specification: The Signature Role Card

Directly modeled from the uploaded design artifact:

```
┌──────────────────────────────────────────────────────────────────┐
│  (A✦)  AURA STUDIO                         [ Save for later 🔖 ] │
│        Designing spaces. Elevating lives.                        │
│                                                                  │
│  TOP ROLE 🟠                                                     │
│  Spatial Designer                                                │
│  Shape spaces that feel alive.                                   │
│                                                                  │
│  ┌───────────────────────┐   ┌───────────────────────┐           │
│  │ [💼] Full-Time        │   │ [🏛️] Creative Studio │           │
│  │     Permanent         │   │     Collaborative Team│           │
│  └───────────────────────┘   └───────────────────────┘           │
│  ─────────────────────────────────────────────────────────────── │
│  COMPENSATION                            ┌─────────────────────┐ │
│  $120K – $180K                           │  Explore Role  →    │ │
│  + Performance Bonus                     └─────────────────────┘ │
│  📍 LOCATION : Los Angeles, CA                                   │
└──────────────────────────────────────────────────────────────────┘
```

### Key Sub-elements:
1. **Glass Container**:
   - `rounded-[32px]`, `p-8` to `p-9`
   - Outer border: `1.5px solid rgba(255, 255, 255, 0.65)`
   - Background: `linear-gradient(135deg, rgba(255,255,255,0.48) 0%, rgba(246,240,230,0.36) 100%)`
   - Backdrop filter: `blur(24px) saturate(130%)`
2. **Brand Lockup**:
   - Monogram circle: `w-12 h-12 rounded-full bg-white/70 shadow-sm border border-white/80`
   - Typography: `AURA STUDIO` with `tracking-[0.22em]`, description `Designing spaces. Elevating lives.` in `#7C6C60`
3. **Save For Later Action**:
   - Pill container `px-4 py-2 rounded-full bg-white/50 border border-white/60 hover:bg-white/80`
   - Bookmark icon with filled/unfilled active toggle state
4. **Editorial Header**:
   - `TOP ROLE 🟠`: Terracotta dot (`w-2 h-2 rounded-full bg-[#C26E42]`)
   - `Spatial Designer`: High-contrast serif in deep espresso (`#2A221B`)
   - `Shape spaces that feel alive.`: `"feel alive."` styled in `#C26E42 font-medium`
5. **Tactile Meta Capsules**:
   - Two equal-width flexible cards with `rounded-2xl bg-white/40 border border-white/50 p-3.5`
   - Metallic embossed clay 3D icons (Briefcase, Studio Arch)
   - Two-line data: Headline (`Full-Time`, `Creative Studio`) + Descriptor (`Permanent`, `Collaborative Team`)
6. **Divider**:
   - `border-t border-stone-300/40 my-6`
7. **Compensation & Location Footer**:
   - Left: Label `COMPENSATION` (`text-[11px] uppercase tracking-wider text-stone-500`), Value `$120K – $180K` (`text-xl font-bold font-sans text-stone-900 tabular-nums`), subtext `+ Performance Bonus`
   - Location row: Map pin icon in soft circular pill, `LOCATION: Los Angeles, CA`
   - Right: Primary CTA button `Explore Role →`:
     - Background: `linear-gradient(135deg, #C26E42 0%, #A85830 100%)`
     - Text: Clean white, `px-7 py-3.5 rounded-full font-medium shadow-lg shadow-[#C26E42]/25`
     - Arrow: Smooth 3px slide on hover

---

## 5. Physical Metaphor & 3D Spatial Environment

The card floats in a serene architectural still-life composition:
- **Blown Frosted Glass Dome**: Symbolizing pure spatial containment and architectural envelopes.
- **Polished Ceramic Spheres**: Perfectly smooth bone-white porcelain globes casting warm soft shadows onto the stone table.
- **Organic Pumice & River Stones**: Porous, textured natural volcanic pumice paired with smooth tumbled pebbles, representing material truth and biophilic balance.
- **Travertine Sandstone Table**: Warm limestone with natural fissures and tactile pores.
- **Desert Flora**: Sculptural potted cactus and dry-climate botanicals, connecting indoor architecture to natural landscapes.

---

## 6. Interaction & Motion Patterns

1. **Spatial Tilt Micro-Interaction**:
   - Subtle 3D perspective shift on mouse move (`perspective: 1200px`, `rotateX`, `rotateY` $\le \pm 4^\circ$).
   - Specular light reflection follows cursor across the glass surface.
2. **Tactile Feedback**:
   - Bookmark button triggers a subtle scale bounce and persistent saved list counter.
   - Primary buttons respond within $\le 150\text{ms}$ with `cubic-bezier(0.16, 1, 0.3, 1)`.
3. **Role Exploration Drawer / Modal**:
   - Clicking `Explore Role →` smoothly transitions into an in-depth role sheet featuring:
     - Design studio philosophy & current spatial projects
     - Detailed responsibilities & material research focus
     - Studio perks (sabbaticals, material residency, fabrication lab access)
     - Interactive Application submission flow with live portfolio reviewer
4. **Atmosphere Controls**:
   - Interactive Lighting Toggle: Morning Sunlight (Default Travertine) vs. Twilight Warm Lantern (Sculptural Dusk)
   - Interactive Frosted Glass Opacity slider allowing live inspection of the diffusion layer
   - Interactive Soundscape: Ambient gentle studio wind chime / desert breeze sound generator (Web Audio API synthesized, no external audio files needed).
