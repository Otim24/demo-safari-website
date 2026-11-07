export interface CompanyInfo {
  name: string;
  legalName: string;
  tagline: string;
  isDemoNotice: string;
  foundingYear: number;
  licenseNumber: string;
  associationNumber: string;
  headquarters: string;
  entebbeDispatch: string;
  phoneMain: string;
  phoneWhatsapp: string;
  emailBookings: string;
  emailConcierge: string;
  officeHours: string;
}

export const companyData: CompanyInfo = {
  name: "Demo Safaris Uganda",
  legalName: "Demo Safaris Uganda (Demonstration Portfolio Project)",
  tagline: "Bespoke Overland Journeys, Primate Habituation, and Private Conservation Safaris",
  isDemoNotice: "Demonstration Showcase Website: Created for portfolio presentation purposes, not an active commercial entity.",
  foundingYear: 2012,
  licenseNumber: "Demonstration License Reference: DEMO-UTB-2026",
  associationNumber: "Demonstration Tour Operator Showcase",
  headquarters: "Plot 14, Kyaggwe Road, Nakasero, Kampala, Uganda",
  entebbeDispatch: "Suite 4, Victoria Heights Plaza, Airport Road, Entebbe, Uganda",
  phoneMain: "+256 784 811 929",
  phoneWhatsapp: "+256 784 811 929",
  emailBookings: "info@demosafarisuganda.com",
  emailConcierge: "concierge@demosafarisuganda.com",
  officeHours: "Monday to Saturday, 08:00 to 18:00 East Africa Time (EAT)",
};

export const trustHighlights = [
  {
    title: "Official UWA Permit Coordination",
    description: "Direct priority allocation models for Bwindi gorilla tracking, gorilla habituation, and Kibale chimpanzee permits.",
  },
  {
    title: "Certified Professional Naturalists",
    description: "Expedition concepts led by career Ugandan wildlife naturalists with specialized ornithology and primate tracking qualifications.",
  },
  {
    title: "AMREF Flying Doctors Air Evacuation",
    description: "Emergency aero-medical transport coverage standard across all remote Ugandan national reserves.",
  },
  {
    title: "Custom Long-Wheelbase 4x4 Fleet",
    description: "Extended Toyota Land Cruisers with hydraulic pop-up photographic roofs, inverter power banks, and onboard chillers.",
  },
];
