// TypeScript declarations for Service and Package
export type Service = {
  id: string;
  name: string;
  category: "Hair" | "Beauty" | "Nail";
  priceINR: number;
  durationMinutes: number;
};

export type Package = {
  id: string;
  name: string;
  description: string;
  services: string[]; // Array of service names or ids
  discount: number; // Discount as a decimal (e.g., 0.25 for 25%)
  regularPriceINR?: number;
  packagePriceINR?: number;
  savingsINR?: number;
};

// Hair, Beauty, and Nail Services
export const services: Service[] = [
  // Hair Services
  {
    id: "womens-cut-style",
    name: "Women's Cut & Style",
    category: "Hair",
    priceINR: 699,
    durationMinutes: 45,
  },
  {
    id: "mens-cut-style",
    name: "Men's Cut & Style",
    category: "Hair",
    priceINR: 499,
    durationMinutes: 30,
  },
  {
    id: "full-color",
    name: "Full Color",
    category: "Hair",
    priceINR: 1799,
    durationMinutes: 90,
  },
  {
    id: "highlights-balayage",
    name: "Highlights/Balayage",
    category: "Hair",
    priceINR: 3199,
    durationMinutes: 120,
  },
  {
    id: "color-correction",
    name: "Color Correction",
    category: "Hair",
    priceINR: 3499,
    durationMinutes: 150,
  },
  {
    id: "keratin-treatment",
    name: "Keratin Treatment",
    category: "Hair",
    priceINR: 3999,
    durationMinutes: 120,
  },
  {
    id: "hair-extensions",
    name: "Hair Extensions",
    category: "Hair",
    priceINR: 5999,
    durationMinutes: 150,
  },
  {
    id: "bridal-styling",
    name: "Bridal Styling",
    category: "Hair",
    priceINR: 2499,
    durationMinutes: 90,
  },
  {
    id: "scalp-treatment",
    name: "Scalp Treatment",
    category: "Hair",
    priceINR: 1499,
    durationMinutes: 60,
  },
  // Beauty Services
  {
    id: "classic-facial",
    name: "Classic Facial",
    category: "Beauty",
    priceINR: 1199,
    durationMinutes: 60,
  },
  {
    id: "anti-aging-facial",
    name: "Anti-Aging Facial",
    category: "Beauty",
    priceINR: 1799,
    durationMinutes: 70,
  },
  {
    id: "eyebrow-design",
    name: "Eyebrow Design",
    category: "Beauty",
    priceINR: 199,
    durationMinutes: 15,
  },
  {
    id: "eyebrow-tinting",
    name: "Eyebrow Tinting",
    category: "Beauty",
    priceINR: 399,
    durationMinutes: 20,
  },
  {
    id: "eyelash-extensions",
    name: "Eyelash Extensions",
    category: "Beauty",
    priceINR: 2499,
    durationMinutes: 90,
  },
  {
    id: "makeup-application",
    name: "Makeup Application",
    category: "Beauty",
    priceINR: 1499,
    durationMinutes: 60,
  },
  {
    id: "bridal-makeup",
    name: "Bridal Makeup",
    category: "Beauty",
    priceINR: 3999,
    durationMinutes: 120,
  },
  {
    id: "makeup-lessons",
    name: "Makeup Lessons",
    category: "Beauty",
    priceINR: 1999,
    durationMinutes: 90,
  },
  {
    id: "spa-massage",
    name: "Spa Massage",
    category: "Beauty",
    priceINR: 2199,
    durationMinutes: 60,
  },
  // Nail Services
  {
    id: "classic-manicure",
    name: "Classic Manicure",
    category: "Nail",
    priceINR: 399,
    durationMinutes: 30,
  },
  {
    id: "gel-manicure",
    name: "Gel Manicure",
    category: "Nail",
    priceINR: 699,
    durationMinutes: 45,
  },
  {
    id: "classic-pedicure",
    name: "Classic Pedicure",
    category: "Nail",
    priceINR: 499,
    durationMinutes: 40,
  },
  {
    id: "gel-pedicure",
    name: "Gel Pedicure",
    category: "Nail",
    priceINR: 899,
    durationMinutes: 60,
  },
  {
    id: "nail-art",
    name: "Nail Art",
    category: "Nail",
    priceINR: 599,
    durationMinutes: 30,
  },
  {
    id: "french-manicure",
    name: "French Manicure",
    category: "Nail",
    priceINR: 599,
    durationMinutes: 35,
  },
  {
    id: "paraffin-treatment",
    name: "Paraffin Treatment",
    category: "Nail",
    priceINR: 799,
    durationMinutes: 30,
  },
  {
    id: "nail-repair",
    name: "Nail Repair",
    category: "Nail",
    priceINR: 299,
    durationMinutes: 20,
  },
  {
    id: "acrylic-nails",
    name: "Acrylic Nails",
    category: "Nail",
    priceINR: 1499,
    durationMinutes: 90,
  },
];

// Helper function to find service price by name or id
const findServicePrice = (serviceNameOrId: string): number => {
  const service = services.find(
    (s) => s.name.toLowerCase() === serviceNameOrId.toLowerCase() || s.id.toLowerCase() === serviceNameOrId.toLowerCase()
  );
  return service ? service.priceINR : 0;
};

// Packages
export const packages: Package[] = [
  {
    id: "bridal-package",
    name: "Bridal Package",
    description: "Complete bridal beauty experience",
    services: [
      "bridal-styling",
      "bridal-makeup",
      "spa-massage",
    ],
    discount: 0.30,
  },
  {
    id: "pamper-package",
    name: "Pamper Package",
    description: "Full day of relaxation and beauty",
    services: [
      "womens-cut-style",
      "full-color",
      "classic-facial",
      "classic-manicure",
      "classic-pedicure",
    ],
    discount: 0.25,
  },
  {
    id: "gentlemans-package",
    name: "Gentleman's Package",
    description: "Complete grooming experience for men",
    services: [
      "mens-cut-style",
      "anti-aging-facial",
      "classic-manicure",
    ],
    discount: 0.25,
  },
].map((pkg) => {
  const regularPriceINR = Math.round(pkg.services.reduce((total, serviceName) => total + findServicePrice(serviceName), 0));
  const packagePriceINR = Math.round(regularPriceINR * (1 - pkg.discount));
  const savingsINR = Math.round(regularPriceINR - packagePriceINR);
  return {
    ...pkg,
    regularPriceINR,
    packagePriceINR,
    savingsINR,
  };
});
