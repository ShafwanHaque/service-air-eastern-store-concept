export type StandardIcon =
  | "cooling"
  | "heating"
  | "plumbing"
  | "air-quality"
  | "electrical"
  | "maintenance";

export type ThemeStyle = "clean" | "technical" | "industrial" | "warm";

export type ThemeColors = {
  brandPrimary: string;
  brandSecondary: string;
  brandAccent: string;
  page: string;
  surfaceDark: string;
  surfaceDarkAlt: string;
  surfaceElevated: string;
  surfaceSoft: string;
  textPrimary: string;
  textSecondary: string;
  textMuted: string;
  textOnBrand: string;
  borderSubtle: string;
  borderStrong: string;
  glowPrimary: string;
  glowSecondary: string;
  networkLine: string;
  success: string;
  service1: string;
  service2: string;
  service3: string;
  service4: string;
  service5: string;
};

export type CoverageLocation = {
  name: string;
  kind: "city" | "county" | "community";
  lat?: number;
  lng?: number;
  hub?: boolean;
  note?: string;
  href?: string;
};

export type ContactSubmissionMode = "demo" | "endpoint";

export type SiteConfig = {

  brand: {
    name: string;
    shortName: string;
    logo: string;
    logoLight: string;
    region: string;
  };

  theme: {
    style: ThemeStyle;
    colors: ThemeColors;
  };

  header: {
    navServices: string;
    navAreas: string;
    navContact: string;
    helpLabel: string;
    ctaLabel: string;
    mobileEyebrow: string;
    mobileCallLabel: string;
  };

  opening: {
    enabled: boolean;
    /** Total screen time including the final one-sheet lift reveal. */
    durationMs: number;
    eyebrow: string;
    line1: string;
    line2: string;
    detail: string;
    location: string;
    skipLabel: string;
  };

  hero: {
    /** The Climate Chamber is the new signature, with photo-based legacy layouts retained. */
    layout: "service-craft" | "climate-chamber" | "open-door" | "picture-window" | "keepsake";
    eyebrow: string;
    headlineLine1: string;
    headlineLine2: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    locationLabel: string;
    locationValue: string;
    edgeLabel: string;
    bottomStatement: string;
    sillLabel: string;
    serviceLabels: [string, string, string];
    discoverLabel: string;
    motion: {
      /** Turn off when capturing zero-animation QA screenshots or when desired for a prospect. */
      enabled: boolean;
      /** Balanced is more cinematic; gentle has the same choreography at a slower pace. */
      pace: "balanced" | "gentle";
      /** Very slight hovering of the inset media after the one-time entrance. */
      ambient: boolean;
      /** Small image-depth shift on scroll, disabled automatically for reduced motion. */
    };
    system?: {
      eyebrow: string;
      modes: [
        { id: "cool"; label: string; detail: string },
        { id: "warm"; label: string; detail: string },
        { id: "pure"; label: string; detail: string },
      ];
    };
    media: {
      primarySrc: string;
      primaryAlt: string;
      primaryPosition: string;
      /** For picture-window/keepsake only. Open-door always displays the entire image without cropping. */
      fit: "contain" | "cover";
      /** Backdrop for the alternate fixed-window layouts only. */
      backdrop: "matte" | "blur";
      aspectRatio?: string;
    };
  };

  seo: {
    title: string;
    description: string;
  };

  contact: {
    phoneDisplay: string;
    phoneHref: string;
    email: string;
    address: string;
    contactUrl: string;
    servicesUrl: string;
  };

  brandStandard: {
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    bodyTitle: string;
    body: string;
    callLabel: string;
    availabilityLabel: string;
    panelEyebrow: string;
    panelTitle: string;
    panelFooter: string;
    handoff: string;
    items: Array<{
      icon: StandardIcon;
      label: string;
      detail: string;
    }>;
  };

  services: {
    eyebrow: string;
    introLine1: string;
    introLine2: string;
    summaryEyebrow: string;
    summaryTitle: string;
    summaryBody: string;
    summaryCta: string;
    items: [
      ServiceConfig,
      ServiceConfig,
      ServiceConfig,
      ServiceConfig,
      ServiceConfig,
    ];
  };

  coverage: {
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    description: string;
    featuredLocation: string;
    locationDetail: string;
    ctaLabel: string;
    networkLabel: string;
    regionLabel: string;
    metrics: [
      { value: string; label: string },
      { value: string; label: string },
      { value: string; label: string },
    ];
    locations: CoverageLocation[];
  };

  contactSection: {
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    body: string;
    primaryCta: string;
    secondaryCta: string;
    submissionMode: ContactSubmissionMode;
    formEndpoint: string;
    successMessage: string;
  };
};

