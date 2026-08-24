// Single source of truth for NAP, schema, and templated copy.
// Clone this repo per city/service and edit only this file to launch a new site.
export const SITE = {
  service: "Keratin Treatment",
  serviceSlug: "keratin-treatment",
  city: "Elmwood Park",
  state: "IL",
  zip: "60707",
  geo: { lat: 41.9211, lng: -87.8167 },
  domain: "keratintreatmentelmwoodpark.com",
  siteUrl: "https://keratintreatmentelmwoodpark.com",

  // BUILDER NOTE: replace every placeholder below with real, verifiable data
  // before launch. NAP must be identical here, on the Google Business Profile,
  // and on every directory listing (Yelp, etc). A mismatch or a fabricated
  // address/rating is a suspension and de-index risk.
  businessName: "[SITE/BUSINESS NAME]",
  phone: "[CALLRAIL NUMBER]", // e.g. "+1-708-555-0100" — CallRail tracking number
  phoneDisplay: "[CALLRAIL NUMBER — DISPLAY FORMAT]", // e.g. "(708) 555-0100"
  address: "[REAL STREET ADDRESS]", // must match the partner salon's real, servicing location
  email: "[CONTACT EMAIL]",

  priceRange: "$$",
  areaServed: [
    "Elmwood Park",
    "River Grove",
    "River Forest",
    "Forest Park",
    "Oak Park",
    "Berwyn",
    "Melrose Park",
    "Chicago",
  ],

  hours: [
    { days: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], opens: "09:00", closes: "18:00" },
  ],

  social: {
    instagram: "", // e.g. "https://instagram.com/yoursalon"
    facebook: "",
    google: "", // Google Business Profile URL, once claimed
  },
} as const;

export const NAV = [
  { label: "Keratin Treatments", href: "/" },
  { label: "Brazilian Blowout", href: "/brazilian-blowout/" },
  { label: "Nanoplasty", href: "/nanoplasty/" },
  { label: "Cost", href: "/keratin-treatment-cost/" },
  { label: "About", href: "/about/" },
  { label: "Contact", href: "/contact/" },
] as const;
