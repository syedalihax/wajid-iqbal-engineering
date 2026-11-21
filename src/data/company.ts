export interface ServiceItem {
  code: string;
  title: string;
  description: string;
  scope: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category:
    | "Commercial & Auto"
    | "Residential"
    | "Institutional"
    | "Civil Engineering";
  location: string;
  scope: string;
  image?: string;
  alt: string;
}

export const COMPANY_INFO = {
  name: "Wajid Iqbal & Engineering",
  shortName: "Wajid Iqbal & Eng.",
  ceoName: "Iqbal Khan",
  ceoTitle: "Founder & Chief Executive Officer",
  experienceYears: "30+",
  city: "Karachi",
  address: "Street No. 2, Near Chase Up, Hassan Square, Karachi",
  email: "Wajidiqbal&engineering66@gmail.com",
  phones: [
    {
      display: "+92 300 0288366",
      tel: "+923000288366",
      whatsapp: "https://wa.me/923000288366",
    },
    {
      display: "+92 321 9292411",
      tel: "+923219292411",
      whatsapp: "https://wa.me/923219292411",
    },
  ],
  licensingNote: "Registered & Licensed Civil Engineering & Construction Firm",
};

export const SERVICES: ServiceItem[] = [
  {
    code: "01",
    title: "Residential Construction",
    description:
      "Turnkey houses, custom designer villas, and grey-structure execution built to strict structural and finishing standards across Karachi.",
    scope: [
      "Grey Structure & Turnkey",
      "Bungalows & Villas",
      "MEP & Waterproofing",
    ],
  },
  {
    code: "02",
    title: "Commercial Buildings & Plazas",
    description:
      "Multi-storey commercial plazas, corporate office buildings, and retail spaces engineered for load durability and modern utility.",
    scope: [
      "Multi-Storey Plazas",
      "Office Buildings",
      "Structural Execution",
    ],
  },
  {
    code: "03",
    title: "Automotive Showrooms & Workshops",
    description:
      "Specialized design-and-build delivery for flagship car dealerships, glass showrooms, and heavy-duty automotive service bays.",
    scope: [
      "Haval & Chery Facilities",
      "3S Dealership Showrooms",
      "Service Workshops",
    ],
  },
  {
    code: "04",
    title: "Civil Engineering",
    description:
      "Core structural and site engineering including deep foundations, RCC framing, soil stabilization, and industrial-grade bitumen waterproofing.",
    scope: [
      "RCC & Foundations",
      "Bitumen Waterproofing",
      "Site Infrastructure",
    ],
  },
  {
    code: "05",
    title: "Architecture & Design",
    description:
      "Practical architectural planning, 3D elevations, municipal approval drawings, and structural layouts tailored for Karachi plots.",
    scope: [
      "Architectural Planning",
      "3D Elevations",
      "Working Drawings",
    ],
  },
  {
    code: "06",
    title: "Interior Design & Finishing",
    description:
      "Complete interior fit-outs for executive offices, showrooms, mosques, and luxury residences with durable material curation.",
    scope: [
      "Corporate & Office Interiors",
      "Residential Fit-Outs",
      "Custom Wood & Stone",
    ],
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "haval-showroom",
    title: "Haval Motors Showroom & Workshop",
    category: "Commercial & Auto",
    location: "Karachi",
    scope: "Automotive Showroom & Service Workshop Construction",
    image: "/images/haval-showroom.jpg",
    alt: "Haval Motors glass facade automotive showroom constructed in Karachi",
  },
  {
    id: "chery-facility",
    title: "Chery Showroom & Service Workshop",
    category: "Commercial & Auto",
    location: "Karachi",
    scope: "Dealership Elevation, Service Bays & Civil Works",
    alt: "Chery Motors automotive showroom and service workshop in Karachi",
  },
  {
    id: "dha-school",
    title: "Educational Campus — DHA",
    category: "Institutional",
    location: "DHA, Karachi",
    scope: "Multi-Storey Academic Block & Exterior Finishing",
    image: "/images/school-dha.jpg",
    alt: "Three-storey school building constructed in DHA Karachi",
  },
  {
    id: "gadap-masjid",
    title: "VIP Jamia Masjid",
    category: "Institutional",
    location: "Gadap Town, Karachi",
    scope: "Turnkey Mosque Architecture, Lattice Screens & Construction",
    image: "/images/masjid-gadap.jpg",
    alt: "White architectural mosque built in Gadap Town Karachi",
  },
  {
    id: "stone-villa",
    title: "Stone-Clad Modern Residence",
    category: "Residential",
    location: "Karachi",
    scope: "Turnkey Villa Construction, Jaali Facade & Glass Balconies",
    image: "/images/villa-stone.jpg",
    alt: "Modern grey stone residential villa with geometric screen in Karachi",
  },
  {
    id: "contemporary-house",
    title: "Contemporary Private Residence",
    category: "Residential",
    location: "Karachi",
    scope: "Architecture, Grey Structure & Exterior Elevation",
    image: "/images/villa-elevation.jpg",
    alt: "Contemporary grey and wood residential house elevation in Karachi",
  },
  {
    id: "office-residential-interior",
    title: "Executive Lobby & Residential Interior",
    category: "Residential",
    location: "Karachi",
    scope: "Double-Height Interior Architecture, Stone & Lighting",
    alt: "Double-height modern office and residential interior space in Karachi",
  },
  {
    id: "civil-foundation-works",
    title: "RCC Substructure & Waterproofing",
    category: "Civil Engineering",
    location: "Karachi",
    scope: "Column Footings, Plinth Beams & Bitumen Damp-Proofing",
    image: "/images/civil-foundation.jpg",
    alt: "Bitumen waterproofed RCC foundation and plinth beams on Karachi site",
  },
];
