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
  businessName: "Keratin Treatment Elmwood Park",
  phone: "+1-773-946-5858", // CallRail tracking number
  phoneDisplay: "(773) 946-5858",
  address: "", // must stay empty until a real partner salon is attached — see hasPhysicalLocation below
  email: "info@keratintreatmentelmwoodpark.com",

  // Organic-only / lead-referral mode: there is no physical salon behind this
  // site yet. It ranks in normal search and routes callers to the operator.
  // Flip this to true (and fill in `address` above) once a real partner
  // salon is attached — LocalBusiness/HairSalon schema switches on from this
  // flag with no code changes required elsewhere.
  hasPhysicalLocation: false,

  // Typical Elmwood Park guide ranges — update once real partner pricing is confirmed.
  prices: [
    { name: "Express keratin", range: "$150–$250" },
    { name: "Brazilian blowout", range: "$250–$400" },
    { name: "Traditional / full keratin", range: "$300–$450" },
    { name: "Nanoplasty / specialty", range: "$350–$550" },
  ],

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