export type ServiceConfig = {
  name: string;
  shortName: string;
  image: string;
  description?: string;
};

export const siteConfig: SiteConfig = {

  brand: {
    name: "Service Air Eastern Shore",
    shortName: "Service Air",
    logo: "/brand/company-logo.webp",
    logoLight: "/brand/company-logo.webp",
    region: "Baldwin · Mobile · Eastern Shore"
  },

  theme: {
    style: "clean",
    colors: {
      brandPrimary: "#174E9B",
      brandSecondary: "#D94C59",
      brandAccent: "#4E99D1",
      page: "#101B24",
      surfaceDark: "#0A141C",
      surfaceDarkAlt: "#132633",
      surfaceElevated: "#1C3542",
      surfaceSoft: "#F3F6F4",
      textPrimary: "#F8FAF9",
      textSecondary: "#DAE3E4",
      textMuted: "#93A7AA",
      textOnBrand: "#FFFFFF",
      borderSubtle: "#31454C",
      borderStrong: "#567079",
      glowPrimary: "#174E9B",
      glowSecondary: "#D94C59",
      networkLine: "#4E99D1",
      success: "#70A982",
      service1: "#174E9B",
      service2: "#4E99D1",
      service3: "#D94C59",
      service4: "#D94C59",
      service5: "#174E9B"
    }
  },

  header: {
    navServices: "Services",
    navAreas: "Service areas",
    navContact: "Contact",
    helpLabel: "Call 251-306-2761",
    ctaLabel: "Request service",
    mobileEyebrow: "LANETT · AUBURN · OPELIKA · VALLEY · WEST POINT",
    mobileCallLabel: "Call now"
  },

  opening: {
    enabled: false,
    durationMs: 1400,
    eyebrow: "BALDWIN · MOBILE · EASTERN SHORE",
    line1: "Service Air",
    line2: "Local comfort.",
    detail: "Service Air Eastern Shore serves Baldwin, Escambia, and Mobile counties in Alabama and Santa Rosa County in Florida. The company lists 24/7 live answering and emergency HVAC service.",
    location: "Since 1999 · 24/7 live answering",
    skipLabel: "Skip intro"
  },

  hero: {
    layout: "service-craft",
    eyebrow: "BALDWIN · MOBILE · EASTERN SHORE · LOCAL HVAC",
    headlineLine1: "Comfort, on call.",
    headlineLine2: "Eastern Shore.",
    description: "Heating and cooling service across the Eastern Shore and surrounding Gulf Coast counties, with 24-hour emergency response.",
    primaryCta: "Request service",
    secondaryCta: "Call Service Air",
    locationLabel: "BALDWIN \u00b7 MOBILE \u00b7 EASTERN SHORE",
    locationValue: "Baldwin \u00b7 Mobile \u00b7 Eastern Shore",
    edgeLabel: "Serving Eastern Shore \u00b7 Gulf Coast",
    bottomStatement: "COOLING · HEATING · REPAIR",
    sillLabel: "Since 1999 · 24/7 live answering",
    serviceLabels: ["Cooling service", "Heating service", "Emergency HVAC"],
    discoverLabel: "Explore services",
    motion: {
      enabled: true,
      pace: "gentle",
      ambient: false
    },
    system: {
      eyebrow: "LOCAL COMFORT / IN MOTION",
      modes: [
        {
          id: "cool",
          label: "Cooling",
          detail: "A considered path from warm intake to balanced, conditioned air."
        },
        {
          id: "warm",
          label: "Heating",
          detail: "Steady circulation, carefully controlled for colder days."
        },
        {
          id: "pure",
          label: "Air quality",
          detail: "A focus on filtration and the air moving through every room."
        }
      ]
    },
    media: {
      primarySrc: "/hero/client-hero.png",
      primaryAlt: "Service Air Eastern Shore technician standing beside the company service van",
      primaryPosition: "center center",
      fit: "contain",
      backdrop: "matte",
      aspectRatio: "965 / 496"
    }
  },

  seo: {
    title: "Service Air Eastern Shore | Heating & Cooling in Silverhill",
    description: "Service Air Eastern Shore serves Baldwin, Escambia, and Mobile counties in Alabama and Santa Rosa County in Florida. The company lists 24/7 live answering and emergency HVAC service."
  },

  contact: {
    phoneDisplay: "251-306-2761",
    phoneHref: "tel:+12513062761",
    email: "",
    address: "Silverhill, AL",
    contactUrl: "#contact",
    servicesUrl: "#services"
  },

  brandStandard: {
    eyebrow: "Since 1999 · 24/7 live answering",
    titleLine1: "Comfort, handled locally.",
    titleLine2: "Heating and cooling for the Gulf Coast.",
    bodyTitle: "Since 1999 · 24/7 live answering",
    body: "Service Air Eastern Shore serves Baldwin, Escambia, and Mobile counties in Alabama and Santa Rosa County in Florida. The company lists 24/7 live answering and emergency HVAC service.",
    callLabel: "Call now",
    availabilityLabel: "Baldwin · Escambia · Mobile · Santa Rosa Counties",
    panelEyebrow: "SERVICE AIR EASTERN SHORE",
    panelTitle: "Service Air Eastern Shore serves Baldwin, Escambia, and Mobile counties in Alabama and Santa Rosa County in Florida. The company lists 24/7 live answering and emergency HVAC service.",
    panelFooter: "Baldwin · Escambia · Mobile · Santa Rosa Counties",
    handoff: "Explore Service Air Eastern Shore services.",
    items: [
      {
        icon: "cooling",
        label: "Air conditioning",
        detail: "Air conditioning repair, replacement, and system installation."
      },
      {
        icon: "heating",
        label: "Heating systems",
        detail: "Heating equipment service and new system installation."
      },
      {
        icon: "maintenance",
        label: "Preventive maintenance",
        detail: "Seasonal tune-ups and service agreements to help keep systems working efficiently."
      }
    ]
  },

  services: {
    eyebrow: "SERVICE AIR EASTERN SHORE · SERVICES",
    introLine1: "All season",
    introLine2: "comfort care.",
    summaryEyebrow: "BALDWIN · MOBILE · EASTERN SHORE",
    summaryTitle: "Service Air Eastern Shore serves Baldwin, Escambia, and Mobile counties in Alabama and Santa Rosa County in Florida. The company lists 24/7 live answering and emergency HVAC service.",
    summaryBody: "Service Air Eastern Shore serves Baldwin, Escambia, and Mobile counties in Alabama and Santa Rosa County in Florida. The company lists 24/7 live answering and emergency HVAC service.",
    summaryCta: "Talk to the team",
    items: [
      {
        name: "Cooling service",
        shortName: "Cooling service",
        image: "/services/01.svg",
        description: "Cooling system service for homes on the Eastern Shore."
      },
      {
        name: "Heating service",
        shortName: "Heating service",
        image: "/services/02.svg",
        description: "Heating services for residential systems."
      },
      {
        name: "Repairs & replacement",
        shortName: "Repairs & replacem",
        image: "/services/03.svg",
        description: "Repair and replacement for HVAC equipment."
      },
      {
        name: "Preventive maintenance",
        shortName: "Preventive mainten",
        image: "/services/04.svg",
        description: "Preventive care for year-round system performance."
      },
      {
        name: "Emergency HVAC",
        shortName: "Emergency HVAC",
        image: "/services/05.svg",
        description: "Emergency HVAC service with 24/7 live answering."
      }
    ]
  },

  coverage: {
    eyebrow: "LOCAL SERVICE AREA",
    titleLine1: "Comfort close",
    titleLine2: "to home.",
    description: "Baldwin · Escambia · Mobile · Santa Rosa Counties.",
    featuredLocation: "Silverhill, AL",
    locationDetail: "Serving Baldwin · Escambia · Mobile · Santa Rosa Counties.",
    ctaLabel: "Contact the team",
    networkLabel: "LOCAL SERVICE NETWORK",
    regionLabel: "Baldwin · Escambia · Mobile · Santa Rosa Counties",
    metrics: [
      {
        value: "5 communities",
        label: "Coverage shown"
      },
      {
        value: "Since 1999 · 24/7 live answering",
        label: "Service commitment"
      },
      {
        value: "Local team",
        label: "Baldwin · Mobile · Eastern Shore"
      }
    ],
    locations: [
      { name: "Silverhill, AL", kind: "city", lat: 30.5463, lng: -87.7486, hub: true },
      { name: "Daphne, AL", kind: "city", lat: 30.6035, lng: -87.9036, hub: false },
      { name: "Fairhope, AL", kind: "city", lat: 30.5229, lng: -87.9033, hub: false },
      { name: "Foley, AL", kind: "city", lat: 30.4066, lng: -87.6836, hub: false },
      { name: "Pensacola, FL", kind: "city", lat: 30.4213, lng: -87.2169, hub: false }
    ]
  },

  contactSection: {
    eyebrow: "LET’S TALK COMFORT",
    titleLine1: "Tell us what",
    titleLine2: "you need.",
    body: "Contact Service Air Eastern Shore about heating, cooling, or service for your home or business.",
    primaryCta: "Request service",
    secondaryCta: "Call Service Air Eastern Shore",
    submissionMode: "demo",
    formEndpoint: "",
    successMessage: "Thanks for reaching out. This concept form is a preview and is not connected yet; call 251-306-2761 to contact Service Air Eastern Shore."
  }
};
