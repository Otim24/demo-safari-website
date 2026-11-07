export interface Destination {
  id: string;
  slug: string;
  name: string;
  region: string;
  elevation: string;
  areaKm2: string;
  heroImage: string;
  summary: string;
  overview: string;
  keyWildlife: string[];
  signatureExperience: string;
  bestSeason: string;
  recommendedStay: string;
  lodgePartners: {
    name: string;
    tier: string;
    description: string;
  }[];
  monthlyGuide: {
    season: string;
    months: string;
    conditions: string;
  }[];
  practicalTips: string[];
}

export const destinationsData: Destination[] = [
  {
    id: "bwindi",
    slug: "bwindi-impenetrable-national-park",
    name: "Bwindi Impenetrable National Park",
    region: "Southwestern Uganda, Albertine Rift",
    elevation: "1,160 to 2,607 meters",
    areaKm2: "321 km²",
    heroImage: "https://images.unsplash.com/photo-1534188753412-3e26d0d618d6?auto=format&fit=crop&w=1600&q=80",
    summary: "Ancient UNESCO Pleistocene rainforest refuge sheltering over 450 wild mountain gorillas across four distinct wilderness sectors.",
    overview: "Dating back more than 25,000 years, Bwindi Impenetrable Forest is one of Africa's most biologically diverse ancient canopies. Rising steeply along the edge of the Western Rift Valley, the steep jungle ridges provide habitat for almost half of the world's surviving mountain gorillas. Tracking takes place across four dedicated trailheads: Buhoma in the north, Ruhija in the east, and Rushaga and Nkuringo in the south.",
    keyWildlife: [
      "Mountain Gorillas (Gorilla beringei beringei)",
      "L'Hoest's Monkeys",
      "Black-and-White Colobus",
      "African Forest Elephants",
      "African Green Broadbill (Endemic Albertine Rift bird)",
      "Giant Forest Hogs"
    ],
    signatureExperience: "Four-hour Mountain Gorilla Habituation Experience in Rushaga alongside senior UWA researchers and wildlife veterinarians.",
    bestSeason: "June to September and December to February (dry hiking conditions; permits operate year-round).",
    recommendedStay: "3 to 4 nights",
    lodgePartners: [
      {
        name: "Clouds Mountain Gorilla Lodge",
        tier: "Ultra-Luxury Boutique",
        description: "Perched on a high ridge in Nkuringo with staggering views of the Virunga volcanoes and personal private butler service."
      },
      {
        name: "Sanctuary Gorilla Forest Camp",
        tier: "Luxury Tented Camp",
        description: "The only luxury camp located directly inside the official park boundary at Buhoma, where gorillas frequently stroll through camp lawns."
      },
      {
        name: "Bwindi Lodge by Volcanoes Safaris",
        tier: "Eco-Luxury Lodge",
        description: "Overlooks the primary forest canopy with bespoke banda suites and direct walking access to the northern park gate."
      },
      {
        name: "Four Gorillas Lodge",
        tier: "Boutique Forest Lodge",
        description: "Situated in the southern Rushaga sector, offering immediate proximity to the four-hour habituation trailhead."
      }
    ],
    monthlyGuide: [
      {
        season: "Peak Dry Hiking Window",
        months: "June, July, August, September",
        conditions: "Minimal rainfall, firmer footpaths, optimal natural light for forest photography."
      },
      {
        season: "Secondary Dry Season",
        months: "December, January, February",
        conditions: "Warm days, clear highland views, high demand for gorilla tracking permits."
      },
      {
        season: "Green Flowering Season",
        months: "March, April, May, October, November",
        conditions: "Lush botanical growth, misty canopy atmosphere, gorillas often feed on lower slopes requiring shorter hikes."
      }
    ],
    practicalTips: [
      "Permits must be reserved 4 to 8 months in advance due to strict daily visitor limits.",
      "Pack sturdy waterproof boots with ankle support and gardening gloves for stinging nettles.",
      "A local porter can be hired for $20 per trek at the briefing center, which directly supports local households."
    ]
  },
  {
    id: "queen-elizabeth",
    slug: "queen-elizabeth-national-park",
    name: "Queen Elizabeth National Park",
    region: "Western Uganda, Rwenzori Foothills",
    elevation: "910 to 1,390 meters",
    areaKm2: "1,978 km²",
    heroImage: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=1600&q=80",
    summary: "Mosaic savanna, volcanic crater lakes, and the legendary fig tree climbing lions of the remote Ishasha sector.",
    overview: "Set against the jagged silhouette of the Rwenzori Mountains, Queen Elizabeth National Park encompasses acacia savannas, underground rain forests in Kyambura Gorge, and the natural Kazinga Channel connecting Lake Edward and Lake George. The southern Ishasha wilderness is famed for resident lion prides that climb massive sycamore fig trees during the midday heat.",
    keyWildlife: [
      "Tree-climbing Lions of Ishasha",
      "Kazinga Channel Hippopotamus pods",
      "Ugandan Kobs",
      "Cape Buffalos",
      "Leopards",
      "Kyambura Gorge Chimpanzees",
      "Over 600 recorded bird species"
    ],
    signatureExperience: "Private electric boat safari on the Kazinga Channel for eye-level photography of bathing elephant herds and skimmers.",
    bestSeason: "January to February and June to August for prime game viewing along savanna waterholes.",
    recommendedStay: "2 to 3 nights",
    lodgePartners: [
      {
        name: "Ishasha Wilderness Camp",
        tier: "Classic Luxury Tented",
        description: "Situated directly on the Ntungwe River inside the remote southern sector where elephants regularly drink outside canvas verandas."
      },
      {
        name: "Kyambura Gorge Lodge",
        tier: "Restored Coffee Estate Luxury",
        description: "Eco-chic luxury lodge overlooking the dramatic sunken chasm of Kyambura Gorge with private heated plunge pools."
      },
      {
        name: "Elephant Plains Lodge",
        tier: "Panoramic Savanna Lodge",
        description: "Set high on the western escarpment offering panoramic views across Lake Kikorongo and the Kasenyi plains."
      }
    ],
    monthlyGuide: [
      {
        season: "Prime Game Viewing",
        months: "January, February, June, July, August",
        conditions: "Grasslands are short, predators concentrate near waterholes, clear views of the Rwenzori mountain range."
      },
      {
        season: "Migratory Bird Arrivals",
        months: "November, December, March, April",
        conditions: "Palearctic migratory birds arrive in huge numbers along the Kazinga Channel shores."
      }
    ],
    practicalTips: [
      "Schedule the Kazinga Channel boat safari for the afternoon when elephants descend to the water to bathe.",
      "The drive between northern Kasenyi and southern Ishasha takes approximately 2 hours through scenic savanna.",
      "Bring a telephoto lens (at least 300mm to 500mm) for tree-climbing lions resting high in fig branches."
    ]
  },
  {
    id: "kibale",
    slug: "kibale-national-park",
    name: "Kibale National Park",
    region: "Western Uganda, Fort Portal Plateau",
    elevation: "1,100 to 1,590 meters",
    areaKm2: "795 km²",
    heroImage: "https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?auto=format&fit=crop&w=1600&q=80",
    summary: "The primate capital of East Africa, harboring 13 distinct primate species and the densest chimpanzee population on the continent.",
    overview: "Kibale Forest preserves a moist evergreen woodland transition between highland and lowland ecosystems. Over 1,500 eastern chimpanzees reside in this protected forest canopy. The Kanyanchu sector serves as the central hub for habituated troop tracking and full-day habituation expeditions guided by expert primatologists.",
    keyWildlife: [
      "Eastern Chimpanzees (Pan troglodytes schweinfurthii)",
      "Central African Red Colobus",
      "Grey-cheeked Mangabeys",
      "Red-tailed Monkeys",
      "Blue Monkeys",
      "Green-breasted Pitta"
    ],
    signatureExperience: "Full-day Chimpanzee Habituation Experience (CHEX) following a wild troop from their morning de-nesting to evening nest construction.",
    bestSeason: "December to February and June to September for dry forest trails and high fig fruiting activity.",
    recommendedStay: "2 nights",
    lodgePartners: [
      {
        name: "Ndali Crater Lodge",
        tier: "Heritage Colonial Elegance",
        description: "Built on the edge of an extinct volcanic crater lake with dramatic stone cottages, candlelit dining, and private sauna."
      },
      {
        name: "Kyaninga Lodge",
        tier: "Log Architecture Masterpiece",
        description: "Handcrafted from massive eucalyptus timbers perched above Lake Kyaninga against the Rwenzori backdrop."
      },
      {
        name: "Primate Lodge Kibale",
        tier: "Deep Forest Eco-Lodge",
        description: "Located right inside the national park gate, just minutes from the morning chimpanzee tracking briefing."
      }
    ],
    monthlyGuide: [
      {
        season: "Dry Canopy Trekking",
        months: "December, January, February, June, July, August",
        conditions: "Minimal mud on forest paths, high fig fruiting trees attract vocal chimpanzee groups."
      },
      {
        season: "Bird Display & Pitta Quest",
        months: "May, June, September",
        conditions: "Green-breasted Pitta display season in early morning forest walks."
      }
    ],
    practicalTips: [
      "Morning tracking starts at 08:00; afternoon tracking begins at 14:00.",
      "Pair your chimpanzee tracking with an afternoon boardwalk excursion through the community-owned Bigodi Wetland.",
      "Tuck trousers into socks to protect against safari ants when stopping in dense leaf litter."
    ]
  },
  {
    id: "murchison-falls",
    slug: "murchison-falls-national-park",
    name: "Murchison Falls National Park",
    region: "Northwestern Uganda, Victoria Nile",
    elevation: "619 to 1,292 meters",
    areaKm2: "3,893 km²",
    heroImage: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1600&q=80",
    summary: "Uganda's largest conservation territory where the entire Nile river explodes through a six-meter cleft into the Albert Rift.",
    overview: "Divided in two by the roaring Victoria Nile, Murchison Falls National Park is a landscape of expansive Borassus palm savanna, riverine woodlands, and sweeping floodplains. The dramatic centerpiece is the waterfall itself, where millions of liters of water plunge 43 meters into the Devil's Cauldron every second.",
    keyWildlife: [
      "Rothschild Giraffes",
      "Nubian Giraffe populations",
      "Nile Crocodiles",
      "Lions and Leopards",
      "Shoebill Stork (Delta region)",
      "Jackson's Hartebeests",
      "African Elephants"
    ],
    signatureExperience: "Dawn river boat cruise to the Lake Albert Delta confluence searching for prehistoric shoebill storks.",
    bestSeason: "December to February and June to September when game concentrates heavily along the river tracks.",
    recommendedStay: "3 nights",
    lodgePartners: [
      {
        name: "Baker's Lodge",
        tier: "Riverfront Luxury Safari",
        description: "Situated on the south bank of the Nile with thatched safari cottages, personal river decks, and hippos calling at night."
      },
      {
        name: "Nile Safari Lodge",
        tier: "Contemporary Eco-Chic",
        description: "Ultra-luxury wooden chalets with private plunge pools overlooking the tranquil waters of the Nile."
      },
      {
        name: "Paraa Safari Lodge",
        tier: "Classic Heritage Hotel",
        description: "Overlooks the northern ferry crossing with swimming pool and direct access to northern game drive tracks."
      }
    ],
    monthlyGuide: [
      {
        season: "Peak Wildlife Congregation",
        months: "December, January, February",
        conditions: "Warm and dry; animals congregate along the river banks and open plains."
      },
      {
        season: "Summer Wildlife Window",
        months: "June, July, August",
        conditions: "Clear skies and excellent boat cruise conditions along the falls."
      }
    ],
    practicalTips: [
      "Combine the falls boat cruise with a guided hike to the top of the falls for breathtaking panoramic views.",
      "The Lake Albert Delta boat tour takes 4 to 5 hours and is the premier expedition for locating shoebill storks.",
      "Break the overland journey from Kampala with on-foot rhino tracking at Ziwa Rhino Sanctuary."
    ]
  },
  {
    id: "kidepo-valley",
    slug: "kidepo-valley-national-park",
    name: "Kidepo Valley National Park",
    region: "Northeastern Uganda, Karamoja Borderlands",
    elevation: "914 to 2,750 meters",
    areaKm2: "1,442 km²",
    heroImage: "https://images.unsplash.com/photo-1534177616072-ef7dc120449d?auto=format&fit=crop&w=1600&q=80",
    summary: "One of Africa's most rugged and untouched wildernesses, characterized by golden plains bordered by the jagged Morungole range.",
    overview: "Tucked into the far northeastern corner of Uganda near South Sudan and Kenya, Kidepo Valley is an awe-inspiring expanse of semi-arid savanna. Because of its remote access, it receives a fraction of visitor numbers, guaranteeing an intensely private wildlife encounter with massive buffalo herds and species found nowhere else in Uganda.",
    keyWildlife: [
      "Cheetahs (Acinonyx jubatus)",
      "Caracals and Bat-eared Foxes",
      "Over 4,000 Cape Buffalos in Narus Valley",
      "Lions resting on granite kopjes",
      "Somali Ostriches",
      "Greater Kudu"
    ],
    signatureExperience: "Sunset wilderness drive through the Narus River basin accompanied by a veteran armed ranger naturalist.",
    bestSeason: "September to March for crystal clear skies and prime predator congregation at remaining water points.",
    recommendedStay: "3 to 4 nights",
    lodgePartners: [
      {
        name: "Apoka Safari Lodge",
        tier: "Wilderness Luxury Sanctuary",
        description: "Built directly on a granite kopje in the heart of the park with deep stone bathtubs overlooking grazing zebras."
      },
      {
        name: "Adere Safari Lodge",
        tier: "Panoramic Valley Lodge",
        description: "Perched just outside the park boundary offering traditional thatched bandas with dramatic mountain vistas."
      }
    ],
    monthlyGuide: [
      {
        season: "Golden Savanna Season",
        months: "December, January, February, March",
        conditions: "Dry seasonal river beds, lions and cheetahs congregate around permanent springs in Narus Valley."
      },
      {
        season: "Green Flowering Season",
        months: "April, May, September, October",
        conditions: "Dramatic skies against the Morungole peaks, cooler temperatures, fresh vegetation."
      }
    ],
    practicalTips: [
      "A scheduled domestic bush flight from Entebbe to Apoka airstrip saves approximately 10 hours of rough road travel.",
      "Early morning game drives in Narus Valley offer the highest odds of spotting cheetahs and caracals.",
      "A respectful, arranged visit to a traditional Karamojong Manyatta offers rich cultural dialogue."
    ]
  },
  {
    id: "lake-mburo",
    slug: "lake-mburo-national-park",
    name: "Lake Mburo National Park",
    region: "Western Uganda, Ankole Plains",
    elevation: "1,220 to 1,828 meters",
    areaKm2: "370 km²",
    heroImage: "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?auto=format&fit=crop&w=1600&q=80",
    summary: "Rolling acacia woodlands and peaceful lakes ideal for guided walking safaris, night drives, and horseback wildlife tracking.",
    overview: "Lake Mburo is an intimate, serene gem situated midway between Kampala and the gorilla highlands. Free from dangerous elephant populations, it is Uganda's premier sanctuary for walking safaris, allowing guests to step out of vehicles and walk among plains zebras, elands, and impalas alongside trained rangers.",
    keyWildlife: [
      "Burchell's Zebras",
      "Livingstone's Elands",
      "Impalas (Uganda's only park with impalas)",
      "Leopards (highest density in Uganda)",
      "Defassa Waterbucks",
      "African Finfoot"
    ],
    signatureExperience: "Guided morning walking safari across the acacia ridges followed by a night drive focused on hunting leopards.",
    bestSeason: "Year-round accessibility; dry periods from June to August and December to February are especially pleasant.",
    recommendedStay: "1 to 2 nights",
    lodgePartners: [
      {
        name: "Mihingo Lodge",
        tier: "Eco-Luxury Granite Ridge",
        description: "High-end luxury tented suites built on massive granite rocks overlooking a private waterhole where wildlife gathers at dusk."
      },
      {
        name: "Kigambira Safari Lodge",
        tier: "Contemporary Lake Retreat",
        description: "Nestled between Lake Kigambira and the Rubanga Forest, offering modern cottages and swimming pool."
      }
    ],
    monthlyGuide: [
      {
        season: "Prime Walking Season",
        months: "June, July, August, December, January",
        conditions: "Dry walking trails, easy game tracking on foot, pleasant sunny mornings."
      },
      {
        season: "Birdwatching Bloom",
        months: "March, April, October, November",
        conditions: "Lush green backdrop, excellent sightings of African Finfoot along papyrus lake fringes."
      }
    ],
    practicalTips: [
      "Lake Mburo is the ideal midpoint stopover to break up the drive between Entebbe and Bwindi.",
      "Take advantage of the walking safari, as it is one of the few places in East Africa where walking among herds is safe.",
      "Inquire about the night game drive using high-powered spotlights for high leopard sighting success."
    ]
  }
];
