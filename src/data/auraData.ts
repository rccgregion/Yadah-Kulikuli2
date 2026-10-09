export interface StudioRole {
  id: string;
  isTopRole?: boolean;
  title: string;
  tagline: string;
  highlightPhrase: string;
  employmentType: string;
  contractType: string;
  team: string;
  teamType: string;
  compensationMin: number;
  compensationMax: number;
  bonusText: string;
  location: string;
  department: string;
  description: string;
  responsibilities: string[];
  qualifications: string[];
  studioPerks: string[];
  materialsUsed: string[];
}

export interface StudioProject {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  year: string;
  location: string;
  image: string;
  description: string;
  materials: string[];
}

export const STUDIO_DATA = {
  name: "Aura Studio",
  monogram: "A✦",
  tagline: "Designing spaces. Elevating lives.",
  headline: "Shape spaces that feel alive.",
  location: "Los Angeles, CA",
  studioAddress: "724 S Santa Fe Ave, Arts District, Los Angeles, CA 90021",
  stats: [
    { label: "Completed Sanctuaries", value: "24", unit: "Spaces" },
    { label: "Architectural Biennial Honors", value: "05", unit: "Awards" },
    { label: "Raw Mineral Fidelity", value: "100%", unit: "Natural Stone & Glass" },
    { label: "Design Cohort", value: "14", unit: "Collaborators" },
  ],
  principles: [
    {
      index: "01",
      title: "Material Sincerity",
      description: "We work strictly with unveneered travertine, cast bronze, hand-blown optical glass, and porous pumice stone. Materials must age with dignity.",
    },
    {
      index: "02",
      title: "Circadian Illumination",
      description: "Light is not a fixture; it is an architectural medium. Every room is choreographed to receive morning raking light and gentle twilight luminescence.",
    },
    {
      index: "03",
      title: "Tactile Biophilia",
      description: "Introducing living desert flora and calibrated acoustics that reduce cortical stress, establishing an environment of stillness.",
    },
  ],
};

export const STUDIO_ROLES: StudioRole[] = [
  {
    id: "spatial-designer",
    isTopRole: true,
    title: "Spatial Designer",
    tagline: "Shape spaces that feel alive.",
    highlightPhrase: "feel alive.",
    employmentType: "Full-Time",
    contractType: "Permanent",
    team: "Creative Studio",
    teamType: "Collaborative Team",
    compensationMin: 120000,
    compensationMax: 180000,
    bonusText: "+ Performance Bonus",
    location: "Los Angeles, CA",
    department: "Spatial Design",
    description: "Lead sensory architectural interiors and physical spatial installations from tactile concept models to physical material execution. You will sculpt spaces that balance monolithic stone presence with weightless frosted glass light-wells.",
    responsibilities: [
      "Develop comprehensive schematic and spatial design packages for high-profile residential and cultural sanctuaries.",
      "Work directly with our fabrication workshop in the Arts District to prototype custom blown-glass fixtures, travertine plinths, and tactile joinery.",
      "Model physical lighting environments, circadian solar studies, and acoustic material dampening.",
      "Collaborate closely with master stone-masons, landscape botanists, and lighting engineers.",
    ],
    qualifications: [
      "4+ years of professional experience in spatial, interior architectural, or experiential design.",
      "Exceptional tactile sensitivity to natural materials, unvarnished stone, cast bronze, and glass physics.",
      "Proficiency in 3D spatial modeling (Rhino, Blender, Cinema 4D, or AutoCAD) with keen eye for physical mockups.",
      "Strong storytelling and spatial diagramming skills; ability to communicate emotional resonance.",
    ],
    studioPerks: [
      "Full comprehensive medical, dental, and holistic wellness coverage.",
      "$8,000 annual material & research travel sabbatical.",
      "Dedicated workbench and fabrication laboratory access in our downtown LA studio.",
      "Four-day restorative workweek during summer design retreats.",
      "Annual studio profit-sharing pool and performance bonus.",
    ],
    materialsUsed: [
      "Roman Travertine",
      "Hand-Blown Frosted Silica",
      "Ceramic Bone Porcelain",
      "Porous Volcanic Pumice",
      "Raw Cast Bronze",
    ],
  },
  {
    id: "materiality-architect",
    isTopRole: false,
    title: "Materiality & Bio-Architect",
    tagline: "Curate living rammed earth and mineral textures.",
    highlightPhrase: "living rammed earth",
    employmentType: "Full-Time",
    contractType: "Permanent",
    team: "Research & Sourcing",
    teamType: "Material Lab",
    compensationMin: 130000,
    compensationMax: 195000,
    bonusText: "+ Sourcing Grant",
    location: "Los Angeles, CA",
    department: "Materials Lab",
    description: "Spearhead our material provenance laboratory, establishing carbon-negative mineral binders, ethical travertine extraction, and desert xeriscape integration.",
    responsibilities: [
      "Manage quarry relationships in Italy, Mexico, and California for responsible limestone and stone selection.",
      "Formulate custom earthen plasters, lime washes, and non-toxic tactile finishes.",
      "Document material aging tests under natural ultraviolet and coastal marine conditions.",
    ],
    qualifications: [
      "Degree in Architecture, Material Science, or Architectural Preservation.",
      "Deep understanding of mineral chemistry, hydration cycles, and sustainable construction.",
    ],
    studioPerks: [
      "Bi-annual field research trips to regional quarries and artisanal kilns.",
      "Generous health, vision, and mental health wellness packages.",
    ],
    materialsUsed: ["Rammed Earth", "Hydraulic Lime", "Volcanic Tuff", "Reclaimed Teak"],
  },
  {
    id: "light-acoustic-scenographer",
    isTopRole: false,
    title: "Light & Acoustic Scenographer",
    tagline: "Compose silent reverberations and sun-arcs.",
    highlightPhrase: "silent reverberations",
    employmentType: "Full-Time",
    contractType: "Permanent",
    team: "Sensory Engineering",
    teamType: "Installation Team",
    compensationMin: 115000,
    compensationMax: 165000,
    bonusText: "+ Fabrication Stipend",
    location: "Los Angeles, CA",
    department: "Sensory Scenography",
    description: "Design the intangible atmosphere of each sanctuary: how footsteps sound on travertine slabs, how sunlight filters through frosted glass domes, and how quietude is preserved.",
    responsibilities: [
      "Run room acoustic simulations and integrate discrete micro-perforated acoustic absorbers.",
      "Design custom warm luminaires (2200K–2700K high-CRI) that evoke candle glow and morning dawn.",
      "Test optical refraction through fluted, bubbled, and sandblasted glass panes.",
    ],
    qualifications: [
      "3+ years experience in architectural lighting or acoustic design.",
      "Working knowledge of circadian lighting metrics and acoustic impulse response analysis.",
    ],
    studioPerks: [
      "Comprehensive insurance, 401(k) matching, and creative equipment allowance.",
    ],
    materialsUsed: ["Frosted Borosilicate", "Acoustic Hemp Felt", "Cast Amber Resin", "Waxed Brass"],
  },
  {
    id: "computational-spatial-lead",
    isTopRole: false,
    title: "Computational Spatial Director",
    tagline: "Harmonize biophilic algorithms with artisanal hand-craft.",
    highlightPhrase: "biophilic algorithms",
    employmentType: "Full-Time",
    contractType: "Permanent",
    team: "Digital Atelier",
    teamType: "Parametric Spatial",
    compensationMin: 145000,
    compensationMax: 210000,
    bonusText: "+ Equity Participation",
    location: "Los Angeles, CA / Hybrid",
    department: "Digital Atelier",
    description: "Bridge algorithmic computational design with organic physical craftsmanship. Develop parametric scripts for curved rammed earth walls, self-shading roof arches, and bespoke stone tessellations.",
    responsibilities: [
      "Develop Grasshopper/Python scripts that optimize natural ventilation and solar daylight factors.",
      "Generate toolpaths for 5-axis robotic stone carving and CNC wood joinery.",
      "Build real-time interactive spatial simulations for client walkthroughs.",
    ],
    qualifications: [
      "Proficiency in Rhino, Grasshopper, Python, and real-time visualization.",
      "Passion for translating mathematical logic into organic, warm tactile beauty.",
    ],
    studioPerks: [
      "High-spec workstation with dual GPU setup and VR spatial testing chamber.",
      "Profit sharing and flexible studio/hybrid schedule.",
    ],
    materialsUsed: ["Robotic Carved Travertine", "Curved Laminated Timber", "3D-Printed Clay"],
  },
];

export const STUDIO_PROJECTS: StudioProject[] = [
  {
    id: "ojai-travertine-sanctuary",
    title: "The Ojai Travertine Pavilion",
    subtitle: "Private Residential Sanctuary",
    category: "Residential Architecture",
    year: "2025",
    location: "Ojai, California",
    image: "/src/assets/images/aura_project_sanctuary_1791569836196.jpg",
    description: "A series of curved rammed-earth and travertine colonnades nestled into the Topatopa mountain foothills. Featuring an open-air reflecting pool and natural desert botanicals.",
    materials: ["Roman Travertine", "Rammed Earth", "Blown Glass Arches", "Acoustic Hemp"],
  },
  {
    id: "arts-district-atelier",
    title: "Aura Creative Studio & Zen Court",
    subtitle: "Studio Headquarters & Workshop",
    category: "Workplace & Atelier",
    year: "2024",
    location: "Arts District, Los Angeles",
    image: "/src/assets/images/aura_spatial_hero_1791569826413.jpg",
    description: "Our daylight-flooded laboratory featuring an indoor pebble and moss courtyard, sculptural curved glass skylight, and open solid-walnut design desks.",
    materials: ["Sandstone Slabs", "Black River Pebbles", "Polished Ceramic Spheres", "Walnut Timber"],
  },
  {
    id: "mineral-dome-study",
    title: "Silica & Pumice Still-Life Laboratory",
    subtitle: "Material Prototype Installation",
    category: "Sensory Installation",
    year: "2026",
    location: "Venice Biennale & LA Gallery",
    image: "/src/assets/images/aura_spatial_background_1791569815099.jpg",
    description: "An intimate exploration of weight and transparency: blown frosted silica domes balanced delicately on porcelain spheres over pitted volcanic pumice.",
    materials: ["Frosted Silica Dome", "Glazed Ceramic Spheres", "Volcanic Pumice", "Pitted Limestone"],
  },
];
